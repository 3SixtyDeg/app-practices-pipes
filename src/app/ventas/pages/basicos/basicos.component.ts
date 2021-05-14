import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  nombreLower: string = 'Eddie Van Halen';
  nombreUpper: string = 'EDDIE VAN HALEN';
  nombreCompleto: string = 'EDdIe VaN HAlEn';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
