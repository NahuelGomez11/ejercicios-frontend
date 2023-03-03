import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { HomeRouterModule } from './home.routing.module';
import { StartComponent } from 'src/app/components/home/start/start.component';
import { NavBarComponent } from 'src/app/shared/nav-bar/nav-bar.component';
import { NivelUnoComponent } from 'src/app/components/home/nivel-uno/nivel-uno.component';
import { NivelDosComponent } from 'src/app/components/home/nivel-dos/nivel-dos.component';
import { NivelTresComponent } from 'src/app/components/home/nivel-tres/nivel-tres.component';
import { NivelCuatroComponent } from 'src/app/components/home/nivel-cuatro/nivel-cuatro.component';
import { YourInfoComponent } from 'src/app/components/home/nivel-dos/your-info/your-info.component';
import { SelectPlanComponent } from 'src/app/components/home/nivel-dos/select-plan/select-plan.component';
import { AddOnsComponent } from 'src/app/components/home/nivel-dos/add-ons/add-ons.component';
import { SummaryComponent } from 'src/app/components/home/nivel-dos/summary/summary.component';


@NgModule({
  declarations: [
    HomeComponent,
    StartComponent,
    NavBarComponent,
    NivelUnoComponent,
    NivelDosComponent,
    NivelTresComponent,
    NivelCuatroComponent,
    YourInfoComponent,
    SelectPlanComponent,
    AddOnsComponent,
    SummaryComponent,

    
  ],
  imports: [
    CommonModule,
    HomeRouterModule,
    FormsModule,
  ],
  exports: [],
    providers: []
})
export class HomeModule { }
