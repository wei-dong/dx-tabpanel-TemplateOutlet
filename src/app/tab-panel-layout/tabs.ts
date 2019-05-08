import {
  AfterContentInit,
  Component,
  ContentChildren,
  Inject,
  QueryList,
  Input,
  OnDestroy,
  HostBinding,
  ViewContainerRef,
  ViewChild
} from '@angular/core';
import { TabContent } from './tab-content';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.html'
})
export class Tabs implements AfterContentInit {
  constructor() {}
  TabInfo = [];
  @ContentChildren(TabContent) tabs: QueryList<TabContent>;
  ngAfterContentInit(): void {
    console.log(this.tabs);
    this.TabInfo = this.tabs.map(tab => ({tabName: tab.tabName}));
  }

  getTemplate(tabName) {
    return this.tabs.find(tab => tab.tabName === tabName).templateRef;
  }
}
