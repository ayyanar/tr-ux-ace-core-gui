/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AngularModule } from './angular.module';
import { DxcHeaderComponent } from './components/dxc-header/dxc-header.component';
import { DxcAppLayoutComponent, DxcAppContentComponent, DxcAppLeftContentComponent, DxcAppRightContentComponent, DxcAppCenterContentComponent, DxcAppTopContentComponent, DxcFixedTopContentComponent } from './components/dxc-app-layout/dxc-app-layout.component';
import { DxcSessionComponent, DxcSessionControlsComponent, DxcSessionContentComponent } from './components/dxc-session/dxc-session.component';
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
import * as i0 from "@angular/core";
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
export class DxcCoreModule {
}
DxcCoreModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcCoreModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DxcCoreModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcCoreModule, declarations: [DxcAlertMessageComponent,
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
        ObservablePipe], imports: [AngularModule, MaterialModule], exports: [AngularModule,
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
        ObservablePipe] });
DxcCoreModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcCoreModule, providers: [], imports: [[AngularModule, MaterialModule], AngularModule,
        MaterialModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcCoreModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHhjLWNvcmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2xpYi9keGMtY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBSTlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDbEYsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixzQkFBc0IsRUFDdEIsMEJBQTBCLEVBQzFCLDJCQUEyQixFQUMzQiw0QkFBNEIsRUFDNUIseUJBQXlCLEVBQ3pCLDJCQUEyQixFQUM1QixNQUFNLHNEQUFzRCxDQUFDO0FBQzlELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIsMkJBQTJCLEVBQzNCLDBCQUEwQixFQUMzQixNQUFNLGdEQUFnRCxDQUFDO0FBQ3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBQzlGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGtGQUFrRixDQUFDO0FBQ2hJLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJFQUEyRSxDQUFDO0FBQ2xILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQy9GLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWpGLHVCQUF1QjtBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBQzlELDBEQUEwRDtBQTBEMUQsTUFBTSxPQUFPLGFBQWE7OzBHQUFiLGFBQWE7MkdBQWIsYUFBYSxpQkFyRHRCLHdCQUF3QjtRQUN4QixxQkFBcUI7UUFDckIsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQiwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQix5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQiwyQkFBMkI7UUFDM0IsMEJBQTBCO1FBQzFCLHNCQUFzQjtRQUN0Qix5QkFBeUI7UUFDekIsaUJBQWlCO1FBQ2pCLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6Qiw0QkFBNEI7UUFDNUIsdUJBQXVCO1FBQ3ZCLGNBQWMsYUF2Qk4sYUFBYSxFQUFFLGNBQWMsYUEwQnJDLGFBQWE7UUFDYixjQUFjO1FBQ2Qsd0JBQXdCO1FBQ3hCLHFCQUFxQjtRQUNyQiwwQkFBMEI7UUFDMUIsMkJBQTJCO1FBQzNCLDRCQUE0QjtRQUM1QiwyQkFBMkI7UUFDM0IseUJBQXlCO1FBQ3pCLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLDJCQUEyQjtRQUMzQiwwQkFBMEI7UUFDMUIsc0JBQXNCO1FBQ3RCLHlCQUF5QjtRQUN6QixpQkFBaUI7UUFDakIsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLDRCQUE0QjtRQUM1Qix1QkFBdUI7UUFDdkIsY0FBYzsyR0FNTCxhQUFhLGFBSmIsRUFBRSxZQW5ESixDQUFDLGFBQWEsRUFBRSxjQUFjLENBQUMsRUEwQnRDLGFBQWE7UUFDYixjQUFjOzJGQTRCTCxhQUFhO2tCQXhEekIsUUFBUTttQkFBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDO29CQUN4QyxZQUFZLEVBQUU7d0JBQ1osd0JBQXdCO3dCQUN4QixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsMEJBQTBCO3dCQUMxQiwyQkFBMkI7d0JBQzNCLDRCQUE0Qjt3QkFDNUIsMkJBQTJCO3dCQUMzQix5QkFBeUI7d0JBQ3pCLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQiwyQkFBMkI7d0JBQzNCLDBCQUEwQjt3QkFDMUIsc0JBQXNCO3dCQUN0Qix5QkFBeUI7d0JBQ3pCLGlCQUFpQjt3QkFDakIsNEJBQTRCO3dCQUM1QixxQkFBcUI7d0JBQ3JCLHFCQUFxQjt3QkFDckIseUJBQXlCO3dCQUN6Qiw0QkFBNEI7d0JBQzVCLHVCQUF1Qjt3QkFDdkIsY0FBYztxQkFDZjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsYUFBYTt3QkFDYixjQUFjO3dCQUNkLHdCQUF3Qjt3QkFDeEIscUJBQXFCO3dCQUNyQiwwQkFBMEI7d0JBQzFCLDJCQUEyQjt3QkFDM0IsNEJBQTRCO3dCQUM1QiwyQkFBMkI7d0JBQzNCLHlCQUF5Qjt3QkFDekIsc0JBQXNCO3dCQUN0QixrQkFBa0I7d0JBQ2xCLG1CQUFtQjt3QkFDbkIsMkJBQTJCO3dCQUMzQiwwQkFBMEI7d0JBQzFCLHNCQUFzQjt3QkFDdEIseUJBQXlCO3dCQUN6QixpQkFBaUI7d0JBQ2pCLDRCQUE0Qjt3QkFDNUIscUJBQXFCO3dCQUNyQixxQkFBcUI7d0JBQ3JCLHlCQUF5Qjt3QkFDekIsNEJBQTRCO3dCQUM1Qix1QkFBdUI7d0JBQ3ZCLGNBQWM7cUJBQ2Y7b0JBQ0QsU0FBUyxFQUFFLEVBQUU7b0JBQ2IsZUFBZSxFQUFFLENBQUMseUJBQXlCLENBQUM7b0JBQzVDLG1DQUFtQztpQkFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVW5wdWJsaXNoZWQgd29yayDCqSAyMDE5IERYQyBUZWNobm9sb2d5IENvbXBhbnkuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVXNlLCBkdXBsaWNhdGlvbiwgYW5kL29yIGFsdGVyYXRpb24gaXMgc3ViamVjdCB0byBsaWNlbnNlIHRlcm1zLlxuICovXG5cbmltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGlhbG9nc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xuaW1wb3J0IHsgQW5ndWxhck1vZHVsZSB9IGZyb20gJy4vYW5ndWxhci5tb2R1bGUnO1xuXG5pbXBvcnQgeyBEeGNIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZHhjLWhlYWRlci9keGMtaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQge1xuICBEeGNBcHBMYXlvdXRDb21wb25lbnQsXG4gIER4Y0FwcENvbnRlbnRDb21wb25lbnQsXG4gIER4Y0FwcExlZnRDb250ZW50Q29tcG9uZW50LFxuICBEeGNBcHBSaWdodENvbnRlbnRDb21wb25lbnQsXG4gIER4Y0FwcENlbnRlckNvbnRlbnRDb21wb25lbnQsXG4gIER4Y0FwcFRvcENvbnRlbnRDb21wb25lbnQsXG4gIER4Y0ZpeGVkVG9wQ29udGVudENvbXBvbmVudFxufSBmcm9tICcuL2NvbXBvbmVudHMvZHhjLWFwcC1sYXlvdXQvZHhjLWFwcC1sYXlvdXQuY29tcG9uZW50JztcbmltcG9ydCB7XG4gIER4Y1Nlc3Npb25Db21wb25lbnQsXG4gIER4Y1Nlc3Npb25Db250cm9sc0NvbXBvbmVudCxcbiAgRHhjU2Vzc2lvbkNvbnRlbnRDb21wb25lbnRcbn0gZnJvbSAnLi9jb21wb25lbnRzL2R4Yy1zZXNzaW9uL2R4Yy1zZXNzaW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEeGNOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2R4Yy1uYXZpZ2F0aW9uL2R4Yy1uYXZpZ2F0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEeGNDbGFzc1NlbGVjdG9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2R4Yy1jbGFzcy1zZWxlY3Rvci9keGMtY2xhc3Mtc2VsZWN0b3IuY29tcG9uZW50JztcbmltcG9ydCB7IER4Y0FsZXJ0TWVzc2FnZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9keGMtYWxlcnQtbWVzc2FnZS9keGMtYWxlcnQtbWVzc2FnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHhjQ2hpcHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY3VzdG9tLWZpZWxkcy9keGMtY2hpcHMvZHhjLWNoaXBzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEeGNDaGlwQXV0b2NvbXBsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbS1maWVsZHMvZHhjLWNoaXAtYXV0b2NvbXBsZXRlL2R4Yy1jaGlwLWF1dG9jb21wbGV0ZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHhjQ2hpcEVycm9yQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2N1c3RvbS1maWVsZHMvZHhjLWNoaXAtYXV0b2NvbXBsZXRlL2R4Yy1jaGlwLWVycm9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEeGNDb25maXJtRGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2R4Yy1jb25maXJtLWRpYWxvZy9keGMtY29uZmlybS1kaWFsb2cuY29tcG9uZW50JztcbmltcG9ydCB7IER4Y1RhYk5hdkJhckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9keGMtdGFiLW5hdi1iYXIvZHhjLXRhYi1uYXYtYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uRm9ybWF0dGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3ZhbGlkYXRpb24tZm9ybWF0dGVyLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBSZWdFeFZhbGlkYXRvckRpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9yZWdleC12YWxpZGF0b3ItZGlyZWN0aXZlJztcblxuLy8gaW1wb3J0ICdzdHlsZXMuc2NzcydcbmltcG9ydCB7IE9ic2VydmFibGVQaXBlIH0gZnJvbSAnLi9jb21wb25lbnRzL29ic2VydmFibGUucGlwZSc7XG4vLyBpbXBvcnQgeyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtBbmd1bGFyTW9kdWxlLCBNYXRlcmlhbE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIER4Y0FsZXJ0TWVzc2FnZUNvbXBvbmVudCxcbiAgICBEeGNBcHBMYXlvdXRDb21wb25lbnQsXG4gICAgRHhjQXBwQ29udGVudENvbXBvbmVudCxcbiAgICBEeGNBcHBMZWZ0Q29udGVudENvbXBvbmVudCxcbiAgICBEeGNBcHBSaWdodENvbnRlbnRDb21wb25lbnQsXG4gICAgRHhjQXBwQ2VudGVyQ29udGVudENvbXBvbmVudCxcbiAgICBEeGNGaXhlZFRvcENvbnRlbnRDb21wb25lbnQsXG4gICAgRHhjQXBwVG9wQ29udGVudENvbXBvbmVudCxcbiAgICBEeGNIZWFkZXJDb21wb25lbnQsXG4gICAgRHhjU2Vzc2lvbkNvbXBvbmVudCxcbiAgICBEeGNTZXNzaW9uQ29udHJvbHNDb21wb25lbnQsXG4gICAgRHhjU2Vzc2lvbkNvbnRlbnRDb21wb25lbnQsXG4gICAgRHhjTmF2aWdhdGlvbkNvbXBvbmVudCxcbiAgICBEeGNDbGFzc1NlbGVjdG9yQ29tcG9uZW50LFxuICAgIER4Y0NoaXBzQ29tcG9uZW50LFxuICAgIER4Y0NoaXBBdXRvY29tcGxldGVDb21wb25lbnQsXG4gICAgRHhjQ2hpcEVycm9yQ29tcG9uZW50LFxuICAgIER4Y1RhYk5hdkJhckNvbXBvbmVudCxcbiAgICBEeGNDb25maXJtRGlhbG9nQ29tcG9uZW50LFxuICAgIFZhbGlkYXRpb25Gb3JtYXR0ZXJEaXJlY3RpdmUsXG4gICAgUmVnRXhWYWxpZGF0b3JEaXJlY3RpdmUsXG4gICAgT2JzZXJ2YWJsZVBpcGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEFuZ3VsYXJNb2R1bGUsXG4gICAgTWF0ZXJpYWxNb2R1bGUsXG4gICAgRHhjQWxlcnRNZXNzYWdlQ29tcG9uZW50LFxuICAgIER4Y0FwcExheW91dENvbXBvbmVudCxcbiAgICBEeGNBcHBMZWZ0Q29udGVudENvbXBvbmVudCxcbiAgICBEeGNBcHBSaWdodENvbnRlbnRDb21wb25lbnQsXG4gICAgRHhjQXBwQ2VudGVyQ29udGVudENvbXBvbmVudCxcbiAgICBEeGNGaXhlZFRvcENvbnRlbnRDb21wb25lbnQsXG4gICAgRHhjQXBwVG9wQ29udGVudENvbXBvbmVudCxcbiAgICBEeGNBcHBDb250ZW50Q29tcG9uZW50LFxuICAgIER4Y0hlYWRlckNvbXBvbmVudCxcbiAgICBEeGNTZXNzaW9uQ29tcG9uZW50LFxuICAgIER4Y1Nlc3Npb25Db250cm9sc0NvbXBvbmVudCxcbiAgICBEeGNTZXNzaW9uQ29udGVudENvbXBvbmVudCxcbiAgICBEeGNOYXZpZ2F0aW9uQ29tcG9uZW50LFxuICAgIER4Y0NsYXNzU2VsZWN0b3JDb21wb25lbnQsXG4gICAgRHhjQ2hpcHNDb21wb25lbnQsXG4gICAgRHhjQ2hpcEF1dG9jb21wbGV0ZUNvbXBvbmVudCxcbiAgICBEeGNDaGlwRXJyb3JDb21wb25lbnQsXG4gICAgRHhjVGFiTmF2QmFyQ29tcG9uZW50LFxuICAgIER4Y0NvbmZpcm1EaWFsb2dDb21wb25lbnQsXG4gICAgVmFsaWRhdGlvbkZvcm1hdHRlckRpcmVjdGl2ZSxcbiAgICBSZWdFeFZhbGlkYXRvckRpcmVjdGl2ZSxcbiAgICBPYnNlcnZhYmxlUGlwZVxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtEeGNDb25maXJtRGlhbG9nQ29tcG9uZW50XVxuICAvL3NjaGVtYXM6IFtDVVNUT01fRUxFTUVOVFNfU0NIRU1BXVxufSlcbmV4cG9ydCBjbGFzcyBEeGNDb3JlTW9kdWxlIHt9XG4iXX0=