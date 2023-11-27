import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomControlComponent } from './custon-control/custom-cntrol.componeny';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, CustomControlComponent],
  bootstrap: [AppComponent],
  providers: [FormBuilder],
})
export class AppModule {}
