import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styles: [
  ]
})
export class AddOnsComponent implements OnInit {

  public servicioEnLinea = false;
  public almacenamiento = false;
  public perfilPersonalizable = false;


  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    let datosCliente = JSON.parse(localStorage.getItem('datosCliente') || '[]');
    this.servicioEnLinea = datosCliente[0].complementosDelCliente[0].servicioEnLinea;
    this.almacenamiento = datosCliente[0].complementosDelCliente[0].almacenamiento;
    this.perfilPersonalizable = datosCliente[0].complementosDelCliente[0].perfilPersonalizable;

    let servicioEnLinea = document.getElementById('servicioEnLinea') as HTMLInputElement;
    let almacenamiento = document.getElementById('almacenamiento') as HTMLInputElement;
    let perfilPersonalizable = document.getElementById('perfilPersonalizable') as HTMLInputElement;
    if(this.servicioEnLinea == true){
      servicioEnLinea.checked = true;
    }
    else
    {
      servicioEnLinea.checked = false;
    }

    if(this.almacenamiento == true){
      almacenamiento.checked = true;
    }
    else
    {
      almacenamiento.checked = false;
    }

    if(this.perfilPersonalizable == true){
      perfilPersonalizable.checked = true;
    }
    else
    {
      perfilPersonalizable.checked = false;
    }
  }


  seleccionarServicioEnLinea(complemento: any) {
    if (this.servicioEnLinea == false) {
      this.servicioEnLinea = true;
    }
    else {
      this.servicioEnLinea = false;
    }

  }
  seleccionarAlmacenamiento(complemento: any) {
    if (this.almacenamiento == false) {
      this.almacenamiento = true;
    }
    else {
      this.almacenamiento = false;
    }
  }
  seleccionarPerfilPersonalizable(complemento: any) {
    if (this.perfilPersonalizable == false) {
      this.perfilPersonalizable = true;
    }
    else {
      this.perfilPersonalizable = false;
    }

  }

  guardarDatosPerfil(){
    let datosCliente = JSON.parse(localStorage.getItem('datosCliente') || '[]');

    if(datosCliente[0] == undefined){

      datosCliente.push({
        datosDelCliente:[{
          nombre: '',
          email: '',
          numeroDeTelefono: '',
        }],
        planesDelCliente:[{
          duracionDelPlan: '',
          tipoDePlan: '',
        }],
        complementosDelCliente:[{
          servicioEnLinea: this.servicioEnLinea,
          almacenamiento: this.almacenamiento,
          perfilPersonalizable: this.perfilPersonalizable,
        }]
      });
      
      localStorage.setItem('datosCliente', JSON.stringify(datosCliente));
      this.router.navigate(['/home/nivel-2/summary']);
    }
    else{
      if(this.servicioEnLinea || this.almacenamiento || this.perfilPersonalizable)
      {
        const datosModificados = datosCliente
        datosModificados[0].complementosDelCliente = datosModificados.filter((item: any) =>{item.servicioEnLinea == datosCliente[0].complementosDelCliente.servicioEnLinea})
        
  
        datosModificados[0].complementosDelCliente.push({
          servicioEnLinea: this.servicioEnLinea,
          almacenamiento: this.almacenamiento,
          perfilPersonalizable: this.perfilPersonalizable,
        });
        
        localStorage.setItem('datosCliente', JSON.stringify(datosModificados));
        this.router.navigate(['/home/nivel-2/summary']);
      }
      else{
        alert('Debe SELECCIONAR el tipo de plan para poder continuar')
      }
      
    }
  }
}
