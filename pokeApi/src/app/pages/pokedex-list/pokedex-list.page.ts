import {Component, OnInit, ViewChild} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {Router} from "@angular/router";
import {forkJoin} from "rxjs";
import {IonSelect} from "@ionic/angular";

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.page.html',
  styleUrls: ['./pokedex-list.page.scss'],
})
export class PokedexListPage implements OnInit {
  @ViewChild('select') select!: IonSelect;
  searchTerm: string = '';
  searchType: string = 'name';
  pokemons: any[] = [];
  allPokemons: any[] = [];

  constructor(private pokemonService: PokemonService, private router: Router) {
  }

  ngOnInit() {
    this.pokemonService.getAllPokemons().subscribe(response => {
      let pokemonData = response.results.map((pokemon: any) => {
        pokemon.id = this.extractIdFromUrl(pokemon.url);
        return this.pokemonService.getPokemon(pokemon.id);
      });

      forkJoin<any[]>(pokemonData).subscribe((pokemons: any[]) => {
        this.allPokemons = pokemons;
        this.pokemons = pokemons;
      });
    });
  }

  openSelect() {
    this.select.open();
  }

  extractIdFromUrl(url: string): number {
    let urlParts = url.split('/');
    return Number(urlParts[urlParts.length - 2]);
  }

  goToPokemonDetails(pokemon: any) {
    this.router.navigate(['/pokemon-details', pokemon.id]);
  }

  searchPokemon(term: string) {
    if (term.trim() === '') {
      this.pokemons = this.allPokemons;
    } else {
      if (this.searchType === 'name') {
        this.pokemons = this.allPokemons.filter((pokemon: any) => {
          return pokemon.name.includes(term.toLowerCase());
        });
      } else if (this.searchType === 'number') {
        this.pokemons = this.allPokemons.filter(pokemon => {
          return pokemon.id === +term;
        });
      }
    }
  }
}
