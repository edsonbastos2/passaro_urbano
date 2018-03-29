import { Routes } from '@angular/router' 

import { HomeComponent } from './home/home.component'
import { DiversaoComponent } from './diversao/diversao.component'
import { RestaurantesComponent } from './restaurantes/restaurantes.component'

export const ROUTER: Routes = [
    { path: '', component: HomeComponent },
    { path: 'diversao', component: DiversaoComponent },
    { path: 'restaurantes', component: RestaurantesComponent }
]  


/**
 *  Navegação
 * http://localhost:4200/
 * http://localhost:4200/restaurantes
 * http://localhost:4200/diversao
 */