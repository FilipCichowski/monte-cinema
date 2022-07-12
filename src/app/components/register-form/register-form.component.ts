import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  isPolicyChecked: boolean = false;
  isBirthDateValid: boolean = false;
  isRegisterButtonDisabled: boolean = true;
  birthDate: string = '';

  validateBirthDate($event: string): void {
    this.birthDate = $event;
    this.isBirthDateValid = this.getAge(this.birthDate) >= 18;
  }

  setPolicy($event: boolean): void {
    this.isPolicyChecked = $event;
  }

  getAge(dateString: string): number {
    var dateArr = dateString.split('/');
    var today = new Date();
    var birthDate = new Date(dateArr[1] + '/' + dateArr[0] + '/' + dateArr[2]);
    var age: number = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  constructor() {}

  ngOnInit(): void {}
}
