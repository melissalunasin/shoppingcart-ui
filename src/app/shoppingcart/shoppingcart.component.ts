import { Component, OnInit } from '@angular/core';
import { Shoppingcart } from '../shoppingcart';
import { SHOPPINGCART } from '../mock-shoppingcart';
import { Shoppingcartitem } from '../shoppingcartitem';

@Component({
    selector: 'shoppingcart',
    templateUrl: './shoppingcart.component.html',
    styleUrls: ['./shoppingcart.component.css']
})

export class ShoppingCartComponent implements OnInit{
    shoppingcart = SHOPPINGCART;

    constructor() {

    }

    ngOnInit() {
        console.log(this.shoppingcart);
    }

    onSelect(item : Shoppingcartitem): void {
        console.log("item selected" + item);    
    }
}