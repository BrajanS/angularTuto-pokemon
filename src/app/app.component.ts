import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemons";
import { PokemonInterface } from "./pokemonData";
import { BorderCardDirective } from "./border-card.directive";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["../styles.css"],
  imports: [BorderCardDirective],
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
      /*pokemonArr.forEach((elpokemon: PokemonInterface) => {
        console.info("chosen Pokemon:", elpokemon.name);
      });*/
    }
  }
}
