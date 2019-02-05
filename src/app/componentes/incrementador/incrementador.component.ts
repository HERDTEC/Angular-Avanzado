

import { Component, OnInit, Input, Output,EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress: ElementRef;
  @Input() progreso : number = 90;
  @Input() leyenda : string ="Leyenda"
  @Output() cambioValor : EventEmitter<number>= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  onChanges( newValue: number){
    console.log(newValue);
    if(newValue >100)
      this.progreso=100;
    if (newValue < 0 )
      this.progreso =0;
    else if ((newValue <= 100) && (newValue >= 0 ))
      this.progreso=newValue;

    this.txtProgress.nativeElement.value=this.progreso;
    this.txtProgress.nativeElement.focus();
    this.cambioValor.emit(this.progreso);
  }
  cambiarValor( valor: number){
    let suma: number=this.progreso+valor;
    if(suma >100)
      this.progreso=100;
    if (suma < 0 )
      this.progreso=0;
    else if ((suma <= 100) && (suma >= 0 ))
      this.progreso+=valor;
    this.cambioValor.emit(this.progreso);
    this.txtProgress.nativeElement.focus();
  }
}

