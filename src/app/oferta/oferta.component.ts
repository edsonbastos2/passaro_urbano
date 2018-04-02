import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model'
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})

export class OfertaComponent implements OnInit {
  private oferta: Oferta

  constructor(private ofertasService: OfertasService, private router: ActivatedRoute) { }

  ngOnInit() {
    // console.log("ID recuperado da rota: ",this.router.snapshot.params['id'])
      this.ofertasService.getOfertaPorId(this.router.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
        console.log(oferta)
      })
    
  }

}
