import { Component, OnInit,ChangeDetectionStrategy, } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalSuccessComponent } from '../modal/modal-success.component';

@Component({
  selector: 'app-verify',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './organization.verify.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationVerifyComponent implements OnInit {

  showMessages: any = {};
  submitted: boolean = false;
  errors: string[] = [];
  messages: string[] = [];
  form: FormGroup;
  org: any = {};
  constructor(private activemodal:NgbActiveModal,private modalService:NgbModal) {
    this.showMessages = this.getConfigValue('forms.register.showMessages'); }

  ngOnInit() {
  }
  
  onSubmit(){
    if (this.form.valid){
      return '';
    }
  }
  close()
  {
    this.activemodal.close();
  }
  getConfigValue(key: string): any {
    return "" ;
  }
  showLargeModal6() {
    this.close();
    const activeModal = this.modalService.open(ModalSuccessComponent, { size: 'sm', container: 'nb-layout',backdrop: 'static' });

    activeModal.componentInstance.modalHeader = 'Yonney Chatbot';
  }

}
