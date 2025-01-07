import { Component, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursorLightComponent } from './cursor-light/cursor-light.component';
import { FloatingTabComponent } from './floating-tab/floating-tab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portafolio';
  @ViewChild(FloatingTabComponent) floatingTab!: FloatingTabComponent;
  showTab(op:Number, event: Event) {
    this.floatingTab.openTab(op);
    event.preventDefault(); // Evita la navegación predeterminada
  }
}
