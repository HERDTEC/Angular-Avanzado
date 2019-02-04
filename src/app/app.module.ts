import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { ExampleComponent } from './public/example/example.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { IncrementadorComponent } from './componentes/incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PagesModule,
    SharedModule,
    FormsModule
  ],
  providers: [
  
],
  bootstrap: [AppComponent]
})
export class AppModule { }
