import { Component } from '@angular/core';
import { FicheProduitComponent } from "../fiche-produit/fiche-produit.component";

@Component({
  selector: 'app-liste-produits',
  standalone: true,
  imports: [FicheProduitComponent],
  templateUrl: './liste-produits.component.html',
  styleUrl: './liste-produits.component.css'
})
export class ListeProduitsComponent {

}
