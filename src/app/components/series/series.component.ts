import { Component, OnInit } from '@angular/core';
import { CrudSeriesService } from 'src/app/service/crud-series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})

export class SeriesComponent implements OnInit {
  series!: any[];

  constructor(
    private serieService:CrudSeriesService,
    private route:Router,
    ) { }

  ngOnInit() {
    this.route.navigateByUrl('/series');
    this.serieService.mostrarSeries().subscribe(result => {
      console.log(result);
      this.series = result;
    });
  }

  borrarSerie(id: any, iControl:any){
    console.log(id);
    console.log(iControl);
    if(window.confirm("¿Desea borrar la serie?")){
      this.serieService.borrarSerie(id).subscribe((response)=>{
        if(this.series !== undefined){
          this.series.splice(iControl, 1);
        }
      });
    }
  }
}
