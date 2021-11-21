import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { sha1 } from "../../extra"

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  connected: boolean = false

  constructor(private firestore: AngularFirestore) { }

  login(username: string, password: string){
    let db = this.firestore.collection("BestTunisiaTravel").doc("admins").valueChanges()
    db.subscribe(admins => {
      let obj = JSON.parse(JSON.stringify(admins))
      for(let i=0; i<obj.admins.length; i++)
        if(username == obj.admins[i].username && sha1.hash(password) == obj.admins[i].password)
          this.connected = true

    })
    return this.connected
  }

  logout(){
    this.connected = false
  }
}
