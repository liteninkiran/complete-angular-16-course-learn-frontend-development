import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Product } from '../products';
import { ProductListComponent } from './product-list/product-list.component';

const productArray: Product[] = [
    { id: 1, name: 'Milk', price: 1.45 },
    { id: 2, name: 'Bread', price: 3.9 },
    { id: 3, name: 'Potatoes', price: 5.5 },
];

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, ProductListComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    public allProducts = productArray;
}
