import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { LoginDetailsComponent } from './components/login-details/login-details.component';
import { FormHeaderComponent } from './components/form-header/form-header.component';
import { ACTIONBUTTONComponent } from './components/action-button/action-button.component';
import { NonActionButtonComponent } from './components/non-action-button/non-action-button.component';


@NgModule({
  declarations: [AppComponent, HeaderComponent, FormFieldComponent, LoginDetailsComponent, FormHeaderComponent, ACTIONBUTTONComponent, NonActionButtonComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
