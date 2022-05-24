/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { Component, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
export class DxcHeaderComponent {
    constructor() {
        this.title = 'Application Title';
        this.onLogoClick = new EventEmitter();
        // to-do
    }
    ngOnInit() {
        // to-do
    }
    logoClick() {
        this.onLogoClick.emit();
    }
}
DxcHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcHeaderComponent, selector: "dxc-header", inputs: { title: "title" }, outputs: { onLogoClick: "onLogoClick" }, ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<mat-toolbar color=\"primary\" class=\"dxc-app-toolbar\">\n  <!-- <mat-toolbar-row> -->\n    <div class=\"icn-logo\" (click)=\"logoClick()\"></div>\n    <span>{{title}}</span>\n    <span class=\"app-menu-spacer\"></span>\n    <ng-content select=\"[mat-button],[mat-icon-button],mat-menu\"></ng-content>\n  <!-- </mat-toolbar-row> -->\n</mat-toolbar>", styles: ["@charset \"UTF-8\";mat-toolbar.dxc-app-toolbar{height:48px;position:fixed;top:0;left:0;z-index:2}mat-toolbar.dxc-app-toolbar .mat-toolbar-row{height:48px}mat-toolbar.dxc-app-toolbar .icn-logo{width:147px;height:25px;cursor:pointer}mat-toolbar.dxc-app-toolbar .app-menu-spacer{flex:1 1 auto}\n"], components: [{ type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-header', encapsulation: ViewEncapsulation.None, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<mat-toolbar color=\"primary\" class=\"dxc-app-toolbar\">\n  <!-- <mat-toolbar-row> -->\n    <div class=\"icn-logo\" (click)=\"logoClick()\"></div>\n    <span>{{title}}</span>\n    <span class=\"app-menu-spacer\"></span>\n    <ng-content select=\"[mat-button],[mat-icon-button],mat-menu\"></ng-content>\n  <!-- </mat-toolbar-row> -->\n</mat-toolbar>", styles: ["@charset \"UTF-8\";mat-toolbar.dxc-app-toolbar{height:48px;position:fixed;top:0;left:0;z-index:2}mat-toolbar.dxc-app-toolbar .mat-toolbar-row{height:48px}mat-toolbar.dxc-app-toolbar .icn-logo{width:147px;height:25px;cursor:pointer}mat-toolbar.dxc-app-toolbar .app-menu-spacer{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], onLogoClick: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHhjLWhlYWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZHhjLWhlYWRlci9keGMtaGVhZGVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9keGMtaGVhZGVyL2R4Yy1oZWFkZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVFsRyxNQUFNLE9BQU8sa0JBQWtCO0lBRzdCO1FBRmdCLFVBQUssR0FBVyxtQkFBbUIsQ0FBQztRQUNuQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFaEQsUUFBUTtJQUNWLENBQUM7SUFFTSxRQUFRO1FBQ2IsUUFBUTtJQUNWLENBQUM7SUFFTSxTQUFTO1FBQ2QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDOzsrR0FiVSxrQkFBa0I7bUdBQWxCLGtCQUFrQix1SENkL0Isc2dCQWFjOzJGRENELGtCQUFrQjtrQkFOOUIsU0FBUzsrQkFDRSxZQUFZLGlCQUdQLGlCQUFpQixDQUFDLElBQUk7MEVBR3JCLEtBQUs7c0JBQXBCLEtBQUs7Z0JBQ1csV0FBVztzQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBVbnB1Ymxpc2hlZCB3b3JrIMKpIDIwMTkgRFhDIFRlY2hub2xvZ3kgQ29tcGFueS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBVc2UsIGR1cGxpY2F0aW9uLCBhbmQvb3IgYWx0ZXJhdGlvbiBpcyBzdWJqZWN0IHRvIGxpY2Vuc2UgdGVybXMuXG4gKi9cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHhjLWhlYWRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9keGMtaGVhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHhjLWhlYWRlci5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIER4Y0hlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyB0aXRsZTogc3RyaW5nID0gJ0FwcGxpY2F0aW9uIFRpdGxlJztcbiAgQE91dHB1dCgpIHB1YmxpYyBvbkxvZ29DbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gdG8tZG9cbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAvLyB0by1kb1xuICB9XG5cbiAgcHVibGljIGxvZ29DbGljaygpIHtcbiAgICB0aGlzLm9uTG9nb0NsaWNrLmVtaXQoKTtcbiAgfVxuXG59XG4iLCI8IS0tXG4gICAgVW5wdWJsaXNoZWQgd29yayDCqSAyMDE5IERYQyBUZWNobm9sb2d5IENvbXBhbnkuXG4gICAgQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAgICBVc2UsIGR1cGxpY2F0aW9uLCBhbmQvb3IgYWx0ZXJhdGlvbiBpcyBzdWJqZWN0IHRvIGxpY2Vuc2UgdGVybXMuXG4tLT5cblxuPG1hdC10b29sYmFyIGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzPVwiZHhjLWFwcC10b29sYmFyXCI+XG4gIDwhLS0gPG1hdC10b29sYmFyLXJvdz4gLS0+XG4gICAgPGRpdiBjbGFzcz1cImljbi1sb2dvXCIgKGNsaWNrKT1cImxvZ29DbGljaygpXCI+PC9kaXY+XG4gICAgPHNwYW4+e3t0aXRsZX19PC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiYXBwLW1lbnUtc3BhY2VyXCI+PC9zcGFuPlxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlttYXQtYnV0dG9uXSxbbWF0LWljb24tYnV0dG9uXSxtYXQtbWVudVwiPjwvbmctY29udGVudD5cbiAgPCEtLSA8L21hdC10b29sYmFyLXJvdz4gLS0+XG48L21hdC10b29sYmFyPiJdfQ==