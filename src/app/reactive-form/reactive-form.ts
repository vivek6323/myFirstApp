import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css'
})
export class ReactiveForm {

 StudentForm:FormGroup=new FormGroup({
    firstname:new FormControl("",Validators.required),
    lastname:new FormControl(""),
    username:new FormControl(""),
    city:new FormControl(""),
    state:new FormControl(""),zipcode:new FormControl(""),
    isAgreed:new FormControl(false),
  })

  Indiastate=[{

    id:1,name:'Andhra Pradesh' 
  },
{
  id:2,
  name:'Telangana'
},
{
  id:3,
  name:'Rajasthan'
}]

  onSubmit(){
console.log(this.StudentForm)
  }
}
