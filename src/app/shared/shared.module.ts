import { NgModule } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';


const components = [
  BreadcrumbsComponent,
  HeaderComponent,
  NopagefoundComponent,
  SidebarComponent
];
@NgModule({
  declarations: [ 
    components
  ],
  exports: [
    components
  ],
  imports: [RouterModule]
})

export class SharedModule { }
