import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nivel-tres',
  templateUrl: './nivel-tres.component.html',
  styles: [
  ]
})
export class NivelTresComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let pelota = document.getElementById('pelota') || undefined;
    let velocidad = 50;
    let mTop = 0;
    let mLeft = 0;

    // document.addEventListener('keydown', function(e){
    //   if(e.key == 'd')
    //   {
    //    if(mLeft <= 400){
    //     moverDerecha();
    //    }
    //   }

    //   if(e.key == 'a')
    //   {
    //     if(mLeft >= 50){
    //       moverIzquierda();
    //      }
    //   }

    //   if(e.key == 'w')
    //   {
    //     if(mTop >= 50){ 
    //       moverArriba();
    //     }
    //   }

    //   if(e.key == 's')
    //   {
    //     if(mTop <= 400){ 
    //       moverAbajo();
    //     }
    //   }
    // })

    function moverDerecha() {
      if (pelota != undefined) {
        mLeft += velocidad;
        pelota.style.marginLeft = mLeft + 'px';
      }
    }

    function moverIzquierda() {
      if (pelota != undefined) {
        mLeft -= velocidad;
        pelota.style.marginLeft = mLeft + 'px';
      }
    }

    function moverArriba() {
      if (pelota != undefined) {
        mTop -= velocidad;
        pelota.style.marginTop = mTop + 'px';
      }
    }

    function moverAbajo() {
      if (pelota != undefined) {
        mTop += velocidad;
        pelota.style.marginTop = mTop + 'px';
      }
    }

    document.addEventListener('keydown', (event) => {
      var keyValue = event.key;
      var codeValue = event.code;
      // console.log("keyValue: " + keyValue);
      // console.log("codeValue: " + codeValue);
      if (keyValue == 'd') {
        if (mLeft <= 400) {
          moverDerecha();
        }
      }
      
      if (keyValue == 'a') {
        if (mLeft >= 50) {
          moverIzquierda();
        }
      }

      if (keyValue == 'w') {
        if (mTop >= 50) {
          moverArriba();
        }
      }

      if (keyValue == 's') {
        if (mTop <= 400) {
          moverAbajo();
        }
      }
    }, false);
  }



}
