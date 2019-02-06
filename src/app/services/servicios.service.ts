import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Servicio } from "../models/servicio";

@Injectable({
  providedIn: "root"
})
export class ServiciosService {
  private apiUrl: string =
    "http://localhost:8091/api/servicio/";
  constructor(private http: HttpClient) {}

  public getServicio(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${this.apiUrl}findAll/`);
  }

  public addServicio(Servicio: Servicio): Observable<Servicio> {
    return this.http.post<Servicio>(`${this.apiUrl}/create/`, Servicio);
  }
}
