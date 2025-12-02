import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  imports: [],
  templateUrl: './viewchild.html',
  styleUrl: './viewchild.css'
})
export class Viewchild {

  @ViewChild('input1') input!:ElementRef;
  submit() {
    alert(this.input.nativeElement.value)
  }

}
