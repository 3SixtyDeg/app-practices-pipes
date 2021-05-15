import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  //I8nSelect
  nombre: string = 'DANIEL';
  genero: string= 'masculino';

  obj = {
    'masculino': 'CHICO',
    'femenino': 'CHICA'
  }

  //I18nPlural
  negocios: string[] = ['Patatas', 'Comida', 'Farmacia'];
  objNe = {
    '=0': 'ningún comercio',
    '=1': 'un comercio',
    'other': '# comercios'
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Daniel',
    edad: 20,
    direccion: 'Ottawa, Canadá'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Spiderman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000);

  constructor() { }

  ngOnInit(): void {
  }

  cambiarGenero() {
    this.nombre = 'DANIELA';
    this.genero = 'femenino';
  }

  eliminarComercio() {
    this.negocios.pop();
  }

}
