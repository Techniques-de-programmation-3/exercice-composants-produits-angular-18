import { Component, Input } from '@angular/core';
import { ImageComponent } from "../image/image.component";
import { TitreDescriptionComponent } from "../titre-description/titre-description.component";
import { PrixComponent } from "../prix/prix.component";
import { LienComponent } from "../lien/lien.component";
import { Produit } from '../../interfaces/produit';
import { PrixVentePipe } from '../../pipes/prix-vente.pipe';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-fiche-produit',
  standalone: true,
  imports: [ImageComponent, TitreDescriptionComponent, PrixComponent, LienComponent, PrixVentePipe, CurrencyPipe],
  templateUrl: './fiche-produit.component.html',
  styleUrl: './fiche-produit.component.css'
})
export class FicheProduitComponent {
  @Input() produit : Produit = {
    image : "", nom: "", description: "",prix: 0, lien: "", qteStock:0
  }
}
