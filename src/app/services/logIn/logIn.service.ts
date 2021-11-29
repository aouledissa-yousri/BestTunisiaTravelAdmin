import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { sha1 } from "../../extra"


@Injectable({
  providedIn: 'root'
})
export class LogInService {


  constructor(private firestore: AngularFirestore) {
  }


  linkToDb(){
    return this.firestore.collection("BestTunisiaTravel").doc("admins").valueChanges()
  }

  createLocalStorage(userId: string, accountId: number){
    let user = {
      userId: userId,
      accountId: accountId
    }

    localStorage.setItem("user", JSON.stringify(user))
  }
  
  removeLocalStorage(){
    localStorage.removeItem("user")
  }

  
  
}