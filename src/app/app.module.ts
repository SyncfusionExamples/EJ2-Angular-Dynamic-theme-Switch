import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';
import { AppComponent }  from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  imports:      [ BrowserModule, GridModule, DropDownListAllModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [PageService,
    SortService,
    FilterService,
    GroupService]
})
export class AppModule { }
