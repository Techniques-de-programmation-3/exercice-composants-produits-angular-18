import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { PRODUITS } from '../../mocks/produits';
import { CurrencyPipe } from '@angular/common';
import { PrixVentePipe } from '../../pipes/prix-vente.pipe';

import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Produit } from '../../interfaces/produit';

@Component({
  selector: 'app-tableau-produits',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, CurrencyPipe, PrixVentePipe],
  templateUrl: './tableau-produits.component.html',
  styleUrl: './tableau-produits.component.css'
})
export class TableauProduitsComponent implements AfterViewInit  {
  colonnesAffichees: string[] = ['nom', 'prix', 'prixVente', 'quantite'];

  dataSource = new MatTableDataSource(PRODUITS);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
