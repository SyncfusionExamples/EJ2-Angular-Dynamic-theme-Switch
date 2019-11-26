import { Component, OnInit, ViewChild } from '@angular/core';
import { Popup } from '@syncfusion/ej2-popups';
import { data } from './datasource';
import { select, selectAll, Ajax, isVisible, classList, closest } from '@syncfusion/ej2-base';
import { DropDownList, DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';
let themes: string[] = ['material', 'fabric', 'bootstrap'];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild('sample')
  public listObj: DropDownListComponent;
  // define the JSON of data
  public data1: Object[] = [
    { Id: 'material', Theme: 'material' },
    { Id: 'fabric', Theme: 'fabric' },
    { Id: 'bootstrap', Theme: 'bootstrap' }

  ];
  public fields: Object = { text: 'Theme', value: 'Id' };
  public themePopup: Popup;
  public settingsPopup: Popup;
  public switcherPopup: Popup;
  public themeDropDown: DropDownList;
  public isMobile: boolean;

  renderSBPopup() {
    this.themePopup = new Popup(document.getElementById('theme-switcher-popup'), {
      offsetY: 2,
      relateTo: <HTMLElement>document.querySelector('.theme-wrapper'), position: { X: 'left', Y: 'bottom' },
      collision: { X: 'flip', Y: 'flip' }
    });
    this.themePopup.hide();

  }

  public dataSource: Object[] = data;
  public title = 'Average Sales Comparison';
  constructor() {


  }

  public data: Object[];
  public pageSettings: Object;

  ngOnInit(): void {
    this.data = data;
    this.pageSettings = { pageSize: 7 };

  }

  onDocClick(e: Event) {
    if (closest(<Element>e.target, '.theme-wrapper') === null && this.themePopup.element.classList.contains('e-popup-open')) {
      this.themePopup.hide();
    }

  }

  public onChange(e: any): void {
    if (e && e.value) {
      debugger
      let ajax: Ajax = new Ajax('assets/styles/' + e.value + '.css', 'GET', true);
      ajax.send().then((result: any) => {
        let styleTag = document.getElementById('theme');
        // styleTag.innerHTML = '';
        styleTag.innerHTML=`/*${e.value}*/` + result;
      });
    }
  }
}