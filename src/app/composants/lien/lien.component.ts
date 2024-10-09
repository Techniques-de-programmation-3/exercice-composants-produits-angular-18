import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lien',
  standalone: true,
  imports: [],
  templateUrl: './lien.component.html',
  styleUrl: './lien.component.css'
})
export class LienComponent {
  @Input() lien = "#";
}