import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',

})
export class ProduitsComponent implements OnInit {
  //Model
    //data binding1
  produits: string[];
    constructor() {
      //data binding2
      this.produits=["PC Asus","Imprimante Epson","Tablette Samsung"];
     }

  ngOnInit(): void {
  }

}
