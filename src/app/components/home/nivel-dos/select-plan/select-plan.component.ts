import { JsonPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styles: [
  ]
})
export class SelectPlanComponent implements OnInit {

  public mensual = true;
  public duracionDelPlan = 'Mensual';
  public planParaCliente = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    let datosCliente = JSON.parse(localStorage.getItem('datosCliente') || '[]');
    this.duracionDelPlan = datosCliente[0].planesDelCliente[0].duracionDelPlan;
    this.planParaCliente = datosCliente[0].planesDelCliente[0].tipoDePlan;
    
    if(this.duracionDelPlan == 'Mensual'){
      this.mensual = true
    }
    else{
      this.mensual = false
    }
  }

  mensualOAnual() {
    if (this.mensual == true) {
      this.mensual = false;
      this.duracionDelPlan = "Anual";
    }
    else {
      this.mensual = true;
      this.duracionDelPlan = "Mensual";
    }
  }

  seleccionarPlan(planSeleccionado: string) {
    this.planParaCliente = planSeleccionado;    
  }

  guardarPlan() {
    let datosCliente = JSON.parse(localStorage.getItem('datosCliente') || '[]');

    if(datosCliente[0] == undefined && this.planParaCliente != ''){

      datosCliente.push({
        datosDelCliente:[{
          nombre: '',
          email: '',
          numeroDeTelefono: '',
        }],
        planesDelCliente:[{
          duracionDelPlan: this.duracionDelPlan,
          tipoDePlan: this.planParaCliente,
        }],
        complementosDelCliente:[{
          servicioEnLinea: '',
          almacenamiento: '',
          perfilPersonalizable: '',
        }]
      });
      
      localStorage.setItem('datosCliente', JSON.stringify(datosCliente));
      this.router.navigate(['/home/nivel-2/add-ons']);
    }
    else{
      if(this.planParaCliente != '')
      {
        const datosModificados = datosCliente
        datosModificados[0].planesDelCliente = datosModificados.filter((item: any) =>{item.duracionDelPlan == datosCliente[0].planesDelCliente.duracionDelPlan})
        
  
        datosModificados[0].planesDelCliente.push({
          duracionDelPlan: this.duracionDelPlan,
          tipoDePlan: this.planParaCliente,
        });
        
        localStorage.setItem('datosCliente', JSON.stringify(datosModificados));
        this.router.navigate(['/home/nivel-2/add-ons']);
      }
      else{
        alert('Debe SELECCIONAR el tipo de plan para poder continuar')
      }
      
    }
    
  }

}
