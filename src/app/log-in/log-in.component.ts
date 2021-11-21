import { Component, OnInit } from '@angular/core';
import { LogInService } from '../services/logIn/logIn.service';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {


  constructor(private service: LogInService, private router: Router) { }

  connect(form: NgForm){
    if(this.service.login(form.value.username, form.value.password))
      this.router.navigate(["edit"])
    else{
      form.reset({})
      alert("wrong username or password if not check your internet connection")
    }
  }

  reset(form: NgForm){
    form.reset({})
  }

  ngOnInit(): void {
  }

}
