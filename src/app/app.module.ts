import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Tabs } from './tabs.component';
import { Tab } from './tab.component';
import { Welcome } from './welcome.component';


@NgModule({
  declarations: [Tab, Tabs, AppComponent, Welcome],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
