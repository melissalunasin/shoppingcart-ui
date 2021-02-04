import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Shoppingcart } from './shoppingcart';
import { Product } from './product';
import { Shoppingcartitem } from './shoppingcartitem';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-type': 'application/json'
    })
};

const cartUrl = 'http://localhost:8080/cart/601b55f5114bc23963ab6177';

@Injectable({providedIn: 'root'})
export class ShoppingcartService {

    constructor(private http: HttpClient) { }

    getCart(): Observable<Shoppingcart> {
        return this.http.get<Shoppingcart>(cartUrl);
    }

    updateCart(cart : Shoppingcart) {
        return this.http.put<Shoppingcart>(cartUrl, cart, httpOptions);
    }

    addToCart(product: Product, quantity: number) : void {
        this.getCart().subscribe(
            shoppingCart => {
                var cart = shoppingCart

                var existingItem : Shoppingcartitem = cart.items.find(element => element.product.id == product.id);

                if(existingItem !== undefined){
                    existingItem.quantity = +existingItem.quantity + +quantity;
                }else{
                    var newItem = {
                        product : product,
                        quantity : +quantity
                    };
                    cart.items.push(newItem);
                }

                this.updateCart(cart).subscribe();
            }
        );
    }

    removeFromCart(product: Product) : void {
        this.getCart().subscribe(
            shoppingCart => {
                var cart = shoppingCart

                cart.items = cart.items.filter(element => element.product.id !== product.id);

                this.updateCart(cart).subscribe();
            }
        );
    }
}