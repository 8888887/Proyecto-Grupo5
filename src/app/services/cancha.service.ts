import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanchaFullModel, CanchaModel } from '../models/cancha-model';

@Injectable({
  providedIn: 'root'
})
export class CanchaService {

  constructor(
    private readonly http: HttpClient
  ) { }

  listarCanchas():Observable<CanchaModel[]>{
    return this.http.get<CanchaModel[]>(`https://localhost:7038/api/cancha/listar`);
  }

  listarCanchasFull():Observable<CanchaFullModel[]>{
    return this.http.get<CanchaFullModel[]>(`https://localhost:7038/api/cancha/listarfull`);
  }

  buscarPorId(id_cancha: number):Observable<CanchaModel>{
    return this.http.get<CanchaModel>(`https://localhost:7038/api/cancha/obtener?id=${id_cancha}`)
  }
}
