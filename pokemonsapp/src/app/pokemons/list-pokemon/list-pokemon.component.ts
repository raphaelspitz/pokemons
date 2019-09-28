import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';
import { POKEMONS } from '../mock-pokemons/mock-pokemons';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  constructor(private router:Router) { }
//table of pokemons
private pokemons: Pokemon[];

private title: string = "Pokémons";

//charging the mocks onload of the page
ngOnInit(): void {
  this.pokemons = POKEMONS;
}

selectPokemon(pokemon){
 // console.log(pokemon);
 let link = ['/pokemon', pokemon.id];
 this.router.navigate(link);
}

showPokemonDate(date){
  console.log(date.innerText);
}
}
