import { Component } from '@angular/core';
import { ListeProduitsComponent } from "../liste-produits/liste-produits.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [ListeProduitsComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
