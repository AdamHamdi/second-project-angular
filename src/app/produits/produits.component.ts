import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',

})
export class ProduitsComponent implements OnInit {

  produits: Produit[];
    constructor() {
      //data binding2
    //   this.produits=["PC Asus","Imprimante Epson","Tablette Samsung"];
    }

  ngOnInit(): void {
  }

}
