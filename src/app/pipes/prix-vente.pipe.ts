import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../interfaces/produit';

@Pipe({
  name: 'prixVente',
  standalone: true
})
export class PrixVentePipe implements PipeTransform {

  transform(produit: Produit): number {
    let prixVente = 0;

    // le prix de vente correspond à 30% du prix si la quantité en stock est inférieure à 10
    if(produit.qteStock < 10) { 
      prixVente = produit.prix + produit.prix * 30/100;
    } else { // sinon, le prix de vente correspond à 20% du prix
      prixVente = produit.prix + produit.prix * 20/100;
    }
    return prixVente;
  }

}
