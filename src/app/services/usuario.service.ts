import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../models/Usuario";

@Injectable({
  providedIn: "root"
})
export class UsuarioService {
  private apiUrl: string =
    "http://localhost:8091/api/usuario/";
  constructor(private http: HttpClient) {}

  public getUsuario(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}findAll/`);
  }

  public validarUsuario(us:String, pass: String): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}validar/${us}/${pass}`);
  }
}
