import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { Assign1Component } from './assign1/assign1.component';
import { Assign2Component } from './assign2/assign2.component';
import { Assign3Component } from './assign3/assign3.component';
import { Assign4Component } from './assign4/assign4.component';
import { MiddleComponent } from './middle/middle.component';
import { BottomComponent } from './bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    Assign1Component,
    Assign2Component,
    Assign3Component,
    Assign4Component,
    MiddleComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
