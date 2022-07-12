import { ValidationProp } from './../../models/validation-prop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.scss'],
})
export class LoginDetailsComponent implements OnInit {
  password: string = '';
  disableNextButton: boolean = true;
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

  validatePassword($event: string): void {
    this.password = $event;
    this.passwordProps[0].isRight = this.password.length >= 8;
    this.passwordProps[1].isRight = this.containsAnyLetter(this.password);
    this.passwordProps[2].isRight = this.containsAnyNumber(this.password);
    this.enableButtonOnPassword();
  }

  enableButtonOnPassword(): void {
    let shouldEnableButton: boolean = true;
    for (let e of this.passwordProps) {
      if (!e.isRight) {
        shouldEnableButton = false;
      }
    }
    this.disableNextButton = !shouldEnableButton;
    console.log(this.disableNextButton);
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
