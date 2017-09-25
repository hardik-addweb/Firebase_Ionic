import { Component, OnInit,ViewChild} from '@angular/core';
import { UserComponent } from '../users/users.component';
import { LoginComponent } from '../login/login.component'
import { Nav, Platform } from 'ionic-angular';

@Component({
  selector: 'app-dashboard',
  template: require('./dashboard.component.html'),
})
export class DashboardComponent implements OnInit {
  constructor() {
   }
   ngOnInit(){
   }

}
