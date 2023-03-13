import { Component, OnInit } from '@angular/core';
import { event } from 'jquery';
import { Flags, RootObject } from 'src/app/interfaces/paises.interface';
import { paisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-nivel-cuatro',
  templateUrl: './nivel-cuatro.component.html',
  styles: [
  ]
})
export class NivelCuatroComponent implements OnInit {

  public paises!: RootObject[];

  constructor(
    private _paises: paisesService,
  ) { }

  ngOnInit(): void {
    this._paises.paises_traerTodos().subscribe(resp => {
      this.paises = resp;
    });
  }

  filtrar() {
    const select = document.getElementById('selectContinentes') as HTMLSelectElement;

    this._paises.traer_continentes(select.value).subscribe(resp => {
      this.paises = resp;
    });
  }
  buscar(){
    document.addEventListener('keydown', (event) => {

      if(event.code == 'Enter'){
        const textoABuscar = document.getElementById('buscar') as HTMLInputElement;

        if(textoABuscar.value != ''){
          this._paises.paises_traerPais(textoABuscar.value).subscribe(resp => {
            this.paises = resp;
          })
        }
      }
    })
  }


}
