import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ClassificationService } from './services/classification.service';
import { ClassificationComponent } from './classification.component';
import { ClassificationListComponent } from './pages/classification-list/classification-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { ClassificationAddFormComponent } from './pages/classification-add-form/classification-add-form.component';
import { ClassificationUpdateFormComponent } from './pages/classification-update-form/classification-update-form.component';
import { ClassificationTabComponent } from './pages/classification-tab/classification-tab.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [ClassificationComponent, ClassificationListComponent, ClassificationAddFormComponent, ClassificationUpdateFormComponent, ClassificationTabComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  exports: [
    ClassificationComponent,
    ClassificationListComponent,
    ClassificationAddFormComponent,
    ClassificationUpdateFormComponent,
    ClassificationTabComponent
  ],
  providers: [
    ClassificationService
  ]
})
export class ClassificationModule { }
