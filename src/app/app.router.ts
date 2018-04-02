import { Routes } from '@angular/router' 

import { HomeComponent } from './home/home.component'
import { DiversaoComponent } from './diversao/diversao.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'
import { OfertaComponent } from './oferta/oferta.component'

export const ROUTER: Routes = [
    { path: '', component: HomeComponent },
    { path: 'diversao', component: DiversaoComponent },
    { path: 'restaurantes', component: RestaurantesComponent },
    { path: 'oferta', component: HomeComponent },
    { path: 'oferta/:id', component: OfertaComponent } 
]  


/**
 *  Navegação
 * http://localhost:4200/
 * http://localhost:4200/restaurantes
 * http://localhost:4200/diversao
 * http://localhost:4200/oferta/id
 */