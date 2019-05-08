import {
  Component,
  Input,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'tab-content',
  template: `
    <ng-template #tabContentProjectedRef>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class TabContent {
  constructor() {}
  @Input() tabName: string;
  @ViewChild('tabContentProjectedRef') templateRef: TemplateRef<any>;
}
