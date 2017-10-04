import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import * as moment from 'moment';
import * as shortid from 'shortid';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
/*
  Generated class for the FirebaseconnectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserListing {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  sitem: any=[];
  msgVal: string = '';

    constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
      this.user = this.afAuth.authState;
      this.items = this.af.list('/ragister', {query: {limitToLast: 50}});
    }
    getUsers(){
      return new Promise(resolve => {
        resolve(this.items);
      })
    }
    setUsers(data : any) : any {
      return new Promise(resolve =>{
        this.items.push(data)
        .then((res) =>{
          const data ={
              status:0,
              message:'Record sucessfully inserted...!',
          }
          resolve(data);
        })
      })

    }
    purgeUsers(key  : any) : any{
      return new Promise(resolve =>{
        this.items.remove(key)
        .then((res) =>{
          const data ={
              status:0,
              message:'Record sucessfully deleted...!',
          }
          resolve(data);
        })
    })
  }
  getBykey(key : any ) :any {
      return new Promise (resolve => {
        //  this.af.list(`/ragister/${key}`)
          resolve(this.af.object('/ragister/'+key));
   })
  }
    updateBykey(data : any ) : any{
        return new Promise (resolve => {
          resolve(this.af.object('/ragister/'+data.$key).set(data)
            .then((res)=>{
              const data ={
                  status:0,
                  message:'Record sucessfully Updated...!',
              }
              resolve(data);
            }).catch((err) => {
              const data ={
                  status:1,
                  message:'Record sucessfully Not Updated...!',
              }
              resolve(data);
            })
          )
        })
    }
}
