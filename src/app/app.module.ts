import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TestComponent} from './test/test.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
