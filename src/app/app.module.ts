import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AgregarProvinciaComponent } from './provincia/agregar-provincia/agregar-provincia.component';
import { ListadoProvinciasComponent } from './provincia/listado-provincias/listado-provincias.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { EliminarProvinciaComponent } from './provincia/eliminar-provincia/eliminar-provincia.component';
@NgModule({
  declarations: [
    AppComponent,
    AgregarProvinciaComponent,
    ListadoProvinciasComponent,
    EliminarProvinciaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
