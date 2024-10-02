import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SedeModel } from '../models/sede-model';

@Injectable({
  providedIn: 'root'
})
export class SedeServiceService {

  constructor(
    private readonly http: HttpClient
  ) { }

  listarSedes():Observable<SedeModel[]>{
    return this.http.get<SedeModel[]>(`https://localhost:7038/api/sede/listar`);
  }
}
