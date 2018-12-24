import { Component, OnInit } from "@angular/core";
import { ItemEventData, ListView } from "tns-core-modules/ui/list-view";
import { TareasService } from "~/app/services/tareas.service";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    data = [];

    constructor(public _tareasService: TareasService) {
        // Use the component constructor to inject providers.
    }

    async ngOnInit() {

        // let test = (await this._tareasService.getTarea()).tareas;
        // this._tareasService.getTareas();

        // console.log(test);

        this.data.push({ text: "Bulbasaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" });
        this.data.push({ text: "Ivysaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" });
        this.data.push({ text: "Venusaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" });
        this.data.push({ text: "Charmander", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" });
        this.data.push({ text: "Charmeleon", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" });
        this.data.push({ text: "Charizard", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" });
        this.data.push({ text: "Squirtle", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" });
        this.data.push({ text: "Wartortle", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" });
        this.data.push({ text: "Blastoise", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" });
        this.data.push({ text: "Caterpie", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" });
        this.data.push({ text: "Metapod", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" });
        this.data.push({ text: "Butterfree", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" });
        this.data.push({ text: "Weedle", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" });
        this.data.push({ text: "Kakuna", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" });
        this.data.push({ text: "Beedrill", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" });
    }

    onItemTap(args) {
        console.log("You tapped: " + this.data[args.index].text);
    }
}
