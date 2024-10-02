import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReservaModel } from '../models/reserva-model';

@Injectable({
  providedIn: 'root'
})
export class ReservaServiceService {

  constructor(
    private readonly http: HttpClient
  ) { }

  listarReservas():Observable<ReservaModel[]>{
    return this.http.get<ReservaModel[]>(`https://localhost:7038/api/reserva/listar`);
  }
}
