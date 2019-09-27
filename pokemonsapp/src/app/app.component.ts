import { Component, OnInit } from '@angular/core';

import { Pokemon } from './model/pokemon';
import { POKEMONS } from './mock-pokemons/mock-pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pokemonsapp';
  //table of pokemons
  private pokemons: Pokemon[];

  //charging the mocks onload of the page
  ngOnInit(): void {
    this.pokemons = POKEMONS;
    this.selectPokemon(this.pokemons[1])
  }

  selectPokemon(pokemon:Pokemon){
    alert("vous avez cliquer sur :"+pokemon.name);
  }
}
