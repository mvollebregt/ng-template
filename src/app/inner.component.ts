import {Component, ContentChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-inner',
  template: `
    <ng-container *ngTemplateOutlet="passedInTemplate"></ng-container>
    <ng-container *ngTemplateOutlet="passedInTemplate"></ng-container>
  `
})
export class InnerComponent {

  @ContentChild(TemplateRef) passedInTemplate: TemplateRef<any>;
}
