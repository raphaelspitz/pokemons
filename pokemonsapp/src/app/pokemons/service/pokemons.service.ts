import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { POKEMONS } from './../mock-pokemons/mock-pokemons';
import { Pokemon } from './../model/pokemon';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor() { }

      // Retourne tous les pokémons
      getPokemons(): Pokemon[] {
        return POKEMONS;
      }
      
      // Retourne le pokémon avec l'identifiant passé en paramètre
      getPokemon(id: number): Pokemon {
        let pokemons = this.getPokemons();
      
        for(let index = 0; index < pokemons.length; index++) {
          if(id === pokemons[index].id) {
            return pokemons[index];
          }
        }
      }

      getPokemonTypes():string[]{
        return ['Plante','Feu','Eau','Insecte', 'Normal', 'Electrik', 'Poison','Vol','Fée' ]
      }
}
