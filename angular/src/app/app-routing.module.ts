import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar las rutas para la vista del administrador
import { HomeComponent } from './components/home/home.component';
import { SeriesComponent } from './components/series/series.component';
import { AddSeriesComponent } from './components/add-series/add-series.component';
import { EditSeriesComponent } from './components/edit-series/edit-series.component';
import { SongsComponent } from './components/songs/songs.component';
import { AddSongComponent } from './components/add-song/add-song.component';
import { EditSongComponent } from './components/edit-song/edit-song.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { AddArtistComponent } from './components/add-artist/add-artist.component';
import { EditArtistComponent } from './components/edit-artist/edit-artist.component';

//Importar rutas para la vista del cliente
import { GalerySeriesComponent } from './components-client/galery-series/galery-series.component';
import { SerieComponent } from './components-client/serie/serie.component';
import { GalerySongsComponent } from './components-client/galery-songs/galery-songs.component';
import { SongComponent } from './components-client/song/song.component';
import { GaleryArtistsComponent } from './components-client/galery-artists/galery-artists.component';
import { ArtistComponent } from './components-client/artist/artist.component';

//Declarar rutas de navegación
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'add-series', component: AddSeriesComponent},
  {path: 'edit-series/:id', component: EditSeriesComponent},
  {path: 'songs', component: SongsComponent},
  {path: 'add-songs', component: AddSongComponent},
  {path: 'edit-song/:id', component: EditSongComponent},
  {path: 'artists', component: ArtistsComponent},
  {path: 'add-artists', component: AddArtistComponent},
  {path: 'edit-artists/:id', component: EditArtistComponent},
  {path: 'galery-series', component: GalerySeriesComponent},
  {path: 'serie/:id', component: SerieComponent},
  {path: 'galery-artists', component: GaleryArtistsComponent},
  {path: 'artist/:id', component: ArtistComponent},
  {path: 'galery-songs', component: GalerySongsComponent},
  {path: 'song/:id', component: SongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
