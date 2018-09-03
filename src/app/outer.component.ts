import {Component} from '@angular/core';

@Component({
  selector: 'app-outer',
  template: `
<app-inner>
  <ng-template let-number="number">
    Projected content {{number}}
  </ng-template>
</app-inner>`
})
export class OuterComponent {

}
