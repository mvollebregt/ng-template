import {Component} from '@angular/core';

@Component({
  selector: 'puppies-cmp',
  template: `
    <puppy-list [puppies]="puppies"></puppy-list>
  `
})
export class PuppiesComponent {
  puppies = [
    { name: 'Dino', age: 1, photo: '...', breed: 'Rottweiler' },
    { name: 'Max', age: 2, photo: '...', breed: 'Beagle' },
    { name: 'Lucy', age: 1, photo: '...', breed: 'Golden Retriever' }
  ];
}
