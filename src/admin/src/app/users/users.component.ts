import { Component, OnInit } from '@angular/core';
import { UserListing } from '../../../../providers';

@Component({
  selector: 'app-users',
  template: require('./users.component.html'),
})
export class UserComponent implements OnInit {

  userslist: any;

  constructor(private userListing : UserListing) {
      this.alldata();
      console.log('this.userslist3',this.userslist)

   }
   ngOnInit(){
     console.log('this.userslist1',this.userslist);

   }

  alldata(){
      return new Promise(resolve => {
          this.userListing.getUsers()
          .then(udata => {
            this.userslist=udata
            console.log('this.userslist4',this.userslist)
          })
      });
  }
  ngAfterViewInit(){

      console.log('this.userslist2',this.userslist)
  }
}
