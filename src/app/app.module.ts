import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {
  DxTabPanelModule,
  DxCheckBoxModule,
  DxTemplateModule
} from 'devextreme-angular';

import { TabPanelLayoutComponent } from './tab-panel-layout/tab-panel-layout.component';
import { TabContent } from './tab-panel-layout/tab-content';
import { Tabs } from './tab-panel-layout/tabs';
import { LOTComponent } from './lot/lot.component';

@NgModule({
  declarations: [AppComponent, TabContent, TabPanelLayoutComponent, Tabs, LOTComponent],
  imports: [
    BrowserModule,
    DxTabPanelModule,
    DxCheckBoxModule,
    DxTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
