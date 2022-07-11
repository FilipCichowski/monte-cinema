import { FormDataService } from './../../services/form-data.service';
import { LoginData } from './../../models/login-data';
import { ValidationProp } from './../../models/validation-prop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.scss'],
})
export class LoginDetailsComponent implements OnInit {
  password: string = '';
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

  validatePassword($event: string) {
    this.password = $event;
    this.passwordProps[0].isRight = this.password.length >= 8;
    this.passwordProps[1].isRight = this.containsAnyLetter(this.password);
    this.passwordProps[2].isRight = this.containsAnyNumber(this.password);
    console.log(this.passwordProps);
  }

  containsAnyLetter(str: string): boolean {
    return /[a-zA-Z]/.test(str);
  }

  containsAnyNumber(str: string): boolean {
    return /[0-9]/.test(str);
  }

  constructor() {}

  ngOnInit(): void {}
}
