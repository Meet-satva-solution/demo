import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback/feedback.component';
import { NewUserComponent } from './new-user/new-user.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {
    path: 'new', component: NewUserComponent,
    data: {
      breadcrumb: 'New User',
    }
  },
  {
    path: 'new/:id', component: NewUserComponent,
    data: {
      breadcrumb: 'Edit User',
    }
  },
  {
    path: 'view', component: ViewUserComponent,
    data: {
      breadcrumb: 'View User',
    }
  },
  {
    path: 'feedback', component: FeedbackComponent,
    data: {
      breadcrumb: 'FeedBack Form',
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
