import { Component, OnInit } from '@angular/core';
import { Produit } from './../model/produit.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',

})
export class ProduitsComponent implements OnInit {

  produits: Produit[];
    constructor() {
      //data binding2
       this.produits=[
         //notation json
         {idProduit:1, nomProduit:"PC Asus",prixProduit:3000.600,dateCreation:new Date("01/14/2010")},
         {idProduit:2, nomProduit:"Imprimante Epson",prixProduit:450, dateCreation:new Date("12/17/2010")},
         {idProduit:3, nomProduit:"Tablette Samsung",prixProduit:900.123,dateCreation:new Date("02/20/2010")},
       ];
    }

  ngOnInit(): void {
  }

}
