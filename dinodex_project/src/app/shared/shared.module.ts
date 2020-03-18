import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DinodexToolbarComponent } from './components/dinodex-toolbar/dinodex-toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [DinodexToolbarComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    DinodexToolbarComponent
  ]
})
export class SharedModule { }
