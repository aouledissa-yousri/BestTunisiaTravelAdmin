import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { LogInService } from '../services/logIn/logIn.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  timeLeft: number = 0


  constructor(private service: LogInService, private router: Router) { }

  ngOnInit(): void {
    this.timeLeft = 10000
  }
  

  logout(){
    this.service.logout()
    this.router.navigate(["log_in"])
  }

}