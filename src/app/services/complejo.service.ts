import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ComplejoModel } from '../models/complejo-model';

@Injectable({
  providedIn: 'root'
})

export class ComplejoService {

  constructor(
    private readonly http: HttpClient
  ) { }

  listarComplejos():Observable<ComplejoModel[]>{
    return this.http.get<ComplejoModel[]>(`https://localhost:7038/api/complejo/listar`);
  }

}
