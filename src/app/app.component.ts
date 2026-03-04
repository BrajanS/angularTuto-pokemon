import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemons";
import { PokemonInterface } from "./pokemonData";
import { BorderCardDirective } from "./border-card.directive";
import { DatePipe } from "@angular/common";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["../styles.css"],
  imports: [BorderCardDirective, DatePipe, PokemonTypeColorPipe],
})
export class AppComponent implements OnInit {
  // prettier-ignore
  pokemonDatas = POKEMONS.map((p, incrementedID) => ({ ...p, _uid: incrementedID }));
  pokemonStuff: PokemonInterface | undefined;

  ngOnInit(): void {
    this.getPokemonLog(POKEMONS);
  }

  getPokemonLog(pokemonArr: PokemonInterface[]) {
    if (typeof pokemonArr === "object" && pokemonArr !== null) {
      console.table(pokemonArr);
    }
  }
}
