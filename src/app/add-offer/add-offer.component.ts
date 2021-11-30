import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormControl, FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';
import { Destination } from '../models/destination';
import { DestinationsService } from '../services/destinations/destinations.service';


@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  form: FormGroup = new FormGroup({})
  destinations: Destination[] = []

  constructor(private router: Router, private build: FormBuilder, private destinationService: DestinationsService) { }

  ngOnInit(): void {
    this.initForm()
    this.loadOffers()
  }

  //initialize form
  private initForm(){
    this.form = this.build.group({
      id: [0, [Validators.required, Validators.min(1)]],
      name: ["", [Validators.required, Validators.pattern("[A-Z][^A-Z0-9]+")]],
      prize: [0, [Validators.required, Validators.min(1)]],
      promotion: false,
      recent: true,
      category: this.build.array([]),
      description: ["", Validators.required],
      image: ["", Validators.required]
    })
  }

  //submit form
  submit(){
    let offer = {
      id: this.form.value["id"],
      image: this.form.value["image"],
      name: this.form.value["name"],
      prize: this.form.value["prize"],
      promotion: this.form.value["promotion"],
      recent: this.form.value["recent"],
      category: this.category.value,
      comments: [],
      description: this.form.value["description"],
      reservations: 0
    }
    this.addOffer(offer)
    this.reset()
  }

  //reset form
  reset(){
    this.form.reset({
      id: [0],
      prize: [0],
      recent: true
    })
  }


  //showcase image
  

  //choose a category for the offer
  addCategory(e: any){
    if(e.target.checked){
      this.category.push(new FormControl(e.target.value))
    }else{
      for(let i=0; i<this.category.value.length; i++){
        if(e.target.value == this.category.value[i]){
          this.category.removeAt(i)
          return
        }
      }
    }
  }

  public get category(){
    return this.form.get("category") as FormArray
  }

  //prevent float numbers and operators in id
  typing(e: any){
    this.search(e.target.value)
    if(e.key == "." || e.key == "+" || e.key == "-"){
      e.preventDefault()
    }
  }

  //prevent symbols in prize
  typing2(e: any){
    this.search(e.target.value)
    if(e.key == "-" || e.key == "+"){
      e.preventDefault()
    }
  }


  //error controls

  isValid(property: string){
    return this.form.controls[property].invalid && this.form.controls[property].touched
  }

  nameIsValid(){
    return this.form.get("name")?.errors?.pattern && this.form.controls["name"].touched
  }

  nameIsEmpty(){
    return this.form.get("name")?.errors?.pattern && this.form.controls["name"].touched && (this.form.controls["name"].value == "")
  }


  //get destinations from database
  addOffer(offer: any){
    this.destinationService.linkToDb().subscribe(obj => {
      this.destinationService.add(offer)
    })
    alert("added new offer to database")
  }

  //load existing offers
  private loadOffers(){
    this.destinationService.linkToDb().subscribe((obj: any) => {
      this.destinations = JSON.parse(JSON.stringify(obj)).offers
    })
  }


  //search for existing offers 
  search(id: string){
    for(let i=0; i<this.destinations.length; i++){
      if(parseInt(id) == this.destinations[i].id)
        return true
    }
    return false
  }




}
