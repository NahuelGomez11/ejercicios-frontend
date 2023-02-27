import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styles: [
  ]
})
export class SelectPlanComponent implements OnInit {

  public mensual = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  mensualOAnual(){
    if(this.mensual == true)
    {
      this.mensual = false;
    }
    else
    {
      this.mensual = true;
    }
  }

}
