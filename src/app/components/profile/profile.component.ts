import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'profile-page',
  templateUrl: './profile.component.html',
  styleUrls:[ './profile.component.scss']
})

export class ProfileComponent implements OnInit {
  form: FormGroup;
  username: string;
  errors: string[] = [];
  messages: string[] = [];
  org: any = {};
  submitted: boolean = false;
  showMessages: any = { };

  constructor(private authService: AuthService) {
    this.showMessages = this.getConfigValue('forms.login.showMessages');
  }
  ngOnInit() {
    
  }

  onsubmit(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    if(this.submitted) {
      this.authService.login(this.form.value);
    }
    return;
  }

  getConfigValue(key: string): any {
    return "";
  }

}
