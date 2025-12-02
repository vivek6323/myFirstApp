import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppDeactivateGaurdService, IDeactivate } from '../app-deactivate-gaurd-service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About implements OnInit, IDeactivate{





user = {
  id:"",
  name:""
}
   constructor(private router:ActivatedRoute){

   }
  canExit():boolean {
    if(confirm("Are you sure you want to exit")){
      return true;
    } else {
      return false;
    }
  }
   ngOnInit(): void {
    this.user={
      id:this.router.snapshot.params['id'],
      name:this.router.snapshot.params['name']
    }
    this.router.params.subscribe((data:Params)=>{
      this.user={
        id:data['id'],
        name:data['name']
      }
    })
    console.log(this.router.snapshot.queryParams);
    console.log(this.router.snapshot.fragment)
    this.router.queryParams.subscribe((data)=>{console.log(data)});
   }
FirstName = "Raj shekhar"
}
