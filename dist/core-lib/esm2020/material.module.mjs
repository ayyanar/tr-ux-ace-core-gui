/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { ErrorStateMatcher, MatRippleModule, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PortalModule } from '@angular/cdk/portal';
import { PlatformModule } from '@angular/cdk/platform';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AceOverlayContainer } from './services/ace-overlay-container';
import * as i0 from "@angular/core";
export function overlayFactory() {
    return new AceOverlayContainer(document, null);
}
export class MaterialModule {
}
MaterialModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MaterialModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MaterialModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MaterialModule, imports: [A11yModule,
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
        PortalModule], exports: [A11yModule,
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
        PortalModule] });
MaterialModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MaterialModule, providers: [
        { provide: OverlayContainer, useFactory: overlayFactory },
        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
    ], imports: [[
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
        ], A11yModule,
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
        PortalModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MaterialModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9tYXRlcmlhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLDRCQUE0QixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDeEcsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDNUUsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFN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YUFBYTt3QkFDYixjQUFjO3dCQUNkLFlBQVk7cUJBQ2Y7b0JBQ0QsU0FBUyxFQUFFO3dCQUNQLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUU7d0JBQ3pELEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBRTtxQkFDekU7aUJBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVW5wdWJsaXNoZWQgd29yayDCqSAyMDE5IERYQyBUZWNobm9sb2d5IENvbXBhbnkuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVXNlLCBkdXBsaWNhdGlvbiwgYW5kL29yIGFsdGVyYXRpb24gaXMgc3ViamVjdCB0byBsaWNlbnNlIHRlcm1zLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQge01hdFRhYnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuaW1wb3J0IHtNYXRTdGVwcGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zdGVwcGVyJztcbmltcG9ydCB7TWF0U25hY2tCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQge01hdFNsaWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcbmltcG9ydCB7RXJyb3JTdGF0ZU1hdGNoZXIsIE1hdFJpcHBsZU1vZHVsZSwgU2hvd09uRGlydHlFcnJvclN0YXRlTWF0Y2hlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdFByb2dyZXNzU3Bpbm5lck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcbmltcG9ydCB7TWF0R3JpZExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2dyaWQtbGlzdCc7XG5pbXBvcnQge01hdFBhZ2luYXRvck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge01hdERpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7TWF0RXhwYW5zaW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb24nO1xuaW1wb3J0IHtNYXRUb29sYmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcbmltcG9ydCB7TWF0U2lkZW5hdk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5pbXBvcnQge01hdE1lbnVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHtNYXRCdXR0b25Ub2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuaW1wb3J0IHtNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtNYXRTb3J0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0U2xpZGVUb2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlLXRvZ2dsZSc7XG5pbXBvcnQge01hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5pbXBvcnQge01hdENoaXBzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQge01hdEZvcm1GaWVsZCwgTWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7QTExeU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHtCaWRpTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1Njcm9sbGluZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5pbXBvcnQge0Nka1N0ZXBwZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9zdGVwcGVyJztcbmltcG9ydCB7Q2RrVGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5pbXBvcnQge0ZsZXhMYXlvdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcbmltcG9ydCB7UG9ydGFsTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7UGxhdGZvcm1Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQge09ic2VydmVyc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL29ic2VydmVycyc7XG5pbXBvcnQge092ZXJsYXlNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7T3ZlcmxheUNvbnRhaW5lcn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtBY2VPdmVybGF5Q29udGFpbmVyfSBmcm9tICcuL3NlcnZpY2VzL2FjZS1vdmVybGF5LWNvbnRhaW5lcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBvdmVybGF5RmFjdG9yeSgpIHtcbiAgICByZXR1cm4gbmV3IEFjZU92ZXJsYXlDb250YWluZXIoZG9jdW1lbnQsIG51bGwpO1xufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQTExeU1vZHVsZSxcbiAgICAgICAgQmlkaU1vZHVsZSxcbiAgICAgICAgU2Nyb2xsaW5nTW9kdWxlICxcbiAgICAgICAgQ2RrU3RlcHBlck1vZHVsZSxcbiAgICAgICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICAgICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICAgICAgTWF0U29ydE1vZHVsZSxcbiAgICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgICAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgICAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICAgICAgTWF0TWVudU1vZHVsZSxcbiAgICAgICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICAgICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgICAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgICAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICAgICAgTWF0TGlzdE1vZHVsZSxcbiAgICAgICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICAgICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgICAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgICAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgICAgICBNYXRUYWJzTW9kdWxlLFxuICAgICAgICBGbGV4TGF5b3V0TW9kdWxlLFxuICAgICAgICBPYnNlcnZlcnNNb2R1bGUsXG4gICAgICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgICAgIFBsYXRmb3JtTW9kdWxlLFxuICAgICAgICBQb3J0YWxNb2R1bGUsXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIEExMXlNb2R1bGUsXG4gICAgICAgIEJpZGlNb2R1bGUsXG4gICAgICAgIFNjcm9sbGluZ01vZHVsZSxcbiAgICAgICAgQ2RrU3RlcHBlck1vZHVsZSxcbiAgICAgICAgQ2RrVGFibGVNb2R1bGUsXG4gICAgICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICAgICAgTWF0Q2hlY2tib3hNb2R1bGUsXG4gICAgICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICAgICAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gICAgICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICAgICAgTWF0SWNvbk1vZHVsZSxcbiAgICAgICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgICAgIE1hdFNlbGVjdE1vZHVsZSxcbiAgICAgICAgTWF0U29ydE1vZHVsZSxcbiAgICAgICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICAgICAgTWF0Q2hpcHNNb2R1bGUsXG4gICAgICAgIE1hdFJhZGlvTW9kdWxlLFxuICAgICAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgICAgICBNYXRCdXR0b25Ub2dnbGVNb2R1bGUsXG4gICAgICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcbiAgICAgICAgTWF0RGlhbG9nTW9kdWxlLFxuICAgICAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICAgICAgTWF0TWVudU1vZHVsZSxcbiAgICAgICAgTWF0U2lkZW5hdk1vZHVsZSxcbiAgICAgICAgTWF0VG9vbGJhck1vZHVsZSxcbiAgICAgICAgTWF0Q2FyZE1vZHVsZSxcbiAgICAgICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgICAgICBNYXRUb29sdGlwTW9kdWxlLFxuICAgICAgICBNYXRHcmlkTGlzdE1vZHVsZSxcbiAgICAgICAgTWF0TGlzdE1vZHVsZSxcbiAgICAgICAgTWF0UHJvZ3Jlc3NCYXJNb2R1bGUsXG4gICAgICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICAgICAgTWF0UmlwcGxlTW9kdWxlLFxuICAgICAgICBNYXRTbGlkZXJNb2R1bGUsXG4gICAgICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICAgICAgICBNYXRTdGVwcGVyTW9kdWxlLFxuICAgICAgICBNYXRUYWJzTW9kdWxlLFxuICAgICAgICBGbGV4TGF5b3V0TW9kdWxlLFxuICAgICAgICBPYnNlcnZlcnNNb2R1bGUsXG4gICAgICAgIE92ZXJsYXlNb2R1bGUsXG4gICAgICAgIFBsYXRmb3JtTW9kdWxlLFxuICAgICAgICBQb3J0YWxNb2R1bGUsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBPdmVybGF5Q29udGFpbmVyLCB1c2VGYWN0b3J5OiBvdmVybGF5RmFjdG9yeSB9LFxuICAgICAgICB7IHByb3ZpZGU6IEVycm9yU3RhdGVNYXRjaGVyLCB1c2VDbGFzczogU2hvd09uRGlydHlFcnJvclN0YXRlTWF0Y2hlciB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbE1vZHVsZSB7IH1cbiJdfQ==