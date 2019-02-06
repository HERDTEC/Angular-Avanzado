import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { ExampleComponent } from './example/example.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {
      path: 'public',
      component: PublicComponent,
      children: [
          { path: 'example', component: ExampleComponent },
          { path: 'info/:id', component: InfoComponent },
          { path: '', redirectTo: '/example', pathMatch: 'full' }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
