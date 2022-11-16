import { Component, OnInit } from '@angular/core';
import { CrudArtistsService } from 'src/app/service/crud-artists.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artistas!: any[];

  constructor(
    private artistService:CrudArtistsService,
    private route:Router
  ) { }

  ngOnInit(): void {
    this.route.navigateByUrl('/artists');
    this.artistService.mostrarArtistas().subscribe(result => {
      console.log(result);
      this.artistas = result;
    });
  }

  borrarArtista(id: any, iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar al artista?")){
      this.artistService.borrarArtista(id).subscribe((response)=>{
        if(this.artistas !== undefined){
          this.artistas.splice(iControl, 1);
        }
      });
    }
  }

}
