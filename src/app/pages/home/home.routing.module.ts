import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from 'src/app/components/home/start/start.component';
import { HomeComponent } from './home.component';
import { NivelUnoComponent } from 'src/app/components/home/nivel-uno/nivel-uno.component';
import { NivelDosComponent } from 'src/app/components/home/nivel-dos/nivel-dos.component';
import { NivelTresComponent } from 'src/app/components/home/nivel-tres/nivel-tres.component';
import { NivelCuatroComponent } from 'src/app/components/home/nivel-cuatro/nivel-cuatro.component';
import { YourInfoComponent } from 'src/app/components/home/nivel-dos/your-info/your-info.component';
import { SelectPlanComponent } from 'src/app/components/home/nivel-dos/select-plan/select-plan.component';


const HOME_ROUTES: Routes = [
    { path: '', redirectTo: 'start', pathMatch: 'full' },
    {
        path: '', component: HomeComponent,
        // rutas hijas de home
        children: [
            { path: 'start', component: StartComponent, title: 'Inicio' },
            { path: 'nivel-1', component: NivelUnoComponent },
            { path: 'nivel-2', component: NivelDosComponent,
            children: [
                { path: '', redirectTo: 'your-info', pathMatch: 'full' },
                {path: 'your-info', component: YourInfoComponent},
                {path: 'select-plan', component: SelectPlanComponent}
            ]
        },
            { path: 'nivel-3', component: NivelTresComponent },
            { path: 'nivel-4', component: NivelCuatroComponent },
            // {path: 'profile', component: ProfileComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(HOME_ROUTES)],
    exports: [RouterModule],

})

export class HomeRouterModule { }