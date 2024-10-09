import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-prix',
  standalone: true,
  imports: [],
  templateUrl: './prix.component.html',
  styleUrl: './prix.component.css'
})
export class PrixComponent {
  @Input() prix = 0;
}