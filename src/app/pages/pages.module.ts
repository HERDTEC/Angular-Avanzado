import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from '../componentes/incrementador/incrementador.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RouterModule } from '@angular/router';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';
import { ServicioComponent } from './servicio/servicio.component';

const components = [
  DashboardComponent,
    Graficas1Component,
    ProgressComponent,
    PagesComponent,
    UsuarioComponent, 
    TipoUsuarioComponent, 
    ServicioComponent,

    IncrementadorComponent
];
@NgModule({
  declarations: [ 
    components, 
  ],
  exports: [
    components
  ],
  imports:[
    SharedModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
