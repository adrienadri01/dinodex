import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { DinosaureService } from './services/dinosaure.service';
import { DinosaureComponent } from './dinosaure.component';
import { DinosaureListComponent } from './pages/dinosaure-list/dinosaure-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { DinosaureAddFormComponent } from './pages/dinosaure-add-form/dinosaure-add-form.component';
import { DinosaureUpdateFormComponent } from './pages/dinosaure-update-form/dinosaure-update-form.component';
import { DinosaureTabComponent } from './pages/dinosaure-tab/dinosaure-tab.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [DinosaureComponent, DinosaureListComponent, DinosaureAddFormComponent, DinosaureUpdateFormComponent, DinosaureTabComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
  ],
  exports: [
    DinosaureComponent,
    DinosaureListComponent,
    DinosaureAddFormComponent,
    DinosaureUpdateFormComponent,
    DinosaureTabComponent
  ],
  providers: [
    DinosaureService
  ]
})
export class DinosaureModule { }
