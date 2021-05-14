import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {
  nombre: string = 'DANIEL';
  genero: string= 'masculino';

  obj = {
    'masculino': 'CHICO',
    'femenino': 'CHICA'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
