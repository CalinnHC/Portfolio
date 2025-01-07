import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cursor-light',
  templateUrl: './cursor-light.component.html',
  styleUrl: './cursor-light.component.css'
})
export class CursorLightComponent {
  constructor() { }
  ngOnInit() { }
  @ViewChild('cursor') refCursor: any;
  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: any) {
    this.refCursor.nativeElement.style.left = event.pageX + "px";
    this.refCursor.nativeElement.style.top = event.pageY + "px";
  }
}
