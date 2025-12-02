import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from './contact/contact';
import { CommonModule } from '@angular/common';
import { AppService } from './app-service';
interface ICOntact {
  id:number;
  name:string;
  email:string;
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contact, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {

  constructor(private appService: AppService) {

  }

login(){
  this.appService.setAuthdetails('true');
}

logout() {
  this.appService.setAuthdetails('false')
}


title = "hi everyone";
hero="superman";
getResult() {
  alert("Hello")
};
getEvent(event:any) {
  console.log(event)
};
cars=['BMW', 'Audi', 'Mercedes'];
sports=[{id:1, name:'cricket'}, {id:2, name:'hockey'}, {id:3, name:'footbal'}];
contacts: ICOntact[]=[{id:1, name:'ravi', email:'ravi@123gmail.com'}, {id:2, name:'kumar', email:'kumar@123gmail.com'}, {id:3, name:'sai', email:'sai@123gmail.com'}];
isok=false;
}