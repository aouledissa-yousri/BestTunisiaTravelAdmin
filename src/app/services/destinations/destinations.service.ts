import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/compat/firestore"
import { Destination } from "../../models/destination"
import * as firestore from "@firebase/firestore"
 

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  

  constructor(private firestore: AngularFirestore) { }

  linkToDb(){
    return this.firestore.collection("BestTunisiaTravel").doc("offers").valueChanges()
  }

  delete(destinations: Destination){
    this.firestore.collection("BestTunisiaTravel").doc("offers").update({
      offers: firestore.arrayRemove(destinations)
    })
    return
  }

  find(word: string, destinations: Destination[]){
    let result: Destination[] = []
    for(let i=0; i<destinations.length; i++){
      if(destinations[i].name.indexOf(word) != -1)
        result.push(destinations[i])     
    }
    return result
  }

  findById(id: number, destinations: Destination[]){
    for(let i=0; i<destinations.length; i++){
      if(id == destinations[i].id)
        return true
    }
    return false
  }

  add(offer: any){
    this.firestore.collection("BestTunisiaTravel").doc("offers").update({
      offers: firestore.arrayUnion(offer)
    })
  }

}
