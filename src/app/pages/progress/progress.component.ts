import { Component, OnInit, Input } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  progresoAzul : number = 80;
  progresoVerde : number = 80;
  constructor() { }

  ngOnInit() {
  }
  /*actualizarAzul( event: number){
    this.progresoAzul=event;
  }
  actualizarVerde( event: number){
    this.progresoVerde=event;
  }*/

}
