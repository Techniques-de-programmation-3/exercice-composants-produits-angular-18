import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-pipes',
  standalone: true,
  imports: [UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './test-pipes.component.html',
  styleUrl: './test-pipes.component.css'
})
export class TestPipesComponent {
  duTexte = "Du texte...";
  unNombre = 123;
  uneDate = new Date(2024, 11-1, 12); 
}
