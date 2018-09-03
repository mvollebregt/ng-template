import {Puppy} from './puppy';
import {Component, Input} from '@angular/core';

@Component({
  selector: 'puppy-list',
  template: `
  <mat-list>
    <mat-list-item *ngFor="let puppy of puppies">
      <img mat-list-avatar="" [src]="puppy.photo" alt="...">
      <h3 mat-line> {{puppy.name}} </h3>
      <p mat-line>
        <span>Age: {{puppy.age}} </span>
        <span>Breed: {{puppy.breed}} </span>
      </p>
    </mat-list-item>
  </mat-list>
  `
})
export class PuppyListComponent {
  @Input() puppies: Puppy[];
}
