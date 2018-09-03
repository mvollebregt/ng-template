import {Puppy} from './puppy';
import {Component, ContentChild, Input, TemplateRef} from '@angular/core';
import {NgForOfContext} from '@angular/common';

@Component({
  selector: 'puppy-list',
  template: `
  <mat-list>
    <ng-template ngFor let-puppy [ngForOf]="puppies" [ngForTemplate]="puppyTemplate">
    </ng-template>
  </mat-list>
  `
})
export class PuppyListComponent {
  @Input() puppies: Puppy[];
  @ContentChild(TemplateRef) puppyTemplate: TemplateRef<NgForOfContext<Puppy>>;
}
