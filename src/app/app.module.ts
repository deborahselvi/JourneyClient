import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey : 'AIzaSyA3r_U0hNYSEQR_lrYnFwUUOeV2amcb4XA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
