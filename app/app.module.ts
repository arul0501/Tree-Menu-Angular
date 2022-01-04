import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Location, LocationStrategy, HashLocationStrategy } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeviewComponent } from './treeview/treeview.component';
import { TreeviewmenuComponent } from './treeviewmenu/treeviewmenu.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TreeviewComponent,
    TreeviewmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    Location,
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
