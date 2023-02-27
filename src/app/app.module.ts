import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DefaultComponent } from './default/default.component';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzSliderModule } from 'ng-zorro-antd/slider';



registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    NzNotificationModule,
    NzBreadCrumbModule,
    NzCarouselModule,
    NzImageModule,
    NzSliderModule
   
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
