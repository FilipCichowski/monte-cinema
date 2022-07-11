import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {
  @Input()
  name: string = '';
  @Input()
  placeholder: string = "";
  @Input()
  passwordButton: boolean = false;

  iconPath: string = "../../../assets/img/eye.svg";

  constructor() {}

  ngOnInit(): void {}
}
