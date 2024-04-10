import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../../services/pokemon.service';
import {ActivatedRoute, Router} from "@angular/router";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.page.html',
  styleUrls: ['./pokemon-details.page.scss'],
})
export class PokemonDetailsPage implements OnInit {
  pokemon: any;
  pokemonCache: { [key: number]: any } = {};

  constructor(private pokemonService: PokemonService, private route: ActivatedRoute, private router: Router) {
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      await this.getPokemonDetails(Number(id));
    }
  }

  async getPokemonDetails(id: number) {
    try {
      if (!this.pokemonCache[id]) {
        this.pokemon = await firstValueFrom(this.pokemonService.getPokemon(id));
        const characteristic = await firstValueFrom(this.pokemonService.getCharacteristic(this.pokemon.id));
        const englishDescription = characteristic.descriptions.find((desc: any) => desc.language.name === 'en');
        if (englishDescription) {
          this.pokemon.characteristic = englishDescription.description;
        }
        this.pokemonCache[id] = this.pokemon;
      } else {
        this.pokemon = this.pokemonCache[id];
      }
    } catch (error) {
      console.error(error);
    }
  }

  goBack() {
    this.router.navigate(['../']).then(r => r);
  }

  async goToNextPokemon() {
    if (this.pokemon && this.pokemon.id) {
      const nextPokemonId = this.pokemon.id + 1;
      await this.router.navigate(['/pokemon-details', nextPokemonId]);
    }
  }

  getBackgroundColor(type: string): string {
    switch (type) {
      case 'grass':
        return '#74CB48';
      case 'fire':
        return '#F57D31';
      case 'water':
        return '#6493EB';
      case 'bug':
        return '#A7B723';
      case 'electric':
        return '#F9CF30';
      case 'poison':
        return '#70559B';
      case 'normal':
        return '#AAA67F';
      case 'physic':
        return '#FB5584';
      case 'steel':
        return '#B7B9D0';
      default:
        return '#74cb48';
    }
  }
}
