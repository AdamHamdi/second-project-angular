import { Injectable } from '@angular/core';
import { Produit } from './../model/produit.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
   headers: new HttpHeaders( {'Content-Type': 'application/json'} )
   };

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  apiURL:string='http://localhost:8080/produits/api';
  produits: Produit[];
  produit: Produit;
  constructor(private http:HttpClient) {

    // this.produits=[
    //   //notation json
    //   {idProduit:1, nomProduit:"PC Asus",prixProduit:3000.600,dateCreation:new Date("01/14/2010")},
    //   {idProduit:2, nomProduit:"Imprimante Epson",prixProduit:450, dateCreation:new Date("12/17/2010")},
    //   {idProduit:3, nomProduit:"Tablette Samsung",prixProduit:900.123,dateCreation:new Date("02/20/2010")},
    // ];

   }
   listeProduit(): Observable<Produit[]>{
      return this.http.get<Produit[]>(this.apiURL);
     }

  //  listeProduit():Produit[]{
  //    return this.produits
  //  }
   ajouterProduit(prod:Produit){
     this.produits.push(prod);
   }
   supprimerProduit(prod: Produit){
     //supprimer le produit prod du tableau produits
     const index = this.produits.indexOf(prod, 0);
     if (index > -1) { this.produits.splice(index, 1); }
   }
   consulterProduit(id:number): Produit{
     return  this.produit = this.produits.find(p => p.idProduit == id);
       //return this.produit;
      }
   updateProduit(p:Produit) {
        // console.log(p);
        this.supprimerProduit(p);
         this.ajouterProduit(p);
         this.trierProduits();
        }
        //cette methode est pour  trier les element du tableau
  trierProduits(){
    this.produits = this.produits.sort((n1,n2) => {
       if (n1.idProduit > n2.idProduit) {
          return 1;
        }
        if (n1.idProduit < n2.idProduit) {
          return -1;
        }
         return 0;
        });
      }
}
