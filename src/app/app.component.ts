import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

import { EnteteComponent } from "./composants/entete/entete.component"; // ajouter l'import du composant
import { ListeProduitsComponent } from "./composants/liste-produits/liste-produits.component";
import { PiedPageComponent } from "./composants/pied-page/pied-page.component";

registerLocaleData(localeFrCA); 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EnteteComponent, ListeProduitsComponent, PiedPageComponent],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-CA' }
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exercice-composants-produits';
}
