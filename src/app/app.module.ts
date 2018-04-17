import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SomeChildComponent } from './components/some-child-component/some.child-component';
import { SecondChildComponent } from './components/second-child-component/second.child-component';
import { SomeComponent } from './components/some-component/some.component';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    SomeComponent,
    SomeChildComponent,
    SecondChildComponent,
  ],
  entryComponents: [ SomeChildComponent, SecondChildComponent ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
