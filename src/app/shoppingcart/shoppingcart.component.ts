import { Component, OnInit } from '@angular/core';
import { Shoppingcart } from '../shoppingcart';
import { ShoppingcartService } from '../shoppingcart.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductQuantityModalComponent } from '../product-quantity-modal/product-quantity-modal.component';
import { Product } from '../product';
import { ConfirmRemoveCartitemModalComponent } from '../confirm-remove-cartitem-modal/confirm-remove-cartitem-modal.component';

@Component({
    selector: 'shoppingcart',
    templateUrl: './shoppingcart.component.html',
    styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingCartComponent implements OnInit{
    shoppingcart : Shoppingcart;

    constructor(private shoppingcartService : ShoppingcartService, private modalService: NgbModal) {
        this.shoppingcart = {
            id: "0",
            items: [] 
        };
    }

    ngOnInit() : void {
        this.getShoppingCart();
    }

    getShoppingCart() : void {
        this.shoppingcartService.getCart().subscribe(shoppingCart => this.shoppingcart = shoppingCart);
    }

    updateQuantity(product) {
        const modalRef = this.modalService.open(ProductQuantityModalComponent);
        modalRef.result.then((result) => {
          this.doUpdateQuantity(product, result);
        }, (reason) => {
            
        });
        modalRef.componentInstance.product = product;
    }

    async doUpdateQuantity(product : Product, quantity : number){
        let promise = new Promise((resolve, reject) => {
            this.shoppingcartService.addToCart(product, quantity);
            setTimeout(() => {
                resolve("resolve complete");
            }, 2000);
        });

        let promiseResult = await promise;

        this.getShoppingCart();
    }

    removeFromCart(product){
        const modalRef = this.modalService.open(ConfirmRemoveCartitemModalComponent);
        modalRef.result.then((result) => {
          this.doRemoveFromCart(product);
        }, (reason) => {
            
        });
        modalRef.componentInstance.product = product;
    }

    async doRemoveFromCart(product : Product){
        let promise = new Promise((resolve, reject) => {
            this.shoppingcartService.removeFromCart(product);
            setTimeout(() => {
                resolve("resolve complete");
            }, 2000);
        });

        let promiseResult = await promise;

        this.getShoppingCart();
    }
    
}