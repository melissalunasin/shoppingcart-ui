import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-quantity-modal',
  templateUrl: './product-quantity-modal.component.html',
  styleUrls: ['./product-quantity-modal.component.css']
})
export class ProductQuantityModalComponent implements OnInit {
  @Input() public product;
  @Input() public quantity;

  constructor(public modal : NgbModal, public activeModal : NgbActiveModal) { }

  ngOnInit(): void {}

  returnQuantity() {
    this.activeModal.close(this.quantity);
  }

}
