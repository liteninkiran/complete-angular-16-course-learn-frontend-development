import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/cart/cart.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

const snackBarConfig: MatSnackBarConfig<any> = {
    duration: 2000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
};
const snackBarMessage = 'Product added to cart';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    public products: Product[] = [];
    public filteredProducts: Product[] = [];

    constructor(
        private productService: ProductService,
        private cartService: CartService,
        private snackbar: MatSnackBar,
    ) {}

    public ngOnInit(): void {
        this.productService.getProducts().subscribe((data) => {
            this.products = data;
            this.filteredProducts = data;
        });
    }

    public addToCart(product: Product): void {
        this.cartService.addToCart(product).subscribe({
            next: () => {
                this.snackbar.open(snackBarMessage, '', snackBarConfig);
            },
        });
    }

    public applyFilter(event: Event): void {
        const target = event.target as HTMLInputElement;
        const searchTerm = target.value.toLowerCase();
        this.filteredProducts = this.products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm),
        );
    }
}
