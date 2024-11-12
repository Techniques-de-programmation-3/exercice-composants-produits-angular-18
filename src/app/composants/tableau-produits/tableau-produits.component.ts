import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { PRODUITS } from '../../mocks/produits';


@Component({
  selector: 'app-tableau-produits',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './tableau-produits.component.html',
  styleUrl: './tableau-produits.component.css'
})
export class TableauProduitsComponent {
  colonnesAffichees: string[] = ['nom', 'prix', 'quantite'];
  dataSource = PRODUITS;
}
