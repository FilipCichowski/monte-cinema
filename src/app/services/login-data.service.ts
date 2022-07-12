import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginDataService {
  private email: string = '';
  private name: string = '';

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    this.email = email;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  constructor() {}
}
