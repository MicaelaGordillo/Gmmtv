import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './Serie';

@Injectable({
  providedIn: 'root'
})

export class CrudSeriesService {

  API='http://localhost/gmmtv/';

  constructor(private http:HttpClient) {}

  mostrarSeries():Observable<any>{
    return this.http.get(`${this.API}mostrarSeries.php`);
  }

  insertarSerie(datosSerie:Serie):Observable<any>{
    console.log(datosSerie);
    return this.http.post(`${this.API}insertarSerie.php`, JSON.stringify(datosSerie));
  }

  borrarSerie(serie_id:any):Observable<any>{
    return this.http.get(`${this.API}borrarSerie.php?serie_id=${serie_id}`);
  }

  consultarSerie(serie_id:any):Observable<any>{
    return this.http.get(`${this.API}consultarSerie.php?serie_id=${serie_id}`);
  }

  editarSerie(datosSerie:Serie):Observable<any>{
    console.log(datosSerie);
    return this.http.post(`${this.API}editarSerie.php`, JSON.stringify(datosSerie));
  }
}