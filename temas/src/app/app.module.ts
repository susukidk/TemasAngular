import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemacssComponent } from './temacss/temacss.component';
import { TemahtmlComponent } from './temahtml/temahtml.component';
import { TematsComponent } from './temats/temats.component';

@NgModule({
  declarations: [
    AppComponent,
    TemacssComponent,
    TemahtmlComponent,
    TematsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
