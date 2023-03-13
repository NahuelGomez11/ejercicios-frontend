import { Component, Input, OnInit } from '@angular/core';
import { RootObject } from 'src/app/interfaces/paises.interface';

@Component({
  selector: 'app-card-countries',
  templateUrl: './card-countries.component.html',
  styles: [
  ]
})
export class CardCountriesComponent implements OnInit {

  @Input() pais!: RootObject;
  public nombrePais = [];
  constructor() { }

  ngOnInit(): void {
  }

}
