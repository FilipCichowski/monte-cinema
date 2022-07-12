import { LoginDataService } from './../../services/login-data.service';
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
  firstName: string = '';
  lastName: string = '';

  setFirstName($event: string): void {
    this.firstName = $event;
  }

  setLastName($event: string): void {
    this.lastName = $event;
  }

  setBirthDate($event: string): void {
    this.birthDate = $event;
    this.isBirthDateValid = this.getAge(this.birthDate) >= 18;
  }

  setPolicy($event: boolean): void {
    this.isPolicyChecked = $event;
  }

  getAge(dateString: string): number {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age: number = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  setNameInService(): void {
    this.loginData.setName(this.firstName);
  }

  constructor(private loginData: LoginDataService) {}

  ngOnInit(): void {}
}
