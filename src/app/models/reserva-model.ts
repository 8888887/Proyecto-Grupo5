export interface ReservaModel {
    idReserva: number;
    idCancha: number;
    idUsuario: number;
    fechaReserva: Date;
    horaInicio: Date;
    horaFin: Date;
    habilitado: boolean;
    usuarioCrea: number;
    usuarioModifica: number;
    fechaCrea: Date;
    fechaModifica: Date;
}
