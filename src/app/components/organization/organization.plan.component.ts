import { Component, OnInit,ChangeDetectionStrategy, } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrganizationPaymentComponent } from './organization.payment.component';
import { OrganizationComponent } from './organization.component';

@Component({
  selector: 'app-plan',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './organization.plan.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationPlanComponent implements OnInit {
  showMessages: any = {};
  submitted: boolean = false;
  errors: string[] = [];
  messages: string[] = [];
  form: any;
  org: any = {};
  constructor(private modalService:NgbModal,private activeModal:NgbActiveModal) {
    this.showMessages = this.getConfigValue('forms.register.showMessages'); }

  ngOnInit() {
  }
  
    
  
  getConfigValue(key: string): any {
    return "" ;
  }
  
  showLargeModal4() {
    this.activeModal.close();
    const activeModal = this.modalService.open(OrganizationPaymentComponent, { size: 'lg', container: 'nb-layout',backdrop: 'static' });

    activeModal.componentInstance.modalHeader = 'Yonney Chatbot';
  }
}
