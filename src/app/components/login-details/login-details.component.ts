import { LoginDataService } from './../../services/login-data.service';
import { ValidationProp } from './../../models/validation-prop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.scss'],
})
export class LoginDetailsComponent implements OnInit {
  password: string = '';
  email: string = '';
  passwordProps: ValidationProp[] = [
    {
      prop: 'At least 8 characters',
      isRight: false,
    },
    {
      prop: 'At least one letter',
      isRight: false,
    },
    {
      prop: 'At least one digit',
      isRight: false,
    },
  ];

  setEmail($event: string): void {
    this.email = $event;
  }

  setPasswordAndProps($event: string): void {
    this.password = $event;
    this.passwordProps[0].isRight = this.password.length >= 8;
    this.passwordProps[1].isRight = this.containsAnyLetter(this.password);
    this.passwordProps[2].isRight = this.containsAnyNumber(this.password);
  }

  containsAnyLetter(str: string): boolean {
    return /[a-zA-Z]/.test(str);
  }

  containsAnyNumber(str: string): boolean {
    return /[0-9]/.test(str);
  }

  isEmailValid(): boolean {
    let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return res.test(this.email);
  }

  isPasswordValid(): boolean {
    let isValid: boolean = true;
    for (let e of this.passwordProps) {
      if (!e.isRight) {
        isValid = false;
      }
    }
    return isValid;
  }

  setEmailInService(): void {
    this.loginData.setEmail(this.email);
  }

  constructor(private loginData: LoginDataService) {}

  ngOnInit(): void {}
}
