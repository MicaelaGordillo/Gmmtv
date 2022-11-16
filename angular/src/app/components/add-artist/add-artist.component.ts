import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudArtistsService } from 'src/app/service/crud-artists.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {
  formularioArtista:FormGroup;
  public previsualizacion!: String;

  constructor(
    public formulario:FormBuilder,
    private crudArtistaService:CrudArtistsService,
    private route:Router,
    private sanitizer: DomSanitizer
  ) { 

    this.formularioArtista = this.formulario.group({
      name:[''],
      picture:[''],
      date_of_birth:[''],
      place_of_birth:[''],
      height:[''],
      weight:['']
    });
  }

  ngOnInit(): void {
  }

  enviarDatosArtista():any{
    this.formularioArtista.value.picture = this.previsualizacion;
    this.crudArtistaService.insertarArtista(this.formularioArtista.value).subscribe();
    this.route.navigateByUrl('/artists');
  }

  capturarImagenPerfil(evento: any) {
    const imagenPerfil = evento.target.files[0];
    this.extraerBase64(imagenPerfil).then((imagen:any)=>{
      this.previsualizacion = imagen.base;
      console.log(this.previsualizacion);
    });
  }

  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      console.log(e);
    }
  });
}
