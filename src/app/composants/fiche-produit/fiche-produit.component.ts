import { Component } from '@angular/core';
import { ImageComponent } from "../image/image.component";
import { TitreDescriptionComponent } from "../titre-description/titre-description.component";
import { PrixComponent } from "../prix/prix.component";
import { LienComponent } from "../lien/lien.component";

@Component({
  selector: 'app-fiche-produit',
  standalone: true,
  imports: [ImageComponent, TitreDescriptionComponent, PrixComponent, LienComponent],
  templateUrl: './fiche-produit.component.html',
  styleUrl: './fiche-produit.component.css'
})
export class FicheProduitComponent {

}
