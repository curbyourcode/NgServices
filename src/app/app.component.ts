import { Component } from '@angular/core';
import { CryptoService } from './crypto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coins = [];

  constructor( private cryptoService: CryptoService ) {
    this.coins = cryptoService.getMyItems();
  }
}
