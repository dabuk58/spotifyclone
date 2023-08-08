import { Component, ViewChild } from '@angular/core';
import { IonDatetimeButton, IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @ViewChild(IonTabs) tabs!: IonTabs;
  selectedTab: any = '';

  constructor() {}

  setSelectedTab(){
    this.selectedTab = this.tabs.getSelected();
    console.log(this.selectedTab);
  }

}
