import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProvinciaComponent } from './provincia/agregar-provincia/agregar-provincia.component';
import { ListadoProvinciasComponent } from './provincia/listado-provincias/listado-provincias.component';

const routes: Routes = [
  { path: '', component: ListadoProvinciasComponent },
  { path: 'agregar-provincia', component: AgregarProvinciaComponent },
  { path: 'editar-provincia/:ID', component: AgregarProvinciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
