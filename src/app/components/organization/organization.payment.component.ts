import { Component, OnInit,ChangeDetectionStrategy, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrganizationVerifyComponent } from './organization.verify.component';

@Component({
  selector: 'app-payment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './organization.payment.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationPaymentComponent implements OnInit {

  showMessages: any = {};
  submitted: boolean = false;
  errors: string[] = [];
  messages: string[] = [];
  form: FormGroup;
  org: any = {};
  constructor(private modalService:NgbModal,private activeModal:NgbActiveModal) {
    this.showMessages = this.getConfigValue(''); }

  ngOnInit() {
  }

  onSubmit(){
    if (this.form.valid){
      return '';
    }
  } 
  getConfigValue(key: string): any {
    return "" ;
  }
  closeModal() {
    this.activeModal.close();
  }
  showLargeModal5() {
    this.closeModal();
    const activeModal = this.modalService.open(OrganizationVerifyComponent, { size: 'lg', container: 'nb-layout',backdrop: 'static' });

    activeModal.componentInstance.modalHeader = 'Yonney Chatbot';
  }

}
