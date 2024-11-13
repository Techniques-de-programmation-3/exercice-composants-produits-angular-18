import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../interfaces/produit';

@Pipe({
  name: 'qteNegative',
  standalone: true
})
export class QteNegativePipe implements PipeTransform {

  transform(produits: Produit[]): Produit[] {
    return produits.filter(produit => produit.qteStock < 0);
  }

}
