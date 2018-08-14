import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonControlPanelComponent } from './button-control-panel/button-control-panel.component';
import { TodoComponent } from './todo/todo.component';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';


@NgModule({
  declarations: [
    AppComponent,
    ButtonControlPanelComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    DateInputsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
