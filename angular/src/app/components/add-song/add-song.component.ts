import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudSongsService } from 'src/app/service/crud-songs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent implements OnInit {
  formularioCancion:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudSeriesService:CrudSongsService,
    private route:Router
  ) {
    this.formularioCancion = this.formulario.group({
      name:[''],
      description:[''],
      link:['']
    });
  }

  ngOnInit(): void {
  }

  enviarDatosCancion():any{
    this.crudSeriesService.insertarCancion(this.formularioCancion.value).subscribe();
    this.route.navigateByUrl('/songs');
  }
}
