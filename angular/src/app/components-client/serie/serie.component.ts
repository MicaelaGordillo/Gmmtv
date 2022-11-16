import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudSeriesService } from 'src/app/service/crud-series.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  formularioSerie:FormGroup;
  serieId:any;
  public src!: String;

  constructor(
    private formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private crudService:CrudSeriesService
  ) { 
    this.serieId = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.serieId);
    
    this.crudService.consultarSerie(this.serieId).subscribe(
      result => {
        console.log(result);
        this.formularioSerie.setValue({
          title:result[0]['title'],
          gender:result[0]['gender'],
          episodes:result[0]['episodes'],
          issuance_period:result[0]['issuance_period'],
          synopsis:result[0]['synopsis'],
          link:result[0]['link']
        });
        this.src = result[0]['poster'];
        var textArea = document.getElementById('sinopsis')!;
        textArea.style.height = (textArea.scrollHeight+0.5) + 'px';
      }
    );

    this.formularioSerie = this.formulario.group({
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
  
}
