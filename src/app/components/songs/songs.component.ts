import { Component, OnInit } from '@angular/core';
import { CrudSongsService } from 'src/app/service/crud-songs.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})

export class SongsComponent implements OnInit {
  songs!: any[];

  constructor(
    private songService:CrudSongsService,
    private route:Router,
    private sanitizer:DomSanitizer
  ) { }

  ngOnInit(): void {
    this.route.navigateByUrl('/songs');
    this.songService.mostrarCanciones().subscribe(result => {
      console.log(result);
      this.songs = result;
    });
  }

  srcVideo(index:any){
    //console.log(this.songs[index].link);
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.songs[index].link);
  }

  borrarCancion(id: any, iControl:any){
    //console.log(id);
    //console.log(iControl);
    if(window.confirm("¿Desea borrar la canción?")){
      this.songService.borrarCancion(id).subscribe((response)=>{
        if(this.songs !== undefined){
          this.songs.splice(iControl, 1);
        }
      });
    }
  }
}
