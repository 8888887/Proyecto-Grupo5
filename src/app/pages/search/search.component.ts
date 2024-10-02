import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { ComplejosService } from '../../services/complejo.service';
import { ComplejoModel } from '../../models/complejo-model';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [CommonModule]
})
export class SearchComponent implements OnInit {

  complejos: ComplejoModel[] = [];

  constructor(private complejosService: ComplejosService) {}

  ngOnInit(): void {
    this.complejosService.listarComplejos().subscribe((result: any) => {
      console.log(result.data);
      this.complejos = result.data;
    });
  }  
}
