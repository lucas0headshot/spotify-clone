import { addIcons } from 'ionicons';
import { Component, inject, OnInit } from '@angular/core';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, IonCard, IonLabel, IonIcon, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonCardContent, IonItem, IonModal } from '@ionic/angular/standalone';

import { SpotifyApiService } from '../../services/spotify-api/spotify-api.service';
import { Artist, GetUserTopTracks } from '../../types/api/getTopUserTracks';
import { Router } from '@angular/router';
import { arrowForwardOutline, ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonModal, IonItem, IonCardContent, IonButton, IonCardSubtitle, IonCardTitle, IonCardHeader, IonIcon, IonLabel, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList],
})
export class HomePage implements OnInit {
  private spotifyApiService = inject(SpotifyApiService);
  musicas: Artist[] = [];
  private router = inject(Router);

  ngOnInit(): void
  {
    this.carregarMusicas();
    addIcons({ arrowForwardOutline });
  }

  carregarMusicas(): void
  {
    this.spotifyApiService.getMusicas()
      .subscribe((response: GetUserTopTracks) => {
        console.log(response);
        this.musicas = response.items;
      });
  }

  abrirMusica(musica: Artist): void
  {
    this.router.navigate(['/musica', musica.id]);
  }
}
