import { Pipe, PipeTransform } from '@angular/core';
import { Produit } from '../interfaces/produit';

@Pipe({
  name: 'qteMinMax',
  standalone: true
})
export class QteMinMaxPipe implements PipeTransform {

  transform(produits: Produit[], min: number = Number.MIN_VALUE, max: number = Number.MAX_VALUE): Produit[] {
    return produits.filter(produit => produit.qteStock >= min && produit.qteStock <= max);
  }

}
