import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroe-tarjeta",
  templateUrl: "./heroe-tarjeta.component.html",
  styleUrls: ["./heroe-tarjeta.component.css"],
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {}; // Property in the child component which is going to be mapped from the parent component app-heroes and app-buscador
  @Input() index: number; // Property in the child component which is going to be mapped from the parent component app-heroes and app-buscador

  @Output() heroeSeleccionado: EventEmitter<number>; // Property in the child component to be shared with the parent component, raising an event

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit() {}

  verHeroe() {
    // console.log(  this.index );
    this.router.navigate(["/heroe", this.index]); // Indicate manually the navigation. The url is the concatenation to all the elements into the array
    // this.heroeSeleccionado.emit( this.index ); // Emit the event
  }
}
