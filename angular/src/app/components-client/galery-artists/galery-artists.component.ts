import { Component, OnInit } from '@angular/core';
import { CrudArtistsService } from 'src/app/service/crud-artists.service';

@Component({
  selector: 'app-galery-artists',
  templateUrl: './galery-artists.component.html',
  styleUrls: ['./galery-artists.component.css']
})
export class GaleryArtistsComponent implements OnInit {
  artistas!: any[];

  constructor(private artistService:CrudArtistsService) { }

  ngOnInit(): void {
    this.artistService.mostrarArtistas().subscribe(result => {
      console.log(result);
      this.artistas = result;
    });
  }

}
