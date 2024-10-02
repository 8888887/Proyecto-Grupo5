import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanchaModel } from '../models/cancha-model';

@Injectable({
  providedIn: 'root'
})
export class CanchaServiceService {

  constructor(
    private readonly http: HttpClient
  ) { }

  listarCanchas():Observable<CanchaModel[]>{
    return this.http.get<CanchaModel[]>(`https://localhost:7038/api/cancha/listar`);
  }
}
