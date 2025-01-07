import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-floating-tab',
  templateUrl: './floating-tab.component.html',
  styleUrl: './floating-tab.component.css',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }), 
        animate('0.2s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('0.1s', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class FloatingTabComponent {
  isVisible = false;
  proyectTitle: String = "";
  description: String = "";
  linkFront: String = "";
  linkBack: String = "";
  img: String = "portfolio.png";
  frontend: String = "";
  backend: String = "";



  setProyect(op:Number){
    switch(op){
      case 1:
        this.proyectTitle = "ATM";
        this.description = "Proyecto de Programación de la Universidad de Panamá";
        this.linkFront = "https://github.com/CalinnHC/Bank/tree/master/src";
        this.linkBack = "https://github.com/CalinnHC/Bank/tree/master/src";
        this.img = "bankProyect.png";
        this.frontend = "Proyecto diseñado utilizando componentes de la libreria Java Swing";
        this.backend = "Se guardan los usuarios y sus fondos utilizando clases de java y listas enlazadas";
        break;
    case 2:
        this.proyectTitle = "Naviera Web";
        this.description = "Sistema que se conecta a una base de datos Oracle. A través de la página se pueden registrar, mostrar y eliminar los usuarios.";
        this.linkFront = "https://github.com/CalinnHC/Naviera-Web";
        this.linkBack = "https://github.com/CalinnHC/DATABASE-API";
        this.img = "Naviera.png";
        this.frontend = "Interfaz hecha con Angular 17 que se conecta a la API.";
        this.backend = "API hecha con Python, se conecta a una base de datos Oracle";
        break;
    case 3:
      this.proyectTitle = "Sistema de gestión de proyecto de la UP";
      this.description = "Capaz de registrar usuarios, hacer Log in, crear proyectos, mostrar proyectos, asignar usuarios a proyectos, gestion de roles, notificaciones, asignación de actividades. ";
      this.linkFront = "https://github.com/CalinnHC/Front-ClienteSistema";
      this.linkBack = "https://github.com/CalinnHC/Back-Sistema";
      this.img = "uppe-java.png";
      this.frontend = "Interfaz diseñada en Java utilizando la librería JavaFx";
      this.backend = "API desarrollada en Java utilizando SpringBoot y una computadora de escritorio como servidor. Base de datos en Oracle ";
        break;
    case 4:
      this.proyectTitle = "Portfolio de Programador";
      this.description = "Portfolio en el que se guardan todos los proyectos.";
      this.linkFront = "https://github.com/CalinnHC/Portfolio";
      this.linkBack = "https://github.com/CalinnHC/Portfolio";
      this.img = "portfolio.png";
      this.frontend = "Diseñado utilizando Angular 17";
      this.backend = "Alojado en un servidor de AWS utilizando ubuntu";
        break;
    default:
        this.proyectTitle = "";
        this.description = "";
        this.linkFront = "";
        this.linkBack = "";
        this.img = "";
        this.frontend = "";
        this.backend = "";
            break;
  }
}

  openTab(op:Number) {
    this.setProyect(op);
    this.isVisible = true;
  }

  closeTab() {
    this.isVisible = false;
  }

  onContentClick(event: Event) {
    event.stopPropagation(); // Evita que el clic en el contenido cierre la pestaña
  }
}
