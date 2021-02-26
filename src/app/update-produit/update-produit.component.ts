import { Component, OnInit } from '@angular/core';
import { Produit } from './../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {

currentProduit = new Produit();

  constructor( private activatedRoute: ActivatedRoute, private router:Router, private produitService: ProduitService) { }

  ngOnInit(): void {
    //sans api
    //  //console.log(this.activatedRoute.snapshot.params.id);
    // this.currentProduit = this.produitService.consulterProduit(this.activatedRoute.snapshot.params.id);
    //  console.log(this.currentProduit);
    // avec api
    this.produitService.consulterProduit(this.activatedRoute.snapshot.params.id). subscribe( prod =>{
       this.currentProduit = prod;
       } ) ;
  }
  // sans api
  // updateProduit() {
  //   //console.log(this.currentProduit);
  //   this.produitService.updateProduit(this.currentProduit);
  //   //redirect vers la  route "produits"
  //   this.router.navigate(["produits"]);
  //  }
   // avec api
   updateProduit() {
      this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
      this.router.navigate(['produits']);
     },
     (error) => {
       alert("Problème lors de la modification !");
       }
       );
       }

}
