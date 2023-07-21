import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { Subscription } from 'rxjs';
import { Provincia } from 'src/app/models/provincia';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-listado-provincias',
  templateUrl: './listado-provincias.component.html',
  styleUrls: ['./listado-provincias.component.css'],
})
export class ListadoProvinciasComponent implements OnInit {
  listados: Provincia[];

  private subscription = new Subscription();

  constructor(private provinceService: ProvinciaService) {}

  ngOnInit(): void {
    this.getAllProvinces();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getAllProvinces() {
    this.subscription.add(
      this.provinceService.getAll().subscribe({
        next: (result: any) => {
          this.listados = result.data;
        },
        error: () => {
          alert('Error al mostrar los datos');
        },
      })
    );
  }
}
