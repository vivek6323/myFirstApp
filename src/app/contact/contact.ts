import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Apphighlightdirective } from '../apphighlightdirectiv';
import { Viewchild } from '../viewchild/viewchild';

@Component({
  selector: 'app-contact',
  imports: [RouterOutlet, RouterLink, Apphighlightdirective, Viewchild],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
constructor(private router:Router){

}
  GotoAbout(){
this.router.navigate(['/about',1,"vivek"]);
  }

}
