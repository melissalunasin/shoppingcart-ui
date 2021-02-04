import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../products.service';
import { ShoppingcartService } from '../shoppingcart.service';
import { Productlist } from '../productlist';
import { ProductQuantityModalComponent } from '../product-quantity-modal/product-quantity-modal.component';

@Component({
    selector: 'products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    products : Productlist;

    constructor(private modalService: NgbModal, private productsService: ProductsService, private shoppingcartService : ShoppingcartService) {
      this.products = {
        products : []
      };
    }

    ngOnInit() : void {
      this.getProducts();
    }

    getProducts() : void {
      this.productsService.getProducts()
        .subscribe(products => this.products = products);
    }

    updateQuantity(product) {
      const modalRef = this.modalService.open(ProductQuantityModalComponent);
      modalRef.result.then((result) => {
        this.shoppingcartService.addToCart(product, result);
      }, (reason) => {
      });
      modalRef.componentInstance.product = product;
    }
  
}