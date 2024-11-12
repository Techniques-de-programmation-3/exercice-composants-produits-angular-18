import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-entete',
  standalone: true,
  imports: [RouterLink, MatToolbarModule, MatIconModule],
  templateUrl: './entete.component.html',
  styleUrl: './entete.component.css'
})
export class EnteteComponent {

}
