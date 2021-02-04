import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm-remove-cartitem-modal',
  template: `
<div class="modal-header">
  <h4 class="modal-title" id="modal-title">Profile deletion</h4>
  <button type="button" class="close" aria-describedby="modal-title" (click)="activeModal.dismiss('Cross click')">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
<div class="modal-body">
  <p>Are you sure you want to delete item from cart?</p>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-outline-secondary" (click)="activeModal.dismiss('cancel click')">Cancel</button>
  <button type="button" class="btn btn-danger" (click)="removeProductFromCart()">Ok</button>
</div>`
})
export class ConfirmRemoveCartitemModalComponent implements OnInit {
  @Input() public product;

  constructor(public modal : NgbModal, public activeModal : NgbActiveModal) { }

  ngOnInit(): void {
  }

  removeProductFromCart(){
    this.activeModal.close();
  }

}
