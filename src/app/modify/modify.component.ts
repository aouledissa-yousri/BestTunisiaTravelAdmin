import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Destination } from '../models/destination';
import { DestinationsService } from '../services/destinations/destinations.service';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray} from '@angular/forms';




@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit {

  id: number = 0
  destination: Destination = new Destination(0,"","",0,false,false,[],[],"",0)

  dialogue = {
    open: false
  }
  

  form: FormGroup = new FormGroup({})


  constructor(private activated: ActivatedRoute, private destinationsService: DestinationsService, private router: Router, private build: FormBuilder) { }

  ngOnInit(): void {
    this.id = this.activated.snapshot.params["id"]
    this.fetchOffer()
  }

  //get offer's data
  private fetchOffer(){
    this.destinationsService.linkToDb().subscribe((obj: any) => {
      let destinations: Destination[] = JSON.parse(JSON.stringify(obj)).offers
      for(let i=0; i<destinations.length; i++){
        if(this.id == destinations[i].id){
          this.destination = destinations[i]
          this.initForm()
          break
        }
      }
    })
  }

  //initialize form
  private initForm(){
    this.form = this.build.group({
      name: [this.destination.name, [Validators.required, Validators.pattern("[A-Z][^A-Z0-9]+")]],
      prize: [this.destination.prize, [Validators.required, Validators.min(1)]],
      promotion: this.destination.promotion,
      recent: this.destination.recent,
      category: this.build.array(this.destination.category),
      description: [this.destination.description, Validators.required],
      image: [this.destination.image, Validators.required]
    })
  }

  //back to edit menu
  back(){
    this.router.navigate(["edit"])
  }

  public get category(){
    return this.form.get("category") as FormArray
  }

  //categories
  exists(category: string){
    for(let i=0; i<this.category.value.length; i++){
      if(category == this.category.value[i])
        return true
    }
    return false
  }


  //allowing only numerical caracters in Prize
  typing(e: any){
    if(e.key == "+" || e.key == "-"){
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



  //convert value to int
  int(word: string){
    return parseInt(word)
  }

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


  //reset form
  reset(){
    this.form.reset({promotion: false, recent: false})
    alert(this.form.value["recent"])
  }

  //submit form 
  submit(){
    let newOffer = {
      id: this.destination.id,
      image: this.form.value["image"],
      name: this.form.value["name"],
      prize: this.form.value["prize"],
      promotion: this.form.value["promotion"],
      recent: this.form.value["recent"],
      category: this.category.value,
      comments: this.destination.comments,
      description: this.form.value["description"],
      reservations: this.destination.reservations
    }

    this.destinationsService.update(this.destination, newOffer)
    this.alertOfferUpdated()
  }

  alertOfferUpdated(){
    this.dialogue.open = true
    document.getElementById("form")?.classList.add("blur")
  }

  closeDialogue(){
    this.dialogue.open = false
    document.getElementById("form")?.classList.remove("blur")
    this.back()
  }


}
