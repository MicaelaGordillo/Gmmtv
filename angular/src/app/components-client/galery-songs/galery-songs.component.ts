import { Component, OnInit } from '@angular/core';
import { CrudSongsService } from 'src/app/service/crud-songs.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-galery-songs',
  templateUrl: './galery-songs.component.html',
  styleUrls: ['./galery-songs.component.css']
})

export class GalerySongsComponent implements OnInit {
  songs!: any[];

  constructor(
    private songService:CrudSongsService,
    private sanitizer:DomSanitizer
  ) { }

  ngOnInit(): void {
    this.songService.mostrarCanciones().subscribe(result => {
      console.log(result);
      this.songs = result;
    });
  }

  srcVideo(index:any){
    //console.log(this.songs[index].link);
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.songs[index].link);
  }

}
