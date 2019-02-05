import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoUsuario } from '../models/tipo-usuario';

@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioServiceService {
  private apiUrl: string = 'http://127.0.0.1:8080/micro_my_app-0.0.1/micro/reservacion/';
  constructor (private http: HttpClient) {}

  public getReservacions(): Observable<TipoUsuario[]> {
    return this.http.get<TipoUsuario[]>(`${this.apiUrl}/find/`);
  }

  public addReservacion (Reservacion: TipoUsuario): Observable<TipoUsuario> {
    return this.http.post<TipoUsuario>(`${this.apiUrl}/create/`, Reservacion);
}

}
