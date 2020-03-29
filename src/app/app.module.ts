import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MicroUserFormModule } from 'projects/micro-user-form/src/lib/micro-user-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MicroUserFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
