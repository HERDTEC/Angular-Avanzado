import { Servicio } from './servicio';

export class Ventanilla {
	idVentanilla : number;
	numero: number;
    servicio : Servicio;
    estado?: String;
	FechaCreacion?: Date;
	FechaActualizacion?: Date;
}
