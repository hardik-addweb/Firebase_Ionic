import { Component, OnInit} from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';

@Component({
  selector: 'app-dashboard',
  template: require('./dashboard.component.html'),
})
export class DashboardComponent implements OnInit {
  constructor(public slimLoadingBarService:SlimLoadingBarService) {
   }
   ngOnInit(){
   }
   ngAfterViewInit(){
     this.slimLoadingBarService.complete();
   }

}
