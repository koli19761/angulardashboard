import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
    showMessages: any = {};
    username: string;
    submitted: boolean = false;
    errors: string[] = [];
    messages: string[] = [];
    org: any = {};
    form: any;

  constructor(private route: ActivatedRoute,private authService: AuthService) {
    
    this.showMessages = this.getConfigValue('forms.register.showMessages');
  }

  ngOnInit() {
    this.route.params.subscribe((params) => this.username = params.username);
  }

  onsubmit(): void {
    this.errors = this.messages = [];
    this.submitted = true;
    if(this.submitted) {
      this.authService.register(this.form.value);
    }
    return;
  }

  getConfigValue(key: string): any {
    return "" ;
  }
}
