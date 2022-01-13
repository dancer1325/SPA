"use strict";
exports.__esModule = true;
exports.APP_ROUTING = void 0;
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var about_component_1 = require("./components/about/about.component");
var heroes_component_1 = require("./components/heroes/heroes.component");
var heroe_component_1 = require("./components/heroe/heroe.component");
var buscador_component_1 = require("./components/buscador/buscador.component");
var APP_ROUTES = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'heroes', component: heroes_component_1.HeroesComponent },
    { path: 'heroe/:id', component: heroe_component_1.HeroeComponent },
    { path: 'buscar/:termino', component: buscador_component_1.BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
exports.APP_ROUTING = router_1.RouterModule.forRoot(APP_ROUTES, { useHash: false });
