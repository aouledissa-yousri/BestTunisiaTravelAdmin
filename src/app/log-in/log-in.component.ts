import { Component, OnInit } from '@angular/core';
import { LogInService } from '../services/logIn/logIn.service';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { sha1 } from "../extra"



@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  form: FormGroup = new FormGroup({})

  constructor(private loginService: LogInService, private router: Router, private build: FormBuilder) { }

  
  ngOnInit(): void {
    this.initForm()
  }

  //set form template
  private initForm(){
    this.form = this.build.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  //login 
  login(){

    this.loginService.linkToDb().subscribe(
      obj =>{
        let admins = JSON.parse(JSON.stringify(obj)).admins

        for(let i=0; i<admins.length; i++){
          if(this.form.value["username"] == admins[i].username && sha1.hash(this.form.value["password"]) == admins[i].password){
            this.loginService.createLocalStorage(sha1.randomString(32), admins[i].id)
            this.router.navigate(["edit"])
            return
          }
        }

        alert("invalid username or password")
        this.form.reset({
          username: "",
          password: ""
        })
      },

      error => {
        alert("an error occurred")
      }
    )
  }
}