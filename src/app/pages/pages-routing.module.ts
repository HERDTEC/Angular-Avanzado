import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { TipoUsuarioComponent } from './tipo-usuario/tipo-usuario.component';


const routes: Routes = [
  {
      path: '',
      component: PagesComponent,
      children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'progress', component: ProgressComponent },
          { path: 'graficas1', component: Graficas1Component },
          { path: 'admUsuario', component: UsuarioComponent },
          { path: 'admTipoUsuario', component: TipoUsuarioComponent },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
