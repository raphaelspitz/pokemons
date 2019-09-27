import { Component } from '@angular/core';
import { Pokemon } from './model/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokemonsapp';
  //table of pokemons
  private pokemons: Pokemon[];
}
