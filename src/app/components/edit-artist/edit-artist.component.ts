import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudArtistsService } from 'src/app/service/crud-artists.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-artist',
  templateUrl: './edit-artist.component.html',
  styleUrls: ['./edit-artist.component.css']
})
export class EditArtistComponent implements OnInit {
  formularioEditarArtista:FormGroup;
  artistId:any;
  public src!: String;

  constructor(
    private formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private crudService:CrudArtistsService,
    private route:Router
  ) { 
    this.artistId = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.artistId);
    
    this.crudService.consultarArtista(this.artistId).subscribe(
      result => {
        console.log(result);
        this.formularioEditarArtista.setValue({
          name:result[0]['name'],
          date_of_birth:result[0]['date_of_birth'],
          place_of_birth:result[0]['place_of_birth'],
          height:result[0]['height'],
          weight:result[0]['weight']
        });
        this.src = result[0]['picture'];
      }
    );

    this.formularioEditarArtista = this.formulario.group({
      name:[''],
      date_of_birth:[''],
      place_of_birth:[''],
      height:[''],
      weight:['']
    });

  }

  ngOnInit(): void {
  }

  editarDatosArtista():any{
    this.formularioEditarArtista.value.artist_id = this.artistId;
    this.crudService.editarArtista(this.formularioEditarArtista.value).subscribe();
    this.route.navigateByUrl('/artists');
  }

}
