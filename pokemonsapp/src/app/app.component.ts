import { Component, OnInit } from '@angular/core';

import { Pokemon } from './model/pokemon';
import { POKEMONS } from './mock-pokemons/mock-pokemons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  //table of pokemons
  private pokemons: Pokemon[];

  private title: string = "Pokémons";

  //charging the mocks onload of the page
  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  selectPokemon(pokemon){
    console.log(pokemon);
  }

}
