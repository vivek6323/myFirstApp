import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appApphighlightdirective]'
})
export class Apphighlightdirective implements OnInit{

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit(): void {
   //(this.element.nativeElement as HTMLElement).style.color="green";

   this.renderer.setStyle(this.element.nativeElement,"color","red");
  }
 @HostListener('click', ['$event'])
  onclick(event: Event) { // <-- TS error is resolved
    console.log('event', event);
    this.renderer.setStyle(this.element.nativeElement, "color", "blue");
  }
}
