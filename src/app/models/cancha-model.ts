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

export interface CanchaFullModel {
    idComplejo: number;
    nombreComplejo: string;
    nombreSede: string;
    idCancha: number;
    nombreCancha: string;
    precioCancha: number;
    tipoCancha: string;
    urlImagen: string;
}