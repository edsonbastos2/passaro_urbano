import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service'

import { Oferta } from '../shared/oferta.model'
import { reject } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[]

  constructor( private ofertaService: OfertasService) { }

  ngOnInit() {
    this.ofertaService.getOfertas()
    .then((oferta: Oferta[]) => {
       this.ofertas = oferta 
    })
    .catch((param: any) => {
       console.log(param)
      })
  }

}
