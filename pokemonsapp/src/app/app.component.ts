import { Component, OnInit } from '@angular/core';
import { Pokemon } from './model/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pokemonsapp';
  //table of pokemons
  private pokemons: Pokemon[];

  ngOnInit(): void {
    this.pokemons = POKEMON;
  }
}
