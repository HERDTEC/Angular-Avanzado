import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Ticket } from "../models/Ticket";

@Injectable({
  providedIn: "root"
})
export class TicketsService {
  private apiUrl: string =
    "http://localhost:8091/api/ticket/";
  constructor(private http: HttpClient) {}

  public getTicket(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.apiUrl}findAll/`);
  }

  public addTicket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}createTicketWithIdServicio/${id}`);
  }
}
