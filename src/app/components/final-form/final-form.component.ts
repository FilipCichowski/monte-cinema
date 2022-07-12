import { LoginDataService } from './../../services/login-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-form',
  templateUrl: './final-form.component.html',
  styleUrls: ['./final-form.component.scss'],
})
export class FinalFormComponent implements OnInit {
  email: string = '';
  name: string = '';
  constructor(private loginData: LoginDataService) {}

  ngOnInit(): void {
    this.email = this.loginData.getEmail();
    this.name = this.loginData.getName();
  }
}
