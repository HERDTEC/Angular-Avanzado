import { Usuario } from './usuario';
import { Ventanilla } from './ventanilla';

export class AsignacionVentanilla {
    ventanilla: Ventanilla;
    usuario: Usuario;
    estado?: String;
    FechaCreacion?: Date;
    FechaActualizacion?: Date;
}
