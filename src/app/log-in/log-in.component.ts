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

  connected: boolean = false

  constructor(private service: LogInService, private router: Router) { }

  connect(form: NgForm){
    this.connected = this.service.login(form.value.username, form.value.password)
    if(this.connected)
      this.router.navigate(["edit"])
    else{
      form.reset({})
      alert("wrong username or password")
    }
  }

  reset(form: NgForm){
    form.reset({})
  }

  ngOnInit(): void {
  }

}
