import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Artist } from './Artist';

@Injectable({
  providedIn: 'root'
})
export class CrudArtistsService {
  
  API='http://localhost/gmmtv/';

  constructor(private http:HttpClient) { }

  mostrarArtistas():Observable<any>{
    return this.http.get(`${this.API}mostrarArtistas.php`);
  }

  insertarArtista(datosArtista:Artist):Observable<any>{
    console.log(datosArtista);
    return this.http.post(`${this.API}insertarArtista.php`, JSON.stringify(datosArtista));
  }

  borrarArtista(artist_id:any):Observable<any>{
    return this.http.get(`${this.API}borrarArtista.php?artist_id=${artist_id}`);
  }

  consultarArtista(artist_id:any):Observable<any>{
    return this.http.get(`${this.API}consultarArtista.php?artist_id=${artist_id}`);
  }

  editarArtista(datosArtista:Artist):Observable<any>{
    console.log(datosArtista);
    return this.http.post(`${this.API}editarArtista.php`, JSON.stringify(datosArtista));
  }
}
