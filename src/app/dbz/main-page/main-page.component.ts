import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  personajes: Personaje[] = [
    {
      nombre: "Goku",
      poder:15000
    },
    {
      nombre: "Vegeta",
      poder: 8000
    }
  ];

  nuevo: Personaje= {
    nombre: 'Roshi',
    poder: 400
  }

  agregarNuevoPersonaje(argumento: Personaje){
    this.personajes.push(argumento);
  }

}
