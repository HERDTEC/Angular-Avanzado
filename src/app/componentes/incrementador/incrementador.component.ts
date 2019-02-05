

import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso : number = 90;
  @Input() leyenda : string ="Leyenda"
  @Output() cambioValor : EventEmitter<number>= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  

  cambiarValor( valor: number){
    let suma: number=this.progreso+valor;
    if(suma >=100)
      this.progreso=100;
    if (suma <= 0 )
      this.progreso=0;
    else if ((suma < 100) && (suma > 0 ))
      this.progreso+=valor;
    this.cambioValor.emit(this.progreso);
  }
}

