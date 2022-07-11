import { FinalFormComponent } from './components/final-form/final-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { LoginDetailsComponent } from './components/login-details/login-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LoginDetailsComponent },
  { path: 'register', component: RegisterFormComponent },
  { path: 'final', component: FinalFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
