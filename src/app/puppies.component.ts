import {Component} from '@angular/core';

@Component({
  selector: 'puppies-cmp',
  template: `
    <puppy-list [puppies]="puppies">
      <ng-template let-puppy>
        <mat-list-item>
          <img mat-list-avatar="" [src]="puppy.photo" alt="...">
          <h3 mat-line> {{puppy.name}} </h3>
          <p mat-line>
            <span>Age: {{puppy.age}} </span>
            <span>Breed: {{puppy.breed}} </span>
          </p>
        </mat-list-item>
      </ng-template>
    </puppy-list>
  `
})
export class PuppiesComponent {
  puppies = [
    {name: 'Dino', age: 1, photo: '...', breed: 'Rottweiler'},
    {name: 'Max', age: 2, photo: '...', breed: 'Beagle'},
    {name: 'Lucy', age: 1, photo: '...', breed: 'Golden Retriever'}
  ];
}
