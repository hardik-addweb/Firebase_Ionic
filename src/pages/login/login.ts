import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { UserListing } from './../../providers';;
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm:any=[];
  back_data:any;
  allusersData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage,private userListing : UserListing) {

    this.getdata();
  }
  ionViewDidLoad() {

  }
  doLogin(){
    console.log('this.allusersData',this.allusersData);
    for (let i = 0 ; i< this.allusersData.length; i ++){
        if(this.allusersData[i].email == this.loginForm.email && this.allusersData[i].password == this.loginForm.password){
          console.log('1',this.allusersData[i]);
          this.storage.set('loginuser',this.allusersData[i]);
          this.navCtrl.setRoot(HomePage);

        }else{

        }
    }
  }
  getdata(){
    return new Promise( resolve => {
      this.userListing.getUsers()
      .then(res =>{
        this.back_data = res;
        this.back_data.forEach(element => {
          this.allusersData= element;
        });
      })
    })
  }
}
