import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-non-action-button',
  templateUrl: './non-action-button.component.html',
  styleUrls: ['./non-action-button.component.scss'],
})
export class NonActionButtonComponent implements OnInit {
  @Input()
  text: string = '';

  constructor() {}

  ngOnInit(): void {}
}
