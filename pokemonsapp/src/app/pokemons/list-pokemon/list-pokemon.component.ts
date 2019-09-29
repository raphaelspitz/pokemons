import { PokemonsService } from './../service/pokemons.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit {

  constructor(private router:Router, private pokemonsService:PokemonsService) { }
//table of pokemons
private pokemons: Pokemon[];
 
private title: string = "Pokémons";

//charging the mocks onload of the page
ngOnInit(): void {
   this.pokemonsService.getPokemons()
    .subscribe(pokemons => this.pokemons = pokemons);
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
