import { Component, Input } from '@angular/core';
import { FicheProduitComponent } from "../fiche-produit/fiche-produit.component";
import { Produit } from '../../interfaces/produit';
import { PRODUITS } from '../../mocks/produits';
import { QteMinMaxPipe } from '../../pipes/qte-min-max.pipe';

@Component({
  selector: 'app-liste-produits',
  standalone: true,
  imports: [FicheProduitComponent, QteMinMaxPipe],
  templateUrl: './liste-produits.component.html',
  styleUrl: './liste-produits.component.css'
})
export class ListeProduitsComponent {
  produits = PRODUITS;
}