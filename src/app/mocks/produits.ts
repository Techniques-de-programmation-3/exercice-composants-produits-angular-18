import { Produit } from "../interfaces/produit";

export const PRODUITS:Produit[] = [
    {
       // id: 1,
        image : "https://picsum.photos/id/63/300/200", 
        nom: "Produit 1", 
        description: "Description du produit 1",
        prix: 10, 
        lien : "#", 
        qteStock: 6
    }, 
    {
        //id: 2,
        image : "https://picsum.photos/id/75/300/200", 
        nom: "Produit 2", 
        description: "Description du produit 2",
        prix: 20, 
        lien : "#",
        qteStock: 2
    }, 
    {
        //id: 3,
        image : "https://picsum.photos/id/75/300/200", 
        nom: "Produit 3", 
        description: "Description du produit 3",
        prix: 20, 
        lien : "#",
        qteStock: 0
    }
]