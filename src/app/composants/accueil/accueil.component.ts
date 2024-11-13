import { Component } from '@angular/core';
import { ListeProduitsComponent } from "../liste-produits/liste-produits.component";
import { TestPipesComponent } from "../test-pipes/test-pipes.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [ListeProduitsComponent, TestPipesComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
