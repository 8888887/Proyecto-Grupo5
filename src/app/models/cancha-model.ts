export interface CanchaModel {
    idCancha: number;
    idSede: number;
    nombre: string;
    idTipoCancha: number;
    habilitado: boolean;
    usuarioCrea: number;
    usuarioModifica: number;
    fechaCrea: Date;
    fechaModifica: Date;
}
