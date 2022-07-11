import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressDetailsComponent } from './components/address-details/address-details.component';
import { PersonalDetailsComponent } from './components/personal-details/personal-details.component';

const routes: Routes = [
  { path: '', component: PersonalDetailsComponent },
  { path: 'addressdetails', component: AddressDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
