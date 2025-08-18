import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    private apiCartUrl = environment.apiUrl + '/cart';
    private apiCheckoutUrl = environment.apiUrl + '/checkout';

    constructor(private http: HttpClient) {}

    public addToCart(product: Product): Observable<Product> {
        return this.http.post<Product>(this.apiCartUrl, product);
    }

    public getCartItems(): Observable<Product[]> {
        return this.http.get<Product[]>(this.apiCartUrl);
    }

    public clearCart(): Observable<void> {
        return this.http.delete<void>(this.apiCartUrl);
    }
}
