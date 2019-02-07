import { Component, OnInit,ChangeDetectionStrategy, AfterViewInit, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { OrganizationPlanComponent } from './organization.plan.component';
import { ModalComponent} from '../modal/modal.component';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-organization',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit,AfterViewInit {
  
  showMessages: any = {};
  submitted: boolean = false;
  errors: string[] = [];
  messages: string[] = [];
  form: FormGroup;
  org: any = {};
  modalHeader: string;
  constructor(private modalService:NgbModal,private activeModal: NgbActiveModal) {
    this.showMessages = this.getConfigValue('forms.register.showMessages'); }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
   
  }
  closeModal() {
    this.activeModal.close();
  }
  onSubmit(){
    if (this.form.valid){
      return '';
    }
  }
  getConfigValue(key: string): any {
    return "" ;
  }
  showLargeModal3() {
    this.closeModal();
    const activeModal = this.modalService.open(OrganizationPlanComponent, { size: 'lg', container: 'nb-layout',backdrop: 'static' });

    activeModal.componentInstance.modalHeader = 'Yonney Chatbot';
  }
  
}
