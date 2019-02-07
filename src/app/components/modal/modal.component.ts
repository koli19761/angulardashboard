import { Component,OnDestroy } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrganizationComponent } from '../organization/organization.component';

@Component({
  selector: 'ngx-modal',
  templateUrl: './modal.component.html'
  
})
export class ModalComponent implements OnDestroy {

  modalHeader: string;

  constructor(private modalService:NgbModal,private activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.close();
  }

  showLargeModal2() {
    this.closeModal();
    const activeModal = this.modalService.open(OrganizationComponent, { size: 'lg', container: 'nb-layout',backdrop: 'static' });

    activeModal.componentInstance.modalHeader = 'Onboarding';
  }
  ngOnDestroy(): void {
    
  }

}
