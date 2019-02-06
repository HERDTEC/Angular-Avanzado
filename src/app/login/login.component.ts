import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService:UsuarioService, private  router:Router) { }
  usuario:string;
  password:string;
  ngOnInit() {
  }
  validarUsuario(){
    this.usuarioService.validarUsuario(this.usuario,this.password).subscribe(
      usuario=>{
        console.log("usuario");
        this.router.navigate(["/pages"]);
      }

    );
  }

}
