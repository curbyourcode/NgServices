import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// service
import { CryptoService } from './crypto.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule
  ],
  providers: [
  CryptoService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
