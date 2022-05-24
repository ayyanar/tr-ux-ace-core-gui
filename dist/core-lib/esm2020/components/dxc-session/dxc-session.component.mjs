/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { Component, ViewEncapsulation, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
// tslint:disable-next-line:max-classes-per-file
export class DxcSessionComponent {
    constructor() {
        this.sessionTitle = 'Session Title';
        this.showHeader = true;
        // to-do
    }
    ngOnInit() {
        // to-do
    }
}
DxcSessionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcSessionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcSessionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcSessionComponent, selector: "dxc-session", inputs: { sessionTitle: ["session-title", "sessionTitle"], showHeader: ["show-header", "showHeader"] }, ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<div *ngIf=\"showHeader==true\" class=\"dxc-session-header\">\n  <span class=\"dxc-session-title\">{{sessionTitle}}</span>\n  <span class=\"dxc-session-header-spacer\"></span>\n  <ng-content select=\"dxc-session-controls\"></ng-content>\n</div>\n<div class=\"dxc-session-content\">\n  <ng-content select=\"dxc-session-content\"></ng-content>\n</div>\n", styles: ["@charset \"UTF-8\";dxc-session{display:block}dxc-session .dxc-session-header{padding:0 16px;display:flex;flex-direction:row}dxc-session .dxc-session-title{padding:12px 0}dxc-session .dxc-session-content{padding:16px}dxc-session .dxc-session-header-spacer{flex:1 1 auto}dxc-session dxc-session-controls{padding:4px 0}\n"], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcSessionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-session', encapsulation: ViewEncapsulation.None, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<div *ngIf=\"showHeader==true\" class=\"dxc-session-header\">\n  <span class=\"dxc-session-title\">{{sessionTitle}}</span>\n  <span class=\"dxc-session-header-spacer\"></span>\n  <ng-content select=\"dxc-session-controls\"></ng-content>\n</div>\n<div class=\"dxc-session-content\">\n  <ng-content select=\"dxc-session-content\"></ng-content>\n</div>\n", styles: ["@charset \"UTF-8\";dxc-session{display:block}dxc-session .dxc-session-header{padding:0 16px;display:flex;flex-direction:row}dxc-session .dxc-session-title{padding:12px 0}dxc-session .dxc-session-content{padding:16px}dxc-session .dxc-session-header-spacer{flex:1 1 auto}dxc-session dxc-session-controls{padding:4px 0}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { sessionTitle: [{
                type: Input,
                args: ['session-title']
            }], showHeader: [{
                type: Input,
                args: ['show-header']
            }] } });
// tslint:disable-next-line:max-classes-per-file
export class DxcSessionControlsComponent {
    ngOnInit() {
        // to-do
    }
}
DxcSessionControlsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcSessionControlsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcSessionControlsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcSessionControlsComponent, selector: "dxc-session-controls", ngImport: i0, template: `
    <ng-content select="[mat-button],[mat-icon-button],mat-menu"></ng-content>
  `, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcSessionControlsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dxc-session-controls',
                    template: `
    <ng-content select="[mat-button],[mat-icon-button],mat-menu"></ng-content>
  `,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
// tslint:disable-next-line:max-classes-per-file
export class DxcSessionContentComponent {
    ngOnInit() {
        // to-do
    }
}
DxcSessionContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcSessionContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcSessionContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcSessionContentComponent, selector: "dxc-session-content", ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcSessionContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dxc-session-content',
                    template: `
    <ng-content></ng-content>
  `,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHhjLXNlc3Npb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2R4Yy1zZXNzaW9uL2R4Yy1zZXNzaW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9keGMtc2Vzc2lvbi9keGMtc2Vzc2lvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBVSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUU1RSxnREFBZ0Q7QUFPaEQsTUFBTSxPQUFPLG1CQUFtQjtJQUc5QjtRQUYrQixpQkFBWSxHQUFXLGVBQWUsQ0FBQztRQUN4QyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBRXZELFFBQVE7SUFDVixDQUFDO0lBRU0sUUFBUTtRQUNiLFFBQVE7SUFDVixDQUFDOztnSEFUVSxtQkFBbUI7b0dBQW5CLG1CQUFtQiwySkNmaEMsd2dCQWNBOzJGRENhLG1CQUFtQjtrQkFOL0IsU0FBUzsrQkFDRSxhQUFhLGlCQUdSLGlCQUFpQixDQUFDLElBQUk7MEVBR04sWUFBWTtzQkFBMUMsS0FBSzt1QkFBQyxlQUFlO2dCQUNRLFVBQVU7c0JBQXZDLEtBQUs7dUJBQUMsYUFBYTs7QUFVdEIsZ0RBQWdEO0FBUWhELE1BQU0sT0FBTywyQkFBMkI7SUFDL0IsUUFBUTtRQUNiLFFBQVE7SUFDVixDQUFDOzt3SEFIVSwyQkFBMkI7NEdBQTNCLDJCQUEyQiw0REFMNUI7O0dBRVQ7MkZBR1UsMkJBQTJCO2tCQVB2QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRTs7R0FFVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEM7O0FBT0QsZ0RBQWdEO0FBUWhELE1BQU0sT0FBTywwQkFBMEI7SUFDOUIsUUFBUTtRQUNiLFFBQVE7SUFDVixDQUFDOzt1SEFIVSwwQkFBMEI7MkdBQTFCLDBCQUEwQiwyREFMM0I7O0dBRVQ7MkZBR1UsMEJBQTBCO2tCQVB0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRTs7R0FFVDtvQkFDRCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVW5wdWJsaXNoZWQgd29yayDCqSAyMDE5IERYQyBUZWNobm9sb2d5IENvbXBhbnkuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVXNlLCBkdXBsaWNhdGlvbiwgYW5kL29yIGFsdGVyYXRpb24gaXMgc3ViamVjdCB0byBsaWNlbnNlIHRlcm1zLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1jbGFzc2VzLXBlci1maWxlXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkeGMtc2Vzc2lvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9keGMtc2Vzc2lvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2R4Yy1zZXNzaW9uLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHhjU2Vzc2lvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgnc2Vzc2lvbi10aXRsZScpIHB1YmxpYyBzZXNzaW9uVGl0bGU6IHN0cmluZyA9ICdTZXNzaW9uIFRpdGxlJztcbiAgQElucHV0KCdzaG93LWhlYWRlcicpICBwdWJsaWMgc2hvd0hlYWRlcjogYm9vbGVhbiA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHRvLWRvXG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgLy8gdG8tZG9cbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R4Yy1zZXNzaW9uLWNvbnRyb2xzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbbWF0LWJ1dHRvbl0sW21hdC1pY29uLWJ1dHRvbl0sbWF0LW1lbnVcIj48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHhjU2Vzc2lvbkNvbnRyb2xzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIC8vIHRvLWRvXG4gIH1cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1jbGFzc2VzLXBlci1maWxlXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkeGMtc2Vzc2lvbi1jb250ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHhjU2Vzc2lvbkNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgLy8gdG8tZG9cbiAgfVxufVxuIiwiPCEtLVxuICAgIFVucHVibGlzaGVkIHdvcmsgwqkgMjAxOSBEWEMgVGVjaG5vbG9neSBDb21wYW55LlxuICAgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgVXNlLCBkdXBsaWNhdGlvbiwgYW5kL29yIGFsdGVyYXRpb24gaXMgc3ViamVjdCB0byBsaWNlbnNlIHRlcm1zLlxuLS0+XG5cbjxkaXYgKm5nSWY9XCJzaG93SGVhZGVyPT10cnVlXCIgY2xhc3M9XCJkeGMtc2Vzc2lvbi1oZWFkZXJcIj5cbiAgPHNwYW4gY2xhc3M9XCJkeGMtc2Vzc2lvbi10aXRsZVwiPnt7c2Vzc2lvblRpdGxlfX08L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiZHhjLXNlc3Npb24taGVhZGVyLXNwYWNlclwiPjwvc3Bhbj5cbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZHhjLXNlc3Npb24tY29udHJvbHNcIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJkeGMtc2Vzc2lvbi1jb250ZW50XCI+XG4gIDxuZy1jb250ZW50IHNlbGVjdD1cImR4Yy1zZXNzaW9uLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG48L2Rpdj5cbiJdfQ==