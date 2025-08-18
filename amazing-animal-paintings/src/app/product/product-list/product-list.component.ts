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

    constructor(
        private productService: ProductService,
        private cartService: CartService,
        private snackbar: MatSnackBar,
    ) {}

    public ngOnInit(): void {
        this.productService.getProducts().subscribe((data) => {
            this.products = data;
        });
    }

    public addToCart(product: Product): void {
        this.cartService.addToCart(product).subscribe({
            next: () => {
                this.snackbar.open(snackBarMessage, '', snackBarConfig);
            },
        });
    }
}
