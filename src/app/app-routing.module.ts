import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  {
    path: 'dashboard', pathMatch: 'full', component: DefaultComponent,
    data: {
      breadcrumb: 'Home',
    }
  },
  {
    path: 'user', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    data: {
      breadcrumb: 'User',
    } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
