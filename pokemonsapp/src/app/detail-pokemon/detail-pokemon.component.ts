import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { Pokemon } from '../model/pokemon';
import { POKEMONS } from '../mock-pokemons/mock-pokemons';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  pokemons: Pokemon[] = null;
	pokemon: Pokemon = null;

	constructor(private route: ActivatedRoute, private router: Router) {}

	ngOnInit(): void {
		this.pokemons = POKEMONS;
// + is used to cast a string in number
		let id = +this.route.snapshot.paramMap.get('id');
		for (let i = 0; i < this.pokemons.length; i++) {
			if (this.pokemons[i].id == id) {
				this.pokemon = this.pokemons[i];
			}
		}
	}

	goBack(): void {
		this.router.navigate(['/pokemons']);
	}
}
