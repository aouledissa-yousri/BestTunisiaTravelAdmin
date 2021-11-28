import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { LogInService } from '../services/logIn/logIn.service';
import { DestinationsService } from "../services/destinations/destinations.service";
import { Destination } from '../models/destination';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  searchCategory: string[] = []
  destinations: Destination[] = []
  window = {
    trigger: 0,
    open: false
  }

  constructor(private loginService: LogInService, private router: Router, private destinationsService: DestinationsService) { }

  ngOnInit(): void {
    this.fetchOffers()
  }
  

  logout(){
    this.loginService.logout()
    this.router.navigate(["log_in"])
  }

  fetchOffers(){
    this.destinationsService.linkToDb().subscribe((obj: any) => {
      this.destinations = JSON.parse(JSON.stringify(obj)).offers
    })
  }

  openDialogue(id: number){
    this.window.trigger = id
    this.window.open = true 
    document.getElementById("parent")?.classList.add("blur")
    document.getElementById("logout")?.classList.add("blur")
  }

  closeDialogue(){
    this.window.trigger = 0
    this.window.open = false
    document.getElementById("parent")?.classList.remove("blur")
    document.getElementById("logout")?.classList.remove("blur")
  }

  delete(x: number){
    for(let i=0; i<this.destinations.length; i++){
      if(this.destinations[i].id == x){
        this.destinationsService.delete(this.destinations[i])
        break
      }
    }
    this.closeDialogue()
  }


  search(word: string){
    if(word == ""){
      this.fetchOffers()
    }else{
      this.destinations = this.destinationsService.find(word, this.destinations)
    }
  }

  seeMore(id: number){
    this.router.navigate(["more", id])
  }

  modify(id: number){
    this.router.navigate(["modify", id])
  }

  route(route: string){
    this.router.navigate([route])
  }

}
