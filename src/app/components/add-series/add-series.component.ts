import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudSeriesService } from 'src/app/service/crud-series.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-add-series',
  templateUrl: './add-series.component.html',
  styleUrls: ['./add-series.component.css']
})

export class AddSeriesComponent implements OnInit {
  formularioSerie:FormGroup;
  public previsualizacion!: string;

  constructor(
    public formulario:FormBuilder,
    private crudSeriesService:CrudSeriesService,
    private route:Router,
    private sanitizer: DomSanitizer
    ) {

    this.formularioSerie = this.formulario.group({
      title:[''],
      poster:[''],
      gender:[''],
      episodes:[''],
      issuance_period:[''],
      synopsis:[''],
      link:['']
    });
  }

  ngOnInit(): void {
  }

  enviarDatosSerie():any{
    this.formularioSerie.value.poster = this.previsualizacion;
    this.crudSeriesService.insertarSerie(this.formularioSerie.value).subscribe();
    this.route.navigateByUrl('/series');
  }

  capturarPosterSerie(evento: any) {
    const posterSerie = evento.target.files[0];
    this.extraerBase64(posterSerie).then((imagen:any)=>{
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
  })
}
