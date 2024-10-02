import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TipocanchaModel } from '../models/tipocancha-model';

@Injectable({
  providedIn: 'root'
})
export class TipocanchaServiceService {

  constructor(
    private readonly http: HttpClient
  ) { }

  listarSedes():Observable<TipocanchaModel[]>{
    return this.http.get<TipocanchaModel[]>(`https://localhost:7038/api/tipocancha/listar`);
  }
}
