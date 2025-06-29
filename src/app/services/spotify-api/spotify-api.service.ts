import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Musica } from "src/app/types/musica";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class SpotifyApiService {
  private token: string = environment.spotifyToken;
  private httpClient: HttpClient = inject(HttpClient);
  private readonly API_URL: string = environment.spotifyUrl;

  getMusicas(): Observable<GetUserTopTracks> {
    const url = `${this.API_URL}me/top/tracks`;
    const params = {
      limit: "10",
      time_range: "long_term"
    };
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.httpClient.get<GetUserTopTracks>(url, { headers, params });
  }

  getMusica(id: string): Observable<Musica> {
    const url = `${this.API_URL}tracks/${id}`;
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`
    });

    return this.httpClient.get<Musica>(url, { headers });
  }
}
