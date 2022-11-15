import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from './Song';

@Injectable({
  providedIn: 'root'
})

export class CrudSongsService {

  API='http://localhost/gmmtv/';

  constructor(private http:HttpClient) { }

  mostrarCanciones():Observable<any>{
    return this.http.get(`${this.API}mostrarCanciones.php`);
  }

  insertarCancion(datosCancion:Song):Observable<any>{
    console.log(datosCancion);
    return this.http.post(`${this.API}insertarCancion.php`, JSON.stringify(datosCancion));
  }

  borrarCancion(song_id:any):Observable<any>{
    return this.http.get(`${this.API}borrarCancion.php?song_id=${song_id}`);
  }

  consultarCancion(song_id:any):Observable<any>{
    return this.http.get(`${this.API}consultarCancion.php?song_id=${song_id}`);
  }

  editarCancion(datosCancion:Song):Observable<any>{
    console.log(datosCancion);
    return this.http.post(`${this.API}editarCancion.php`, JSON.stringify(datosCancion));
  }
}
