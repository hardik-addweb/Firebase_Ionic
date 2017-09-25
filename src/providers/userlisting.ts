import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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
  msgVal: string = '';

    constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
      this.user = this.afAuth.authState;
      this.items = this.af.list('/ragister', {query: {limitToLast: 50}});
    }
    getUsers(){
      console.log()
      return new Promise(resolve => {
        resolve(this.items);
      })
    }
}
