import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanchaFullModel, CanchaModel } from '../../models/cancha-model';
import { CanchaService } from '../../services/cancha.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [CommonModule]
})
export class SearchComponent implements OnInit {

  canchasfull: CanchaFullModel[] = [];
  id_cancha_selected: number = 0;

  constructor(private canchaService: CanchaService, private router: Router) {}

  ngOnInit(): void {
    this.canchaService.listarCanchasFull().subscribe((result: any) => {
      console.log(result.data);
      this.canchasfull = result.data;
    });
  }  

  btnReservar_Click(id_cancha:number){
    this.router.navigateByUrl('pages/reservar/'+id_cancha)
  }

}
