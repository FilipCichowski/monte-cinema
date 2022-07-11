import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.scss'],
})
export class LoginDetailsComponent implements OnInit {
  passwordProps = [
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

  constructor() {}

  ngOnInit(): void {}
}
