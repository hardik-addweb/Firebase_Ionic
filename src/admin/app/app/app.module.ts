import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicModule } from 'ionic-angular';
import { AppComponent }   from './app.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent),
    RouterModule.forRoot([])
  ],
  declarations: [AppComponent],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
