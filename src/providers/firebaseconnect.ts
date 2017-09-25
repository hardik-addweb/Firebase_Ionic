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
export class FirebaseConnect {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
    constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
        query: {
          limitToLast: 50
        }
    });
    this.user = this.afAuth.authState;
    }
    login() {
      this.afAuth.auth.signInAnonymously();
    }

    logout() {
      this.afAuth.auth.signOut();
    }

    Send(desc: string) {
      this.items.push({ message: desc});
      this.msgVal = '';
    }

}
