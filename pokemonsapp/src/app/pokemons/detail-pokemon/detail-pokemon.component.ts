import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Pokemon } from '../model/pokemon';
import { PokemonsService } from '../service/pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  pokemons: Pokemon[] = null;
	pokemon: Pokemon = null;

	constructor(private route: ActivatedRoute, private router: Router,
		private pokemonsService:PokemonsService) {}

	ngOnInit(): void {
		this.pokemons = this.pokemonsService.getPokemons();
// + is used to cast a string in number
		let id = +this.route.snapshot.paramMap.get('id');
		 this.pokemon = this.pokemonsService.getPokemon(id);
	}

	goBack(): void {
		this.router.navigate(['/pokemons']);
	}
}
