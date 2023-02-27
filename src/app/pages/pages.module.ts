import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FeedbackComponent } from './feedback/feedback.component';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzSpinModule } from 'ng-zorro-antd/spin';


@NgModule({
  declarations: [
    NewUserComponent,
    ViewUserComponent,
    FeedbackComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    NzCardModule,
    NzGridModule,
    NzFormModule,
    NzInputModule,
    NzSelectModule,
    NzCheckboxModule,
    NzButtonModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzDatePickerModule,
    NzRadioModule,
    NzLayoutModule,
    NzPopconfirmModule,
    NzBadgeModule,
    NzToolTipModule,
    NzAutocompleteModule,
    NzRateModule,
    NzSpinModule
  ]
})
export class PagesModule { }
