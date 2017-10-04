import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { ProvidersModule } from '../../../providers';
import { routes, ComponentModule } from './app-routing.module';
import {SlimLoadingBarModule} from 'ng2-slim-loading-bar';


@NgModule({
  declarations: [
    AppComponent,
    ComponentModule
  ],
  imports: [
    BrowserModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    ProvidersModule,
    SlimLoadingBarModule.forRoot(),
    BrowserAnimationsModule,
  ],
  exports:[SlimLoadingBarModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
