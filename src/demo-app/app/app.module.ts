/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { SampleService } from './sample.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {
  NgModule,
  ApplicationRef
} from '@angular/core';

import { RouterModule, PreloadAllModules } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { DxcCoreModule, AceOverlayContainer, ObservablePipe } from 'core-lib';

import '../../styles/styles.scss';
import { OverlayContainer } from '@angular/cdk/overlay';
import { PopupDialogComponent } from './home/popup-dialog.component';

import { MessageService, DialogsService } from 'core-lib';
import { HttpClientModule } from '@angular/common/http';
import { RulereportComponent } from './rulereport'

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    HomeComponent,
    RulereportComponent,
    PopupDialogComponent
  ],
  entryComponents: [PopupDialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    HttpClientModule,
    DxcCoreModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules,
      onSameUrlNavigation: 'reload'
    })
  ],
  providers: [
    ENV_PROVIDERS,
    MessageService,
    DialogsService,
    SampleService
  ]
})
export class AppModule {

  constructor(
    public appRef: ApplicationRef,
  ) {}
}
