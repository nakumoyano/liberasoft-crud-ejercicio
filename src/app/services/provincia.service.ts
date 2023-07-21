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
    return this.http.post<Provincia>(`${this.API_URL}/data`, provincia);
  }

  updateProvince(provincia: Provincia): Observable<Provincia> {
    return this.http.put<Provincia>(
      this.API_URL + '/data' + '/' + provincia.ID,
      provincia
    );
  }

  getProvinciaById(ID: number): Observable<Provincia> {
    return this.http.get<Provincia>(`${this.API_URL}/data/${ID}`);
  }

  delete(provincia: Provincia): Observable<Provincia> {
    return this.http.delete<Provincia>(`${this.API_URL}/${provincia.ID}`);
  }
}
