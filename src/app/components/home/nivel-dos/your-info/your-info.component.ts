import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

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
  }

  enviarFormulario(formulario: NgForm){
    if(formulario.invalid) return;
    
    console.log(this.nombre);
    console.log(this.email);
    console.log(this.numeroDeTelefono);
    // this.router.navigate( ['/home/nivel-2/select-plan'] )
  }


}
