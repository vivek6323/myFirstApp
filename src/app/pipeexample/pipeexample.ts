import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  imports: [UpperCasePipe],
  templateUrl: './pipeexample.html',
  styleUrl: './pipeexample.css'
})
export class Pipeexample {
firstname:string='raja';
}
