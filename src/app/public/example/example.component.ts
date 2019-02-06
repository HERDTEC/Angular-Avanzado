import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/models/servicio';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  servicios:Array<Servicio>;
  constructor(private servicioService:ServiciosService) { 
    this.servicioService.getServicio().subscribe(
      servicios=>{
        this.servicios=servicios;
        console.log(servicios);
      },
      err=>{
        console.log(err);
      }
    );
    
  }

  ngOnInit() {
    this.servicioService.getServicio().subscribe(
      servicios=>{
        this.servicios=servicios;
        console.log(servicios);
      }
    );
  }

}
