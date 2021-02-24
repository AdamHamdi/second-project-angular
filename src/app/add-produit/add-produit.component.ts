import { Component, OnInit } from '@angular/core';
import { Produit } from './../model/produit.model';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',

})
export class AddProduitComponent implements OnInit {
 newProduit = new Produit();
  constructor() {

   }

  ngOnInit(): void {
  }
  addProduit(){
    console.log(this.newProduit);
  }

}
