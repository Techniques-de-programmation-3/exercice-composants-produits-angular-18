import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnteteComponent } from "./composants/entete/entete.component"; // ajouter l'import du composant
import { ListeProduitsComponent } from "./composants/liste-produits/liste-produits.component";
import { PiedPageComponent } from "./composants/pied-page/pied-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EnteteComponent, ListeProduitsComponent, PiedPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercice-composants-produits';
}
