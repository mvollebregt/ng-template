import {Component} from '@angular/core';

@Component({
  selector: 'app-outer',
  template: `    
<app-inner>
  <ng-template>
    Projected content
  </ng-template>
</app-inner>`
})
export class OuterComponent {

}
