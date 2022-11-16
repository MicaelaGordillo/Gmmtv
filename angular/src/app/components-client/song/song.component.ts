import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudSongsService } from 'src/app/service/crud-songs.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  formularioCancion:FormGroup;
  songId:any;
  public src!:any;

  constructor(
    private formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private crudService:CrudSongsService,
    private sanitizer:DomSanitizer
  ) { 
    this.songId = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.songId);
    
    this.crudService.consultarCancion(this.songId).subscribe(
      result => {
        console.log(result);
        this.formularioCancion.setValue({
          name:result[0]['name'],
          description:result[0]['description']
        });
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl(result[0]['link']);
        var textArea = document.getElementById('descripcion')!;
        textArea.style.height = (textArea.scrollHeight+2) + 'px';
      }
    );

    this.formularioCancion = this.formulario.group({
      name:[''],
      description:['']
    });
    
  }

  ngOnInit(): void {
  }

}
