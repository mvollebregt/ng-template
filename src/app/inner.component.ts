import {Component, ContentChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-inner',
  template: `
    <ng-container *ngTemplateOutlet="passedInTemplate; context: {$implicit: 1}"></ng-container>
    <ng-container *ngTemplateOutlet="passedInTemplate; context: {$implicit: 2}"></ng-container>
  `
})
export class InnerComponent {

  @ContentChild(TemplateRef) passedInTemplate: TemplateRef<any>;
}
