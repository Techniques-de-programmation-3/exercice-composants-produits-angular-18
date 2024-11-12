import { Routes } from '@angular/router';
import { ListeProduitsComponent } from './composants/liste-produits/liste-produits.component';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { AProposComponent } from './composants/a-propos/a-propos.component';
import { TableauProduitsComponent } from './composants/tableau-produits/tableau-produits.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent }, 
    { path: 'produits', component: ListeProduitsComponent }, 
    { path: 'a-propos', component:  AProposComponent}, 
    { path: 'administration', component:  TableauProduitsComponent}
];
