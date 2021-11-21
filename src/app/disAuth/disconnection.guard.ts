import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from "@angular/router";
import { LogInService } from "../services/logIn/logIn.service"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisconnectionGuard implements CanActivate {
  constructor(private service: LogInService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.service.connected)
      return true
    return this.router.navigate(["edit"])
  }
  
}
