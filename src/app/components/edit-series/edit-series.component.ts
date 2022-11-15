import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudSeriesService } from 'src/app/service/crud-series.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-series',
  templateUrl: './edit-series.component.html',
  styleUrls: ['./edit-series.component.css']
})
export class EditSeriesComponent implements OnInit {
  formularioEditarSerie:FormGroup;
  serieId:any;
  public src!: String;

  constructor(
    private formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private crudService:CrudSeriesService,
    private route:Router
  ) { 
    this.serieId = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.serieId);
    
    this.crudService.consultarSerie(this.serieId).subscribe(
      result => {
        console.log(result);
        this.formularioEditarSerie.setValue({
          title:result[0]['title'],
          gender:result[0]['gender'],
          episodes:result[0]['episodes'],
          issuance_period:result[0]['issuance_period'],
          synopsis:result[0]['synopsis'],
          link:result[0]['link']
        });
        this.src = result[0]['poster'];
      }
    );

    this.formularioEditarSerie = this.formulario.group({
      title:[''],
      gender:[''],
      episodes:[''],
      issuance_period:[''],
      synopsis:[''],
      link:['']
    });

  }

  ngOnInit(): void {
  }

  editarDatosSerie():any{
    this.formularioEditarSerie.value.serie_id = this.serieId;
    this.crudService.editarSerie(this.formularioEditarSerie.value).subscribe();
    this.route.navigateByUrl('/series');
  }
}
