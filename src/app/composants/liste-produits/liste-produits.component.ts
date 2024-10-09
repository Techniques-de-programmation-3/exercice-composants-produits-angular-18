import { Component, Input } from '@angular/core';
import { FicheProduitComponent } from "../fiche-produit/fiche-produit.component";
import { Produit } from '../../interfaces/produit';

@Component({
  selector: 'app-liste-produits',
  standalone: true,
  imports: [FicheProduitComponent],
  templateUrl: './liste-produits.component.html',
  styleUrl: './liste-produits.component.css'
})
export class ListeProduitsComponent {
  produit1: Produit = {
    image : "https://picsum.photos/id/63/300/200", 
    nom: "Produit 1", 
    description: "Description du produit 1",
    prix: 10, 
    lien: "#"
  }

  produit2: Produit = {
    image : "https://picsum.photos/id/75/300/200", 
    nom: "Produit 2", 
    description: "Description du produit 2",
    prix: 20, 
    lien: "#"
  }
  
}