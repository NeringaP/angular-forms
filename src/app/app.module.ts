import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TdTaskComponent } from './td-task/td-task.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ReactiveTaskComponent } from './reactive/reactive-task/reactive-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TdTaskComponent,
    ReactiveComponent,
    ReactiveTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
