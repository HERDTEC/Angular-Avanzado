import { Servicio } from './servicio';

export class Ticket {
    idTicket: number;
    servicio: Servicio;
    codigo: String;
    conteo: number;
    repeticiones: number;
    demora: number;

    estado?: String;
    FechaCreacion?: Date;
    FechaActualizacion?: Date;
}
