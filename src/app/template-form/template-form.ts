import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateForm {

  studentObj:any={
    firstname:"",
    lastname:"",
    username:"",
    city:"",
    state:"",zipcode:"",
    isAgreed:false,
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
console.log(this.studentObj)
  }

}
