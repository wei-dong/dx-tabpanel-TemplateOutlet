import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  AfterContentInit,
  TemplateRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'app-tab-panel-layout',
  template: `<ng-content></ng-content>`
})
export class TabPanelLayoutComponent {

  constructor() {}
}
