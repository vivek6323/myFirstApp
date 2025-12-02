import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilderexample',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formbuilderexample.html',
  styleUrl: './formbuilderexample.css'
})
export class Formbuilderexample {
stdForm:FormGroup;

constructor(private fbuilder:FormBuilder){
 this.stdForm=this.fbuilder.group({
    firstname:["",[Validators.required]],
    lastname:"",
    username:"",
    city:"",
    state:"",zipcode:"",
    isAgreed:false,
  })
}




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
console.log(this.stdForm)
  }
}
