import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
})
export class ACTIONBUTTONComponent implements OnInit {
  @Input()
  text: string = '';
  @Input()
  disable: boolean = true;

  constructor() {}

  ngOnInit(): void {}
}
