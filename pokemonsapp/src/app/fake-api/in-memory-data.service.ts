import { Injectable } from '@angular/core';
import { POKEMONS } from '../pokemons/mock-pokemons/mock-pokemons';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

	createDb() {
		let pokemons = POKEMONS;
		return { pokemons };
  }
}
