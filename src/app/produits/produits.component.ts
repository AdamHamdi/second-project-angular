import { Component, OnInit } from '@angular/core';
import { Produit } from './../model/produit.model';
import { ProduitService } from './../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',

})
export class ProduitsComponent implements OnInit {

   produits: Produit[];
   //injection de depeondance
    constructor( private produitService: ProduitService, private router:Router) {
      //this.produits=produitService.listeProduit();
      //data binding2
      //  this.produits=[
      //    //notation json
      //    {idProduit:1, nomProduit:"PC Asus",prixProduit:3000.600,dateCreation:new Date("01/14/2010")},
      //    {idProduit:2, nomProduit:"Imprimante Epson",prixProduit:450, dateCreation:new Date("12/17/2010")},
      //    {idProduit:3, nomProduit:"Tablette Samsung",prixProduit:900.123,dateCreation:new Date("02/20/2010")},
      //  ];
    }

  ngOnInit(): void {
    this.produitService.listeProduit().subscribe(prods => {
       console.log(prods);
        this.produits = prods;
      });
  }
  // supprimer en local sans api
  // supprimerProduit(p: Produit) {
  //    //console.log(p);
  //    let conf = confirm("Etes-vous sûr de supprimer le produit ?");
  //    if (conf)
  //     this.produitService.supprimerProduit(p);
  //    }
  SuprimerProduitDuTableau(prod : Produit) {
     this.produits.forEach((cur, index) => {
       if(prod.idProduit=== cur.idProduit) {
          this.produits.splice(index, 1);
        }
      });
    }

     supprimerProduit(p: Produit) {
        let conf = confirm("Etes-vous sûr de supprimer le produit ?");
         if (conf)
         this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
           console.log("produit supprimé");
           //});
            // this.router.navigate(['produits']).then(() => {
            //     window.location.reload()
            this.SuprimerProduitDuTableau(p)
                ;
              });
            }

}
