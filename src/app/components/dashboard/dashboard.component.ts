import { Component, Inject, OnInit, ChangeDetectionStrategy, ViewChild, Output, EventEmitter } from '@angular/core';
import { NbSidebarService, NbMenuService, NB_WINDOW } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';
//used for smart table imports ---->
import { LocalDataSource } from '../../ng2-smart-table';
import { SmartTableService } from '../../smart-table.service';

//----> modal imports are present here
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from '../modal/modal.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { Router, NavigationEnd } from '@angular/router';

import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import { FormGroup } from '@angular/forms';
import { OrganizationComponent } from '../organization/organization.component';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss',
    '.././icon-style.scss',
    './menu.component.scss'
  ]
})
export class DashBoardComponent implements OnInit {
  // for the nb menu at top right corner
    isActive: boolean = false;
    collapsed: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';

    showMenu1: string = '';
    @Output() collapsedEvent = new EventEmitter<boolean>();
    
  item = [
    { title: 'Profile' },
    { title: 'Logout', link: ['/profile'] },
  ];

  showMessages: any = {};
  submitted: boolean = false;
  errors: string[] = [];
  messages: string[] = [];
  form: FormGroup;
  org: any = {};
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService,
    private sidebarService: NbSidebarService,
    private nbMenuService: NbMenuService,
    @Inject(NB_WINDOW) private window,
    private modalService: NgbModal, private router:Router,
    iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {

      this.showMessages = this.getConfigValue('forms.register.showMessages'); 
    const data = this.service.getData();
    this.source.load(data);

    //for materila icons'
    iconRegistry.addSvgIcon(
      'gear',
      sanitizer.bypassSecurityTrustResourceUrl('assets/nb-gear.svg'));

    //sidebar menu
    this.router.events.subscribe(val => {
      if (
          val instanceof NavigationEnd &&
          window.innerWidth <= 992 &&
          this.isToggled()
      ) {
          this.toggleSidebar();
        }
  });
}
onSubmit(){
  if (this.form.valid){
    return '';
  }
}
getConfigValue(key: string): any {
  return "" ;
}

eventCalled() {
  this.isActive = !this.isActive;
}


toggleCollapsed() {
  this.collapsed = !this.collapsed;
  this.collapsedEvent.emit(this.collapsed);
}

isToggled(): boolean {
  const dom: Element = document.querySelector('body');
  return dom.classList.contains(this.pushRightClass);
}

toggleSidebar() {
  const dom: any = document.querySelector('body');
  dom.classList.toggle(this.pushRightClass);
}
  
  //--> this is used for deleting the row in SmartTable
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  

 // used in dashboard to toggle the sidebar Menu
  toggle() {
    this.sidebarService.toggle(false, 'left');
  }
  
  ngOnInit() {
    this.showLargeModal();
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
    )
      .subscribe(title => this.window.alert(`${title} was clicked!`))

  }
  addExpandClass(element: any) {
    if (element === this.showMenu) {
        this.showMenu = '0';
    } else {
        this.showMenu = element;
    }
}
 
  //------->
  showLargeModal() {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'Yonney Chatbot';
  }
  

  showStaticModal() {
    const activeModal = this.modalService.open(ModalComponent, {
      size: 'sm',
      backdrop: 'static',
      container: 'nb-layout',
    });

    activeModal.componentInstance.modalHeader = 'Static modal';
    activeModal.componentInstance.modalContent = `This is static modal, backdrop click
                                                    will not close it. Click × or confirmation button to close modal.`;
  }
}
 




