import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {WalletService} from "../services/wallet/wallet.service";
import {AddressesComponent} from "../components/addresses/addresses.component";

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, AddressesComponent]
})
export class AddressPage implements OnInit {

  constructor(
    public walletService: WalletService
  ) { }

  async ngOnInit() {
    await this.walletService.loadSaved();
  }

}
