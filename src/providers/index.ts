import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { FirebaseConnect } from './firebaseconnect';
import { UserListing } from './userlisting';

const firebaseConfig = require('../../config/firebase.js');

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot({
      // FIXME: this is for development, production builds should use sqlite first for persistence
      driverOrder: ['indexeddb', 'sqlite', 'websql'],
    }),
  ],
  providers: [
    FirebaseConnect,
    UserListing,

  ],
})
export class ProvidersModule {}

export {
  FirebaseConnect,
  UserListing,
};

//export { ICategory, ISubCategory, INews, IVenue, IVoucher } from './entities';

declare var require: any;
