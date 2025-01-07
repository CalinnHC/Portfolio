import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-hover-effect',
  templateUrl: './hover-effect.component.html',
  styleUrl: './hover-effect.component.css'
})
export class HoverEffectComponent implements OnInit{
  letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  interval: any = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const h1 = this.el.nativeElement.querySelector('h1');
    this.renderer.listen(h1, 'mouseover', (event) => {
      this.handleMouseOver(event);
    });
  }

  handleMouseOver(event: MouseEvent) {
    let iteration = 0;
    const target = event.target as HTMLElement;

    clearInterval(this.interval);

    this.interval = setInterval(() => {
      target.innerText = target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return target.getAttribute('data-value')![index];
          }

          return this.letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= target.getAttribute('data-value')!.length) {
        clearInterval(this.interval);
      }

      iteration += 1 / 3;
    }, 30);
  }

}
