import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule, ToastController} from '@ionic/angular';
import {WalletService, Network} from "../services/wallet/wallet.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CreatePage implements OnInit {
  public name: string = '';
  public selectedNetwork: Network = 'testnet';

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    public walletService: WalletService
  ) {
  }

  async ngOnInit() {
  }

  submitRequest() {
    console.log(`Name: ${this.name}`);
    console.log(`Network: ${this.selectedNetwork}`);

    const isTestnet = this.selectedNetwork === 'testnet';
    // Create wallet
    this.walletService.createWallet(isTestnet, this.name).then(async (wallet) => {
      console.log('Wallet created', wallet);
      // Show toast
      const toast = await this.toastCtrl.create({
        message: 'Wallet "' + this.name + '" created successfully',
        duration: 2500,
        position: 'top'
      });
      await toast.present();
    });

    this.router.navigate(['/tabs/home']);
  }

}
