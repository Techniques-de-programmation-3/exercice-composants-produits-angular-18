import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titre-description',
  standalone: true,
  imports: [],
  templateUrl: './titre-description.component.html',
  styleUrl: './titre-description.component.css'
})
export class TitreDescriptionComponent {
  @Input() titre = "";
  @Input() description = "";
}