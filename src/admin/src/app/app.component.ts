import { Component,ViewContainerRef } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  template: require('./app.component.html')
})
export class AppComponent {


 constructor(public slimLoadingBarService:SlimLoadingBarService,public toastr : ToastsManager,vcr:ViewContainerRef) {
   slimLoadingBarService.start();
     this.toastr.setRootViewContainerRef(vcr);
 }

}
