import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { toDoList } from '../toDoList/toDoList.component';

import { Services } from '../services/services';

@NgModule({
  declarations: [
    AppComponent,
    toDoList
  ],
  imports: [
    BrowserModule
  ],
  providers: [Services],
  bootstrap: [AppComponent]
})
export class AppModule { }
