import { TipoUsuario } from './tipo-usuario';
import { AsignacionVentanilla } from './asignacion-ventanilla';

export class Usuario {
    idUsuario?: number;
    tipoUsuario: TipoUsuario;
    usuario: Usuario;
    password?: String;
    estado?: number;
    FechaCreacion?: Date;
    FechaActualizacion?: Date;
    asignacionesVentanilla: Array<AsignacionVentanilla>;
}
