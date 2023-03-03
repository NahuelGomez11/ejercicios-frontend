import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nivel-dos',
  templateUrl: './nivel-dos.component.html',
  styles: [
  ]
})
export class NivelDosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  eliminarDatos(){
    localStorage.removeItem('datosCliente');
    localStorage.setItem('datosCliente', JSON.stringify([]));
  }

}
