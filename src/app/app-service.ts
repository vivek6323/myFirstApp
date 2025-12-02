import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isLogin=false;


  setAuthdetails(value:string){
    localStorage.setItem('valid', value);
  }

  getAuthDetails(){
    return localStorage.getItem('valid')?.toString();
  }
}
