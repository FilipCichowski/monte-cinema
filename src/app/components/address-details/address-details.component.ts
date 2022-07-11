import { Component, OnInit } from '@angular/core';
import { AddressDetails } from 'src/app/models/address-details';
import { FormDataService } from 'src/app/services/form-data.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
})
export class AddressDetailsComponent implements OnInit {
  addressDetails: AddressDetails;
  constructor(private formDataService: FormDataService) {
    this.addressDetails = formDataService.addressDetails;
  }
  ngOnInit() {}
}