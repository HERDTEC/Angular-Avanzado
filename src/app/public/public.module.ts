import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { ExampleComponent } from './example/example.component';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info/info.component';






const components = [
  PublicComponent,
  ExampleComponent
];
@NgModule({
  declarations: [ 
    components, InfoComponent,
  ],
  exports: [
    components
  ],
  imports:[
    PublicRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class PublicModule { }
