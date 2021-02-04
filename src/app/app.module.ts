import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shoppingcart/shoppingcart.component';
import { ProductsService } from './products.service';
import { ShoppingcartService } from './shoppingcart.service';
import { ProductQuantityModalComponent } from './product-quantity-modal/product-quantity-modal.component';
import { ConfirmRemoveCartitemModalComponent } from './confirm-remove-cartitem-modal/confirm-remove-cartitem-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ShoppingCartComponent,
    ProductQuantityModalComponent,
    ConfirmRemoveCartitemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductsService, ShoppingcartService],
  bootstrap: [AppComponent],
  entryComponents: [ ProductQuantityModalComponent, ConfirmRemoveCartitemModalComponent ]
})
export class AppModule { }
