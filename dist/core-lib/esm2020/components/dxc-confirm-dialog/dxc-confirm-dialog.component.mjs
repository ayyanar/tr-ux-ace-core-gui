/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
export class DxcConfirmDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
}
DxcConfirmDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcConfirmDialogComponent, deps: [{ token: i1.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component });
DxcConfirmDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcConfirmDialogComponent, selector: "app-confirm-dialog", ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<h1 mat-dialog-title>{{ title }}</h1>\n<p>{{ message }}</p>\n\n<button type=\"button\" mat-raised-button color=\"primary\"\n    (click)=\"dialogRef.close(true)\">OK</button>\n<button type=\"button\" mat-button \n    (click)=\"dialogRef.close()\">Cancel</button>", styles: ["@charset \"UTF-8\";\n"], components: [{ type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcConfirmDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-confirm-dialog', template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<h1 mat-dialog-title>{{ title }}</h1>\n<p>{{ message }}</p>\n\n<button type=\"button\" mat-raised-button color=\"primary\"\n    (click)=\"dialogRef.close(true)\">OK</button>\n<button type=\"button\" mat-button \n    (click)=\"dialogRef.close()\">Cancel</button>", styles: ["@charset \"UTF-8\";\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHhjLWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9keGMtY29uZmlybS1kaWFsb2cvZHhjLWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9keGMtY29uZmlybS1kaWFsb2cvZHhjLWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTFDLE1BQU0sT0FBTyx5QkFBeUI7SUFJbEMsWUFBbUIsU0FBa0Q7UUFBbEQsY0FBUyxHQUFULFNBQVMsQ0FBeUM7SUFBRyxDQUFDOztzSEFKaEUseUJBQXlCOzBHQUF6Qix5QkFBeUIsMERDZHRDLDhhQVkrQzsyRkRFbEMseUJBQXlCO2tCQUxyQyxTQUFTOytCQUNFLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBVbnB1Ymxpc2hlZCB3b3JrIMKpIDIwMTkgRFhDIFRlY2hub2xvZ3kgQ29tcGFueS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBVc2UsIGR1cGxpY2F0aW9uLCBhbmQvb3IgYWx0ZXJhdGlvbiBpcyBzdWJqZWN0IHRvIGxpY2Vuc2UgdGVybXMuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY29uZmlybS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHhjLWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHhjLWNvbmZpcm0tZGlhbG9nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHhjQ29uZmlybURpYWxvZ0NvbXBvbmVudCB7XG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gICAgcHVibGljIG1lc3NhZ2U6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEeGNDb25maXJtRGlhbG9nQ29tcG9uZW50Pikge31cbn1cbiIsIjwhLS1cbiAgICBVbnB1Ymxpc2hlZCB3b3JrIMKpIDIwMTkgRFhDIFRlY2hub2xvZ3kgQ29tcGFueS5cbiAgICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIFVzZSwgZHVwbGljYXRpb24sIGFuZC9vciBhbHRlcmF0aW9uIGlzIHN1YmplY3QgdG8gbGljZW5zZSB0ZXJtcy5cbi0tPlxuXG48aDEgbWF0LWRpYWxvZy10aXRsZT57eyB0aXRsZSB9fTwvaDE+XG48cD57eyBtZXNzYWdlIH19PC9wPlxuXG48YnV0dG9uIHR5cGU9XCJidXR0b25cIiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIlxuICAgIChjbGljayk9XCJkaWFsb2dSZWYuY2xvc2UodHJ1ZSlcIj5PSzwvYnV0dG9uPlxuPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbWF0LWJ1dHRvbiBcbiAgICAoY2xpY2spPVwiZGlhbG9nUmVmLmNsb3NlKClcIj5DYW5jZWw8L2J1dHRvbj4iXX0=