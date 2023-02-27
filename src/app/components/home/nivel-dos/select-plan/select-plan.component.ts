import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-plan',
  templateUrl: './select-plan.component.html',
  styles: [
  ]
})
export class SelectPlanComponent implements OnInit {

  public mensual = true;
  public duracionDelPlan = 'Mensual';
  
  constructor() { }

  ngOnInit(): void {
  }

  mensualOAnual(){
    if(this.mensual == true)
    {
      this.mensual = false;
      this.duracionDelPlan = "Anual";
    }
    else
    {
      this.mensual = true;
      this.duracionDelPlan = "Mensual";
    }
  }

}
