import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { EditComponent } from "./edit/edit.component";
import { MoreComponent } from './more/more.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { ModifyComponent } from './modify/modify.component';
import { ErrorComponent } from './error/error.component';

const config = {
  /*apiKey: "AIzaSyAyqrFjLwLBi3q9Z_2WJjQGx_sruc9v1mA",
  authDomain: "besttunisiatravel.firebaseapp.com",
  databaseURL: "https://besttunisiatravel-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "besttunisiatravel",
  storageBucket: "besttunisiatravel.appspot.com",
  messagingSenderId: "1067436259004",
  appId: "1:1067436259004:web:1b350e98004fe1a8b342b9",
  measurementId: "G-8JPF54LWL4"*/
  
  apiKey: "AIzaSyB8yTTMyXCQ0HbOqbi8Hioj-Im-9Nc3e10",
  authDomain: "besttunisiatravel-53d93.firebaseapp.com",
  projectId: "besttunisiatravel-53d93",
  storageBucket: "besttunisiatravel-53d93.appspot.com",
  messagingSenderId: "427379768924",
  appId: "1:427379768924:web:780b7af62ca2ff8a807099"
}

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    EditComponent,
    MoreComponent,
    AddOfferComponent,
    ModifyComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
