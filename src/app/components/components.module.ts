import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NbLayoutModule,
  NbSidebarModule,
  NbUserModule,
  NbActionsModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarService,
  NbMenuService,
  NbTabsetModule
} from '@nebular/theme';

import { RequestPasswordComponent } from './request-password/request-password.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from '../auth/auth.service';
import { RouterModule } from '@angular/router';
import { DashBoardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from '../ng2-smart-table/ng2-smart-table.module';
import { SmartTableService } from '../smart-table.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';

//modules fof translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { OrganizationComponent } from './organization/organization.component';
import { OrganizationPaymentComponent } from './organization/organization.payment.component';
import { OrganizationPlanComponent } from './organization/organization.plan.component';
import { OrganizationVerifyComponent } from './organization/organization.verify.component';
import { ModalSuccessComponent } from './modal/modal-success.component';
export const createTranslateLoader = (http: HttpClient) => {
  // for development
  /*return new TranslateHttpLoader(
      http,
      '/start-javascript/sb-admin-material/master/dist/assets/i18n/',
      '.json'
  );*/
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    //Nebular Modules are Imported Below
    NbLayoutModule,
    NbSidebarModule,
    NbUserModule,
    NbContextMenuModule,
    NbActionsModule,
    NbCardModule,
    NbCheckboxModule,
    NbMenuModule,
    NbSearchModule,
    NbTabsetModule,
    //imports for modals
    NgbModule.forRoot(),
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
      }
  }),
    
    
    
    
    //Smart Table Module
    Ng2SmartTableModule
  ],
  declarations: [
    ProfileComponent,
    RegisterComponent,
    RequestPasswordComponent,
    DashBoardComponent,
    ModalComponent,
    OrganizationComponent,
    OrganizationPaymentComponent,
    OrganizationPlanComponent,
    OrganizationVerifyComponent,
    ModalSuccessComponent
    
    
    
    
  ],
  providers:[
    AuthService,
    NbSidebarService,
    NbMenuService,
    SmartTableService,
    
  ],
  exports:[
    ProfileComponent,
    RegisterComponent,
    RequestPasswordComponent,
    DashBoardComponent,
    ModalComponent,
    
    
  ],
  entryComponents:[ ModalComponent,
    OrganizationComponent,
    OrganizationPlanComponent,
    OrganizationPaymentComponent,
    OrganizationVerifyComponent,
    ModalSuccessComponent ]
})

export class ComponentsModule { }
