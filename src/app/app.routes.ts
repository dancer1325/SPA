import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";

const APP_ROUTES: Routes = [
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "heroes", component: HeroesComponent },
  { path: "heroe/:id", component: HeroeComponent },
  { path: "buscar/:termino", component: BuscadorComponent },
  { path: "**", pathMatch: "full", redirectTo: "home" }, // Default route. If some path doesn't match with any route --> It will be redirected to this route
];

// useHash: Show "#" or not while you navigate in the app by the different pages
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: false });
// export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
