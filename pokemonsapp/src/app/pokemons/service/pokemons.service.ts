import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { POKEMONS } from './../mock-pokemons/mock-pokemons';
import { Pokemon } from './../model/pokemon';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private httpClient:HttpClient) { }

    private pokemonsUrl = 'api/pokemons';

    private log(log:string){
      console.info(log);
    }

    private handleError<T>(operation='operation', result?:T){
      return (error:any):Observable<T> => {
        console.log(error);
        console.log(operation + "failed" + error.message);
        return of(result as T);
      };
    }

      // Retourne tous les pokémons
      getPokemons(): Observable<Pokemon[]> {
        return this.httpClient.get<Pokemon[]>(this.pokemonsUrl)
          .pipe(
            tap( _ => this.log('fetch pokmenons')),
            catchError(this.handleError('getPokemons',[]))
          )
      }
      
      // Retourne le pokémon avec l'identifiant passé en paramètre
      getPokemon(id: number): Observable<Pokemon>  {
        const url = this.pokemonsUrl + '/' + id;
        return this.httpClient.get<Pokemon>(url)
        .pipe(
          tap( _ => this.log('fetch pokmenons id = ' +id)),
          catchError(this.handleError<Pokemon>('get pokemon ' + id))
        );
      }

      getPokemonTypes():string[]{
        return ['Plante','Feu','Eau','Insecte', 'Normal', 'Electrik', 'Poison','Vol','Fée' ]
      }
}
