import { Component } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../model/pokemon-model';


@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent {


  pokemons: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) { }


  ngOnInit() {
    this.pokemonService.getPokemons().subscribe((response) => {
      this.pokemons = response.cards;
      console.log(response.cards);

    });


  }
}