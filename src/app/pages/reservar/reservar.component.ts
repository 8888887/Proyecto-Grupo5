import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CanchaService } from '../../services/cancha.service';
import { CanchaModel } from '../../models/cancha-model';

@Component({
  selector: 'app-reservar',
  standalone: true,
  imports: [],
  templateUrl: './reservar.component.html',
  styleUrl: './reservar.component.css'
})
export class ReservarComponent implements OnInit {
  id_cancha: number = 0
  
  cancha: CanchaModel = {
      idCancha: 0,
      idSede: 0,
      nombre: '',
      idTipoCancha: 0,
      habilitado: true,
      usuarioCrea: 0,
      usuarioModifica: 0,
      fechaCrea: new Date(),
      fechaModifica: new Date()
  }

  constructor(
    private canchaService: CanchaService,
    private router: Router,
    private activedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      params => {
        if(params["id_proyecto"] !== undefined){
          this.id_cancha = params["id_cancha"]
          this.canchaService.buscarPorId(this.id_cancha).subscribe(
            result => {
              this.cancha = result
            }
          )
        }
      }
    )
  }
}
