/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { NgModule } from '@angular/core';

import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSliderModule} from '@angular/material/slider';
import {ErrorStateMatcher, MatRippleModule, ShowOnDirtyErrorStateMatcher} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSortModule} from '@angular/material/sort';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule } from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PortalModule} from '@angular/cdk/portal';
import {PlatformModule} from '@angular/cdk/platform';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {OverlayContainer} from '@angular/cdk/overlay';
import {AceOverlayContainer} from './services/ace-overlay-container';

export function overlayFactory() {
    return new AceOverlayContainer(document, null);
}

@NgModule({
    imports: [
        A11yModule,
        BidiModule,
        ScrollingModule ,
        CdkStepperModule,
        CdkTableModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSortModule,
        MatDatepickerModule,
        MatChipsModule,
        MatRadioModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatExpansionModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatGridListModule,
        MatListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatStepperModule,
        MatTabsModule,
        FlexLayoutModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule,
    ],
    exports: [
        A11yModule,
        BidiModule,
        ScrollingModule,
        CdkStepperModule,
        CdkTableModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSortModule,
        MatDatepickerModule,
        MatChipsModule,
        MatRadioModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatExpansionModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatGridListModule,
        MatListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatStepperModule,
        MatTabsModule,
        FlexLayoutModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule,
    ],
    providers: [
        { provide: OverlayContainer, useFactory: overlayFactory },
        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
    ]
})
export class MaterialModule { }
