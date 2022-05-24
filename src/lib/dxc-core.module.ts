/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { NgModule, ModuleWithProviders } from '@angular/core';

import { MessageService } from './services/message.service';
import { DialogsService } from './services/dialog.service';
import { MaterialModule } from './material.module';
import { AngularModule } from './angular.module';

import { DxcHeaderComponent } from './components/dxc-header/dxc-header.component';
import {
  DxcAppLayoutComponent,
  DxcAppContentComponent,
  DxcAppLeftContentComponent,
  DxcAppRightContentComponent,
  DxcAppCenterContentComponent,
  DxcAppTopContentComponent,
  DxcFixedTopContentComponent
} from './components/dxc-app-layout/dxc-app-layout.component';
import {
  DxcSessionComponent,
  DxcSessionControlsComponent,
  DxcSessionContentComponent
} from './components/dxc-session/dxc-session.component';
import { DxcNavigationComponent } from './components/dxc-navigation/dxc-navigation.component';
import { DxcClassSelectorComponent } from './components/dxc-class-selector/dxc-class-selector.component';
import { DxcAlertMessageComponent } from './components/dxc-alert-message/dxc-alert-message.component';
import { DxcChipsComponent } from './components/custom-fields/dxc-chips/dxc-chips.component';
import { DxcChipAutocompleteComponent } from './components/custom-fields/dxc-chip-autocomplete/dxc-chip-autocomplete.component';
import { DxcChipErrorComponent } from './components/custom-fields/dxc-chip-autocomplete/dxc-chip-error.component';
import { DxcConfirmDialogComponent } from './components/dxc-confirm-dialog/dxc-confirm-dialog.component';
import { DxcTabNavBarComponent } from './components/dxc-tab-nav-bar/dxc-tab-nav-bar.component';
import { ValidationFormatterDirective } from './directives/validation-formatter.directive';
import { RegExValidatorDirective } from './directives/regex-validator-directive';

// import 'styles.scss'
import { ObservablePipe } from './components/observable.pipe';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [AngularModule, MaterialModule],
  declarations: [
    DxcAlertMessageComponent,
    DxcAppLayoutComponent,
    DxcAppContentComponent,
    DxcAppLeftContentComponent,
    DxcAppRightContentComponent,
    DxcAppCenterContentComponent,
    DxcFixedTopContentComponent,
    DxcAppTopContentComponent,
    DxcHeaderComponent,
    DxcSessionComponent,
    DxcSessionControlsComponent,
    DxcSessionContentComponent,
    DxcNavigationComponent,
    DxcClassSelectorComponent,
    DxcChipsComponent,
    DxcChipAutocompleteComponent,
    DxcChipErrorComponent,
    DxcTabNavBarComponent,
    DxcConfirmDialogComponent,
    ValidationFormatterDirective,
    RegExValidatorDirective,
    ObservablePipe
  ],
  exports: [
    AngularModule,
    MaterialModule,
    DxcAlertMessageComponent,
    DxcAppLayoutComponent,
    DxcAppLeftContentComponent,
    DxcAppRightContentComponent,
    DxcAppCenterContentComponent,
    DxcFixedTopContentComponent,
    DxcAppTopContentComponent,
    DxcAppContentComponent,
    DxcHeaderComponent,
    DxcSessionComponent,
    DxcSessionControlsComponent,
    DxcSessionContentComponent,
    DxcNavigationComponent,
    DxcClassSelectorComponent,
    DxcChipsComponent,
    DxcChipAutocompleteComponent,
    DxcChipErrorComponent,
    DxcTabNavBarComponent,
    DxcConfirmDialogComponent,
    ValidationFormatterDirective,
    RegExValidatorDirective,
    ObservablePipe
  ],
  providers: [],
  entryComponents: [DxcConfirmDialogComponent]
  //schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DxcCoreModule {}
