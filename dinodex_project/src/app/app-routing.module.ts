import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassificationListComponent } from './classification/pages/classification-list/classification-list.component';
import { DinosaureListComponent } from './dinosaure/pages/dinosaure-list/dinosaure-list.component';
import { ClassificationAddFormComponent } from './classification/pages/classification-add-form/classification-add-form.component';
import { DinosaureAddFormComponent } from './dinosaure/pages/dinosaure-add-form/dinosaure-add-form.component';
import { ClassificationUpdateFormComponent } from './classification/pages/classification-update-form/classification-update-form.component';
import { DinosaureUpdateFormComponent } from './dinosaure/pages/dinosaure-update-form/dinosaure-update-form.component';
import { DinosaureTabComponent } from './dinosaure/pages/dinosaure-tab/dinosaure-tab.component';
import { ClassificationTabComponent } from './classification/pages/classification-tab/classification-tab.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/classifications',
    pathMatch: 'full'
  },
  {
    path: 'classifications',
    component: ClassificationListComponent,
    children: [
      {
        path: '',
        loadChildren: './classification/classification.module#ClassificationModule'
      }
    ],
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'classification-add',
    component: ClassificationAddFormComponent
  },
  {
    path: 'classification-update/:classificationId',
    component: ClassificationUpdateFormComponent
  },
  {
    path: 'classification-tab',
    component: ClassificationTabComponent
  },
  {
    path: 'classifications/:classificationId',
    component: DinosaureListComponent,
  },
  {
    path: 'dinosaure-add/:classificationId',
    component: DinosaureAddFormComponent
  },
  {
    path: 'dinosaure-update/:dinosaureId',
    component: DinosaureUpdateFormComponent
  },
  {
    path: 'dinosaure-tab/:classificationId',
    component: DinosaureTabComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
