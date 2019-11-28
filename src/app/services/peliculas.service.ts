import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Ipeliculas } from '../model/peliculas.interface'


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private url: string='';
  private apiKey: string ='dbb7dfce';


  constructor(private http: HttpClient) { }

  searchMovies(title: string, type: string) {
    this.url = `https://www.omdbapi.com/?s=${encodeURI(title)}&type=${type}&apikey=${this.apiKey}`;
    console.log(this.url);
    return this.http.get<Ipeliculas>(this.url).pipe(map(results => results['Search']));
  }

  getDetails(id: string) {
    return this.http.get<Ipeliculas>(`https://www.omdbapi.com/?i=${id}&plot=full&apikey=${this.apiKey}`);
  }
}
