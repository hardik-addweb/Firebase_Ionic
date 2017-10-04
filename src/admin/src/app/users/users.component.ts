import { Component, OnInit } from '@angular/core';
import { UserListing } from '../../../../providers';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Routes, ActivatedRoute } from '@angular/router';


@Component({
  template: require('./users.component.html'),
})
export class UserComponent implements OnInit {

  userslist: any;


  constructor(private userListing : UserListing,public slimLoadingBarService : SlimLoadingBarService,public toastr:ToastsManager,private route: ActivatedRoute) {
    this.alldata();
      this.slimLoadingBarService.start();
   }
   ngOnInit(){
   }

  alldata(){
    return new Promise(resolve => {
        this.userListing.getUsers()
        .then(udata => {
          this.userslist=udata
          this.slimLoadingBarService.complete();
        })
    });
  }
  ngAfterViewInit(){
      console.log('this.userslist2',this.userslist)
  }
  doAdddata(){

  }
  doDelete(key){
    this.userListing.purgeUsers(key)
    .then((res) => {
       this.toastr.warning(res.message, 'Alert!');
    })
  }
  //  doUpdate(itemdata){
  //  console.log('itemdata',itemdata.$key);
  //     this.route.navigate(['/users/edit'],{queryParams :{id:itemdata.$key}});
  //  }
}
