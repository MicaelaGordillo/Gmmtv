import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Importar las rutas
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
  {path: 'edit-artists/:id', component: EditArtistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
