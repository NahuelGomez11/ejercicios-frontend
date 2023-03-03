import { Component, OnInit, ɵCurrencyIndex } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { filter, startWith } from 'rxjs';

@Component({
  selector: 'app-your-info',
  templateUrl: './your-info.component.html',
  styles: [
  ]
})
export class YourInfoComponent implements OnInit {

  public nombre = '';
  public email = '';
  public numeroDeTelefono = '';
  

  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {
    let datosCliente = JSON.parse(localStorage.getItem('datosCliente') || '[]');
    this.nombre = datosCliente[0].datosDelCliente[0].nombre;
    this.email = datosCliente[0].datosDelCliente[0].email;
    this.numeroDeTelefono = datosCliente[0].datosDelCliente[0].numeroDeTelefono;    
  }

  enviarFormulario(formulario: NgForm){
    if(formulario.invalid) return;

    let datosCliente = JSON.parse(localStorage.getItem('datosCliente') || '[]');
    if(datosCliente[0] == undefined){

      datosCliente.push({
        datosDelCliente:[{
          nombre: this.nombre,
          email: this.email,
          numeroDeTelefono: this.numeroDeTelefono,
        }],
        planesDelCliente:[{
          duracionDelPlan: '',
          tipoDePlan: '',
        }],
        complementosDelCliente:[{
          servicioEnLinea: '',
          almacenamiento: '',
          perfilPersonalizable: '',
        }]
      });
      
      localStorage.setItem('datosCliente', JSON.stringify(datosCliente));
    }
    else{
      const datosModificados = datosCliente
      datosModificados[0].datosDelCliente = datosModificados.filter((item: any) =>{item.nombre == datosCliente[0].datosDelCliente.nombre})
      

      datosModificados[0].datosDelCliente.push({
          nombre: this.nombre,
          email: this.email,
          numeroDeTelefono: this.numeroDeTelefono,
      });
      localStorage.setItem('datosCliente', JSON.stringify(datosModificados));
    }
      
      
      this.router.navigate( ['/home/nivel-2/select-plan'] );
  }


}
