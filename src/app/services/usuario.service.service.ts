import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioModel } from '../models/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  constructor(
    private readonly http: HttpClient
  ) { }

  listarSedes():Observable<UsuarioModel[]>{
    return this.http.get<UsuarioModel[]>(`https://localhost:7038/api/usuario/listar`);
  }
}
