import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudSongsService } from 'src/app/service/crud-songs.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-edit-song',
  templateUrl: './edit-song.component.html',
  styleUrls: ['./edit-song.component.css']
})
export class EditSongComponent implements OnInit {
  formularioEditarCancion:FormGroup;
  songId:any;
  public src!:any;

  constructor(
    private formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private crudService:CrudSongsService,
    private route:Router,
    private sanitizer:DomSanitizer
  ) { 
    this.songId = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.songId);
    
    this.crudService.consultarCancion(this.songId).subscribe(
      result => {
        console.log(result);
        this.formularioEditarCancion.setValue({
          name:result[0]['name'],
          description:result[0]['description'],
          link:result[0]['link']
        });
        this.src = this.sanitizer.bypassSecurityTrustResourceUrl(result[0]['link']);
      }
    );

    this.formularioEditarCancion = this.formulario.group({
      name:[''],
      description:[''],
      link:['']
    });
    
  }

  ngOnInit(): void {
  }

  editarDatosCancion():any{
    this.formularioEditarCancion.value.song_id = this.songId;
    this.crudService.editarCancion(this.formularioEditarCancion.value).subscribe();
    this.route.navigateByUrl('/songs');
  }

}
