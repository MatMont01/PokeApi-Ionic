import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) { }

  getPokemon(nameOrId: string | number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${nameOrId}`).pipe(
      map(pokemon => {
        pokemon.image = pokemon.sprites.front_default;
        return pokemon;
      })
    );
  }

  getAllPokemons(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?limit=1025`);
  }
  getCharacteristic(id: number): Observable<any> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/characteristic/${id}`);
  }
}
