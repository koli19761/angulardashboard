import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { DashBoardComponent} from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestPasswordComponent } from './components/request-password/request-password.component';
import { OrganizationComponent } from './components/organization/organization.component';
import { OrganizationPlanComponent } from './components/organization/organization.plan.component';
import { OrganizationPaymentComponent } from './components/organization/organization.payment.component';
import { OrganizationVerifyComponent } from './components/organization/organization.verify.component';

export const ROUTES: Routes = [
  {
    path: '', component: ProfileComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'dashboard', component: DashBoardComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path:'request-password', component: RequestPasswordComponent
  },
  // {
  //   path:'onboard',component: OrganizationComponent
  // },
  {
    path:'onboard-plan',component: OrganizationPlanComponent
  },
  {
    path:'onboard-payment',component: OrganizationPaymentComponent
  },
  {
    path:'onboard-verify',component: OrganizationVerifyComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
