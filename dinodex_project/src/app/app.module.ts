import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// Dinodex modules
import { SharedModule } from './shared/shared.module';
import { ClassificationModule } from './classification/classification.module';
import { DinosaureModule } from './dinosaure/dinosaure.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { DinosaureDialogComponent } from './dinosaure/pages/dinosaure-dialog/dinosaure-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DinosaureDialogComponent
  ],
  entryComponents: [
    DinosaureDialogComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    SharedModule,
    ClassificationModule,
    DinosaureModule,
    MatSidenavModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
