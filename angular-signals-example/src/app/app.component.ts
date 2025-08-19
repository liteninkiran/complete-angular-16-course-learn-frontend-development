import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

type Product = {
    id: number;
    name: string;
    price: number;
};

const productArray: Product[] = [
    { id: 1, name: 'Milk', price: 1.45 },
    { id: 2, name: 'Bread', price: 3.9 },
    { id: 3, name: 'Potatoes', price: 5.5 },
];

const filterProduct = (product: Product, filter: string) =>
    product.name.toLowerCase().includes(filter.toLowerCase());

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    public products = signal(productArray);
    public filterName = signal('');

    private filterFn = (product: Product) =>
        filterProduct(product, this.filterName());

    public filteredProducts = computed(() =>
        this.products().filter(this.filterFn),
    );

    public changeFilter(event: Event) {
        const newFilterName = (event.target as HTMLInputElement).value;
        this.filterName.set(newFilterName);
    }
}
