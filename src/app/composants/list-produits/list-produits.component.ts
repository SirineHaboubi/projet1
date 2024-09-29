import { Component } from '@angular/core';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent {
  produits : String[] = [
    "test1",
    "test2",
    "test3"
  ] ;
}
