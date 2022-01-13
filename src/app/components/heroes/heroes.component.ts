import { Component, OnInit } from "@angular/core";
import { HeroesService, Heroe } from "../../servicios/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
})
export class HeroesComponent implements OnInit {
  // OnInit is a lifecycle hook

  heroes: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private router: Router) {
    // console.log("constructor");
  }

  // Method to handle any additional initialization tasks
  ngOnInit() {
    this.heroes = this._heroesService.getHeroes();
    // console.log( this.heroes );
  }

  verHeroe(idx: number) {
    this.router.navigate(["/heroe", idx]);
  }
}
