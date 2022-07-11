import { Injectable } from '@angular/core';
import { AddressDetails } from '../models/address-details';
import { PersonalDetails } from '../models/personal-details';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  personalDetails: PersonalDetails;
  addressDetails: AddressDetails;
  constructor() {
    this.personalDetails = new PersonalDetails();
    this.addressDetails = new AddressDetails();
  }
}