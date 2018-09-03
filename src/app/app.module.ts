import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {PuppyListComponent} from './puppy-list.component';
import {PuppiesComponent} from './puppies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material';


@NgModule({
  declarations: [
    PuppyListComponent,
    PuppiesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule
  ],
  providers: [],
  bootstrap:
    [PuppiesComponent]
})

export class AppModule {
}
