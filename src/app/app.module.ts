import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PuppyListComponent} from './puppy-list.component';
import {PuppiesComponent} from './puppies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material';
import {OuterComponent} from './outer.component';
import {InnerComponent} from './inner.component';


@NgModule({
  declarations: [
    PuppyListComponent,
    PuppiesComponent,
    OuterComponent,
    InnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap:
    [OuterComponent]
})

export class AppModule {
}
