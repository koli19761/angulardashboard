import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modal',
  template: `
  <div class="modal-header">
    Onboarding Success
    
  </div>
  <div class="modal-body">
    Organization Registration Successfull! <br>
    Now, Please Register your Agents !
    
  </div>
  <div class="modal-footer">
    <button class="btn btn-md btn-primary" (click)="closeModal()" >Continue</button>
  </div>
  `,
  
})

export class ModalSuccessComponent  {


  constructor(private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }

  
  

}

