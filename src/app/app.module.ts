import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CollegeComponent } from './college/college.component';
import { MarketingComponent } from './marketing/marketing.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent,
    MarketingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
