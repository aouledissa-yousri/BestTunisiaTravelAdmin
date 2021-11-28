import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Destination } from '../models/destination';
import { DestinationsService } from '../services/destinations/destinations.service';
import { Router } from "@angular/router"


@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  id: number = 0
  destination: Destination = new Destination(0,"","",0,false,false,[],[],"")

  constructor(private activated: ActivatedRoute, private destinationsService: DestinationsService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params["id"]
    this.fetchOffer()
  }

  private fetchOffer(){
    this.destinationsService.linkToDb().subscribe((obj: any) => {
      let destinations: Destination[] = JSON.parse(JSON.stringify(obj)).offers
      for(let i=0; i<destinations.length; i++){
        if(this.id == destinations[i].id){
          this.destination = destinations[i]
          break
        }
      }
    })
  }

  back(){
    this.router.navigate(["edit"])
  }

}
