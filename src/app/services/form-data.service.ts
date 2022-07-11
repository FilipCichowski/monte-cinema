import { LoginData } from './../models/login-data';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  loginData!: LoginData;
  constructor() {
    this.loginData = new LoginData();
  }
}