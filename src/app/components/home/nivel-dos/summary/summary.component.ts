import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styles: [
  ]
})
export class SummaryComponent implements OnInit {

  public plan = '';
  public duracionDelPlan = '';

  public servicioEnLinea = false;
  public almacenamiento = false;
  public perfilPersonalizable = false;

  public precioDelPlan = 9;

  constructor() { }

  ngOnInit(): void {
    let datosCliente = JSON.parse(localStorage.getItem('datosCliente') || '[]');
    this.plan = datosCliente[0].planesDelCliente[0].tipoDePlan;
    this.duracionDelPlan = datosCliente[0].planesDelCliente[0].duracionDelPlan;

    this.servicioEnLinea = datosCliente[0].complementosDelCliente[0].servicioEnLinea;
    this.almacenamiento = datosCliente[0].complementosDelCliente[0].almacenamiento;
    this.perfilPersonalizable = datosCliente[0].complementosDelCliente[0].perfilPersonalizable;

    if(this.servicioEnLinea)
    {
      this.precioDelPlan = this.precioDelPlan + 1;
    }
    if(this.almacenamiento)
    {
      this.precioDelPlan = this.precioDelPlan +5;
    }
    if(this.perfilPersonalizable)
    {
      this.precioDelPlan = this.precioDelPlan +5;
    }
  }

}
