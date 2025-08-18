import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-cart-view',
    templateUrl: './cart-view.component.html',
    styleUrls: ['./cart-view.component.css'],
})
export class CartViewComponent implements OnInit {
    public cartItems: Product[] = [];
    public totalPrice: number = 0;
    public currency: string = 'GBP';

    constructor(private cartService: CartService) {}

    public ngOnInit(): void {
        this.cartService.getCartItems().subscribe((data) => {
            this.cartItems = data;
            this.totalPrice = this.getTotalPrice();
        });
    }

    public getTotalPrice(): number {
        return this.cartItems.reduce((sum, item) => sum + item.price, 0);
    }
}
