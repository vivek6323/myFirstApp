import { Injectable } from '@angular/core';
import { AppService } from './app-service';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AppGaurdService implements CanActivate, CanActivateChild{
  constructor(private appService: AppService, private router:Router) {

  }

  canDeActivate(){

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
  {
return this.canActivate(route, state )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
  {
let result=this.appService.getAuthDetails();
if(result=="true"){
  return true;
} else {
this.router.navigate(['/']);
return false;
}
  }
  
}
