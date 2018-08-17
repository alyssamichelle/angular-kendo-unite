import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HourPipe } from './hour.pipe';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonControlPanelComponent } from './button-control-panel/button-control-panel.component';
import { TodoComponent } from './todo/todo.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { KendoDataQueryComponent } from './kendo-data-query/kendo-data-query.component';




@NgModule({
  declarations: [
    AppComponent,
    ButtonControlPanelComponent,
    TodoComponent,
    HourPipe,
    KendoDataQueryComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    DateInputsModule,
    ChartsModule
  ],
  providers: [HourPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
