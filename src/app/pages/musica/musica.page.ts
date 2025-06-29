import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { SpotifyApiService } from 'src/app/services/spotify-api/spotify-api.service';
import { ActivatedRoute } from '@angular/router';
import { Musica } from 'src/app/types/musica';

@Component({
  selector: 'app-musica',
  templateUrl: './musica.page.html',
  styleUrls: ['./musica.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MusicaPage {
  musica: Musica = {
    album: {
      album_type: '',
      artists: [
        {
          external_urls: { spotify: '' },
          href: '',
          id: '',
          name: '',
          type: '',
          uri: ''
        }
      ],
      available_markets: [],
      external_urls: { spotify: '' },
      href: '',
      id: '',
      images: [
        {
          url: '',
          width: 0,
          height: 0
        }
      ],
      name: '',
      release_date: '',
      release_date_precision: '',
      total_tracks: 0,
      type: '',
      uri: ''
    },
    artists: [
      {
        external_urls: { spotify: '' },
        href: '',
        id: '',
        name: '',
        type: '',
        uri: ''
      }
    ],
    available_markets: [],
    disc_number: 0,
    duration_ms: 0,
    explicit: false,
    external_ids: { isrc: '' },
    external_urls: { spotify: '' },
    href: '',
    id: '',
    is_local: false,
    name: '',
    popularity: 0,
    preview_url: null,
    track_number: 0,
    type: '',
    uri: ''
  };
  private spotifyApiService = inject(SpotifyApiService);
  private route = inject(ActivatedRoute);

  constructor()
  {
    const id = this.route.snapshot.paramMap.get('id');
    if (id)
      this.carregarMusica(id);
  }
  
  carregarMusica(id: string): void
  {
    this.spotifyApiService.getMusica(id).subscribe(musica => {
      console.log(musica);

      this.musica = musica;

      console.log(this.musica);
    });
  }
}
