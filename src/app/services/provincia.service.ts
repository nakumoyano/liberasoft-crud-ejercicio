import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Provincia } from '../models/provincia';

@Injectable({
  providedIn: 'root',
})
export class ProvinciaService {
  private API_URL = 'http://api.dev.liberasoft.com.ar/api/examen';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  addProvince(provincia: Provincia): Observable<Provincia> {
    return this.http.post<Provincia>(`${this.API_URL}`, provincia);
  }

  updateProvince(provincia: Provincia): Observable<Provincia> {
    return this.http.put<Provincia>(
      this.API_URL + '/' + provincia.ID,
      provincia
    );
  }

  getProvinciaById(ID: number): Observable<Provincia> {
    return this.http.get<Provincia>(`${this.API_URL}/${ID}`);
  }

  delete(provincia: Provincia): Observable<Provincia> {
    return this.http.delete<Provincia>(`${this.API_URL}/${provincia.ID}`);
  }

  // ------------------- servicios para conectarse de manera local
  provinciaList: Provincia[] = [
    { CP: '1', ID: 1, CIUDADID: 'CORDOBA', PROVINCIA: 'CORDOBITA' },
    { CP: '2', ID: 10, CIUDADID: 'BS.AS', PROVINCIA: 'BS.AS' },
    { CP: '3', ID: 100, CIUDADID: 'BARCELONA', PROVINCIA: 'MADRID' },
    { CP: '4', ID: 1000, CIUDADID: 'PAMPA', PROVINCIA: 'MOSCU' },
  ];

  //devuelve copia del array
  getProvinceStatic() {
    return this.provinciaList.slice();
  }

  //para agregar uno o mas elementos al inicio del array
  addProvinceStatic(p: Provincia) {
    this.provinciaList.unshift(p);
  }

  //eliminar provincia del array
  deletePRovinceStatic(index: number) {
    this.provinciaList.splice(index, 1);
  }
}
