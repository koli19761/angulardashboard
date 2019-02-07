import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})
export class RequestPasswordComponent implements OnInit {
  
  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  constructor() {
    this.showMessages = this.getConfigValue('forms.requestPassword.showMessages');
   }
   requestPass(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    return;
  }

  ngOnInit() {   

  }
  getConfigValue(key: string): any {
    return "";
  }

}
