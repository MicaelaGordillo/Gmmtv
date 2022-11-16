import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';

import { SeriesComponent } from './components/series/series.component';
import { AddSeriesComponent } from './components/add-series/add-series.component';
import { EditSeriesComponent } from './components/edit-series/edit-series.component';

import { ArtistsComponent } from './components/artists/artists.component';
import { EditArtistComponent } from './components/edit-artist/edit-artist.component';

import { SongsComponent } from './components/songs/songs.component';
import { AddSongComponent } from './components/add-song/add-song.component';
import { EditSongComponent } from './components/edit-song/edit-song.component';

import { FooterComponent } from './components/footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddArtistComponent } from './components/add-artist/add-artist.component';
import { GalerySeriesComponent } from './components-client/galery-series/galery-series.component';
import { GaleryArtistsComponent } from './components-client/galery-artists/galery-artists.component';
import { GalerySongsComponent } from './components-client/galery-songs/galery-songs.component';
import { SerieComponent } from './components-client/serie/serie.component';
import { ArtistComponent } from './components-client/artist/artist.component';
import { SongComponent } from './components-client/song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeriesComponent,
    AddSeriesComponent,
    EditSeriesComponent,
    ArtistsComponent,
    EditArtistComponent,
    SongsComponent,
    AddSongComponent,
    EditSongComponent,
    FooterComponent,
    AddArtistComponent,
    GalerySeriesComponent,
    GaleryArtistsComponent,
    GalerySongsComponent,
    SerieComponent,
    ArtistComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
