export interface UsuarioModel {
    idUsuario: number;
    nombre: string;
    email: string;
    contrasena: string;
    habilitado: boolean;
    usuarioCrea: number;
    usuarioModifica: number;
    fechaCrea: Date;
    fechaModifica: Date;
}
