import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProvidersModule } from '../../../providers';
import { UserComponent } from './users/users.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProvidersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
