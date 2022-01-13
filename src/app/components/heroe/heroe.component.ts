import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { HeroesService } from "../../servicios/heroes.service";

@Component({
  selector: "app-heroe",
  templateUrl: "./heroe.component.html",
})
export class HeroeComponent {
  heroe: any = {};

  constructor(
    private activatedRoute: ActivatedRoute, // Internal angular class to get access to the routes associated with components
    private _heroesService: HeroesService
  ) {
    // Suscribe to the event
    this.activatedRoute.params.subscribe((params) => {
      this.heroe = this._heroesService.getHeroe(params["id"]);
      // console.log(this.heroe);
    });
  }
}
