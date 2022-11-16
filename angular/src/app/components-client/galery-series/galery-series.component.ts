import { Component, OnInit } from '@angular/core';
import { CrudSeriesService } from 'src/app/service/crud-series.service';

@Component({
  selector: 'app-galery-series',
  templateUrl: './galery-series.component.html',
  styleUrls: ['./galery-series.component.css']
})
export class GalerySeriesComponent implements OnInit {
  series!: any[];

  constructor(private serieService:CrudSeriesService) { }

  ngOnInit(): void {
    this.serieService.mostrarSeries().subscribe(result => {
      console.log(result);
      this.series = result;
    });
  }

}
