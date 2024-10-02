export interface ComplejoModel {
    idComplejo: number;
    nombre: string;
    direccion: string;
    urlImagen?: string;
    habilitado: boolean;
    usuarioCrea: number;
    usuarioModifica: number;
    fechaCrea: Date;
    fechaModifica: Date;
}