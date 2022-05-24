/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { Component, ViewEncapsulation, Input, HostBinding, ViewChild } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "../dxc-alert-message/dxc-alert-message.component";
import * as i2 from "@angular/router";
export class DxcAppLayoutComponent {
    constructor() {
        // to-do
    }
    ngOnInit() {
        // to-do
    }
}
DxcAppLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcAppLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcAppLayoutComponent, selector: "dxc-app-layout", ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<ng-content select=\"dxc-header\"></ng-content>\n<!-- <dxc-alert-message></dxc-alert-message> -->\n<ng-content></ng-content>", styles: ["@charset \"UTF-8\";dxc-app-layout{display:flex;flex-direction:column;position:absolute;top:48px;bottom:0;left:0;right:0}dxc-app-layout>dxc-header~*{display:flex}dxc-app-layout dxc-content{display:flex;width:100%;position:absolute;top:0;bottom:0;left:0;right:0}dxc-app-layout .dxc-app-main{display:flex;flex-direction:column;flex:1;width:100%}dxc-app-layout .dxc-app-main dxc-app-center-content{display:flex;flex:1 1 auto;overflow:auto}dxc-app-layout .dxc-app-main dxc-app-top-content{border-bottom:2px solid #FFF}dxc-app-layout .dxc-app-main .dxc-app-body-content{display:flex;flex-direction:row;flex:1}dxc-app-layout .dxc-app-main dxc-app-right-content,dxc-app-layout .dxc-app-main dxc-app-left-content{flex:1;height:100%;overflow:hidden}dxc-app-layout .dxc-app-main .dxc-app-container{position:relative;z-index:1;box-sizing:border-box;display:block;overflow:hidden;flex:1 1 auto}dxc-app-layout .dxc-app-main .dxc-app-content{height:100%;display:flex;flex-direction:column}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer{margin:10px;background-color:#fff;flex-grow:1;border-radius:0;overflow:hidden;height:100%}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container{min-height:100%;max-height:100%;height:100%}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-fixed-header-container{padding-top:16px;border-bottom:1px solid #ddd}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-scroll-header-container{padding-top:16px}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-scroll-content-container{overflow:auto!important}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-scroll-content-container .dxc-scroll-content-wrapper{padding:0 16px}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-session-ignore-padding{padding-left:16px;padding-right:16px;margin-left:-16px;margin-right:-16px}\n"], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-app-layout', encapsulation: ViewEncapsulation.None, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<ng-content select=\"dxc-header\"></ng-content>\n<!-- <dxc-alert-message></dxc-alert-message> -->\n<ng-content></ng-content>", styles: ["@charset \"UTF-8\";dxc-app-layout{display:flex;flex-direction:column;position:absolute;top:48px;bottom:0;left:0;right:0}dxc-app-layout>dxc-header~*{display:flex}dxc-app-layout dxc-content{display:flex;width:100%;position:absolute;top:0;bottom:0;left:0;right:0}dxc-app-layout .dxc-app-main{display:flex;flex-direction:column;flex:1;width:100%}dxc-app-layout .dxc-app-main dxc-app-center-content{display:flex;flex:1 1 auto;overflow:auto}dxc-app-layout .dxc-app-main dxc-app-top-content{border-bottom:2px solid #FFF}dxc-app-layout .dxc-app-main .dxc-app-body-content{display:flex;flex-direction:row;flex:1}dxc-app-layout .dxc-app-main dxc-app-right-content,dxc-app-layout .dxc-app-main dxc-app-left-content{flex:1;height:100%;overflow:hidden}dxc-app-layout .dxc-app-main .dxc-app-container{position:relative;z-index:1;box-sizing:border-box;display:block;overflow:hidden;flex:1 1 auto}dxc-app-layout .dxc-app-main .dxc-app-content{height:100%;display:flex;flex-direction:column}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer{margin:10px;background-color:#fff;flex-grow:1;border-radius:0;overflow:hidden;height:100%}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container{min-height:100%;max-height:100%;height:100%}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-fixed-header-container{padding-top:16px;border-bottom:1px solid #ddd}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-scroll-header-container{padding-top:16px}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-scroll-content-container{overflow:auto!important}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-scroll-content-container .dxc-scroll-content-wrapper{padding:0 16px}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-session-ignore-padding{padding-left:16px;padding-right:16px;margin-left:-16px;margin-right:-16px}\n"] }]
        }], ctorParameters: function () { return []; } });
// tslint:disable-next-line:max-classes-per-file
export class DxcAppContentComponent {
    constructor() {
        // to-do
    }
    ngOnInit() {
        // to-do
    }
}
DxcAppContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcAppContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcAppContentComponent, selector: "dxc-content", ngImport: i0, template: `
    <div class="dxc-app-main">
    <ng-content select="dxc-app-top-content"></ng-content>
    <dxc-alert-message></dxc-alert-message>
    <div class="dxc-app-body-content">
      <ng-content select="dxc-app-left-content"></ng-content>
      <ng-content select="dxc-app-center-content"></ng-content>
      <ng-content select="dxc-app-right-content"></ng-content>
    </div>
  </div>
  `, isInline: true, components: [{ type: i1.DxcAlertMessageComponent, selector: "dxc-alert-message" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dxc-content',
                    template: `
    <div class="dxc-app-main">
    <ng-content select="dxc-app-top-content"></ng-content>
    <dxc-alert-message></dxc-alert-message>
    <div class="dxc-app-body-content">
      <ng-content select="dxc-app-left-content"></ng-content>
      <ng-content select="dxc-app-center-content"></ng-content>
      <ng-content select="dxc-app-right-content"></ng-content>
    </div>
  </div>
  `,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return []; } });
// tslint:disable-next-line:max-classes-per-file
export class DxcAppTopContentComponent {
    constructor() {
        this.height = '50px';
        // to-do
    }
    get topHeight() {
        return this.height;
    }
    ngOnInit() {
        // to-do
    }
}
DxcAppTopContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppTopContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcAppTopContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcAppTopContentComponent, selector: "dxc-app-top-content", inputs: { height: "height" }, host: { properties: { "style.height": "this.topHeight" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppTopContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dxc-app-top-content',
                    template: `<ng-content></ng-content>`,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { height: [{
                type: Input
            }], topHeight: [{
                type: HostBinding,
                args: ['style.height']
            }] } });
// tslint:disable-next-line:max-classes-per-file
export class DxcAppLeftContentComponent {
    constructor() {
        this.width = '200px';
        // to-do
    }
    get minWidth() {
        return this.width;
    }
    get maxWidth() {
        return this.width;
    }
    ngOnInit() {
        // to-do
    }
}
DxcAppLeftContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppLeftContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcAppLeftContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcAppLeftContentComponent, selector: "dxc-app-left-content", inputs: { width: "width" }, host: { properties: { "style.min-width": "this.minWidth", "style.max-width": "this.maxWidth" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppLeftContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dxc-app-left-content',
                    template: `<ng-content></ng-content>`,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { width: [{
                type: Input
            }], minWidth: [{
                type: HostBinding,
                args: ['style.min-width']
            }], maxWidth: [{
                type: HostBinding,
                args: ['style.max-width']
            }] } });
// tslint:disable-next-line:max-classes-per-file
export class DxcAppRightContentComponent {
    constructor() {
        this.width = '200px';
        // to-do
    }
    get minWidth() {
        return this.width;
    }
    get maxWidth() {
        return this.width;
    }
    ngOnInit() {
        // to-do
    }
}
DxcAppRightContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppRightContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcAppRightContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcAppRightContentComponent, selector: "dxc-app-right-content", inputs: { width: "width" }, host: { properties: { "style.min-width": "this.minWidth", "style.max-width": "this.maxWidth" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppRightContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dxc-app-right-content',
                    template: `<ng-content></ng-content>`,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { width: [{
                type: Input
            }], minWidth: [{
                type: HostBinding,
                args: ['style.min-width']
            }], maxWidth: [{
                type: HostBinding,
                args: ['style.max-width']
            }] } });
// tslint:disable-next-line:max-classes-per-file
export class DxcAppCenterContentComponent {
    constructor(router) {
        this.router = router;
        this.fixedTop = false;
        // to-do
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            try {
                this.scrollWindow.nativeElement.scrollTo(0, 0);
                this.contentViewer.nativeElement.scrollTo(0, 0);
            }
            catch (e) {
                // no code
            }
        });
    }
}
DxcAppCenterContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppCenterContentComponent, deps: [{ token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
DxcAppCenterContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcAppCenterContentComponent, selector: "dxc-app-center-content", inputs: { fixedTop: ["fixedtop", "fixedTop"] }, viewQueries: [{ propertyName: "scrollWindow", first: true, predicate: ["scrollwindow"], descendants: true }, { propertyName: "contentViewer", first: true, predicate: ["contentviewer"], descendants: true }], ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<div class=\"dxc-app-container\">\n    <div class=\"dxc-app-content\">\n            <div class=\"dxc-app-content-viewer mat-typography mat-elevation-z2\">\n                    <ng-content></ng-content>\n            </div>\n        <!-- <div class=\"dxc-app-content-viewer mat-typography mat-elevation-z2\" [style.overflow]=\"fixedTop ? 'hidden':'auto'\" [style.padding]=\"fixedTop ? '0':''\"\n            [style.height]=\"fixedTop ? '100%':''\" #contentviewer>\n            <div fxLayout=\"column\" fxLayoutAlign=\" none\" class=\"dxc-scroll-container\">\n                <div fxFlex=\"initial\" [class.dxc-fixed-header-container]=\"fixedTop\" [class.dxc-scroll-header-container]=\"!fixedTop\">\n                    <ng-content select=\"dxc-fixed-top-content\"></ng-content>\n                </div>\n                <div fxFlex=\"auto\" class=\"dxc-scroll-content-container\" #scrollwindow>\n                    <div class=\"dxc-scroll-content-wrapper\">\n                        <ng-content></ng-content>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n    </div>\n</div>", encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppCenterContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-app-center-content', encapsulation: ViewEncapsulation.None, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<div class=\"dxc-app-container\">\n    <div class=\"dxc-app-content\">\n            <div class=\"dxc-app-content-viewer mat-typography mat-elevation-z2\">\n                    <ng-content></ng-content>\n            </div>\n        <!-- <div class=\"dxc-app-content-viewer mat-typography mat-elevation-z2\" [style.overflow]=\"fixedTop ? 'hidden':'auto'\" [style.padding]=\"fixedTop ? '0':''\"\n            [style.height]=\"fixedTop ? '100%':''\" #contentviewer>\n            <div fxLayout=\"column\" fxLayoutAlign=\" none\" class=\"dxc-scroll-container\">\n                <div fxFlex=\"initial\" [class.dxc-fixed-header-container]=\"fixedTop\" [class.dxc-scroll-header-container]=\"!fixedTop\">\n                    <ng-content select=\"dxc-fixed-top-content\"></ng-content>\n                </div>\n                <div fxFlex=\"auto\" class=\"dxc-scroll-content-container\" #scrollwindow>\n                    <div class=\"dxc-scroll-content-wrapper\">\n                        <ng-content></ng-content>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n    </div>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i2.Router }]; }, propDecorators: { fixedTop: [{
                type: Input,
                args: ['fixedtop']
            }], scrollWindow: [{
                type: ViewChild,
                args: ['scrollwindow']
            }], contentViewer: [{
                type: ViewChild,
                args: ['contentviewer']
            }] } });
// tslint:disable-next-line:max-classes-per-file
export class DxcFixedTopContentComponent {
    constructor() {
        // to-do
    }
    ngOnInit() {
        // to-do
    }
}
DxcFixedTopContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcFixedTopContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcFixedTopContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcFixedTopContentComponent, selector: "dxc-fixed-top-content", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcFixedTopContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dxc-fixed-top-content',
                    template: `<ng-content></ng-content>`,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHhjLWFwcC1sYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2R4Yy1hcHAtbGF5b3V0L2R4Yy1hcHAtbGF5b3V0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9keGMtYXBwLWxheW91dC9keGMtYXBwLWxheW91dC5jb21wb25lbnQuaHRtbCIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9keGMtYXBwLWxheW91dC9keGMtYXBwLWNlbnRlci1jb250ZW50LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFjLE1BQU0sZUFBZSxDQUFDO0FBQ2hILE9BQU8sRUFBVSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQVF4RCxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDO1FBQ0UsUUFBUTtJQUNWLENBQUM7SUFFTSxRQUFRO1FBQ2IsUUFBUTtJQUNWLENBQUM7O2tIQVBVLHFCQUFxQjtzR0FBckIscUJBQXFCLHNEQ2ZsQyxxU0FReUI7MkZET1oscUJBQXFCO2tCQU5qQyxTQUFTOytCQUNFLGdCQUFnQixpQkFHWCxpQkFBaUIsQ0FBQyxJQUFJOztBQWF2QyxnREFBZ0Q7QUFnQmhELE1BQU0sT0FBTyxzQkFBc0I7SUFDakM7UUFDRSxRQUFRO0lBQ1YsQ0FBQztJQUVNLFFBQVE7UUFDYixRQUFRO0lBQ1YsQ0FBQzs7bUhBUFUsc0JBQXNCO3VHQUF0QixzQkFBc0IsbURBYnZCOzs7Ozs7Ozs7O0dBVVQ7MkZBR1Usc0JBQXNCO2tCQWZsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7R0FVVDtv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QWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ2pEO1lBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQ1YsVUFBVTthQUNYO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzt5SEF0QlUsNEJBQTRCOzZHQUE1Qiw0QkFBNEIsNlRFbkl6Qyxzd0NBeUJNOzJGRjBHTyw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0Usd0JBQXdCLGlCQUVuQixpQkFBaUIsQ0FBQyxJQUFJOzZGQUlYLFFBQVE7c0JBQWpDLEtBQUs7dUJBQUMsVUFBVTtnQkFDaUIsWUFBWTtzQkFBN0MsU0FBUzt1QkFBQyxjQUFjO2dCQUNVLGFBQWE7c0JBQS9DLFNBQVM7dUJBQUMsZUFBZTs7QUFxQjVCLGdEQUFnRDtBQU1oRCxNQUFNLE9BQU8sMkJBQTJCO0lBRXRDO1FBQ0UsUUFBUTtJQUNWLENBQUM7SUFFTSxRQUFRO1FBQ2IsUUFBUTtJQUNWLENBQUM7O3dIQVJVLDJCQUEyQjs0R0FBM0IsMkJBQTJCLDZEQUg1QiwyQkFBMkI7MkZBRzFCLDJCQUEyQjtrQkFMdkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtpQkFDdEMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVW5wdWJsaXNoZWQgd29yayDCqSAyMDE5IERYQyBUZWNobm9sb2d5IENvbXBhbnkuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVXNlLCBkdXBsaWNhdGlvbiwgYW5kL29yIGFsdGVyYXRpb24gaXMgc3ViamVjdCB0byBsaWNlbnNlIHRlcm1zLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQsIEhvc3RCaW5kaW5nLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvbkVuZCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R4Yy1hcHAtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R4Yy1hcHAtbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHhjLWFwcC1sYXlvdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEeGNBcHBMYXlvdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyB0by1kb1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIC8vIHRvLWRvXG4gIH1cblxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R4Yy1jb250ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiZHhjLWFwcC1tYWluXCI+XG4gICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZHhjLWFwcC10b3AtY29udGVudFwiPjwvbmctY29udGVudD5cbiAgICA8ZHhjLWFsZXJ0LW1lc3NhZ2U+PC9keGMtYWxlcnQtbWVzc2FnZT5cbiAgICA8ZGl2IGNsYXNzPVwiZHhjLWFwcC1ib2R5LWNvbnRlbnRcIj5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImR4Yy1hcHAtbGVmdC1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZHhjLWFwcC1jZW50ZXItY29udGVudFwiPjwvbmctY29udGVudD5cbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImR4Yy1hcHAtcmlnaHQtY29udGVudFwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIGAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHhjQXBwQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIHRvLWRvXG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgLy8gdG8tZG9cbiAgfVxuXG59XG5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtY2xhc3Nlcy1wZXItZmlsZVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHhjLWFwcC10b3AtY29udGVudCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHhjQXBwVG9wQ29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyBoZWlnaHQ6IHN0cmluZyA9ICc1MHB4JztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpIGdldCB0b3BIZWlnaHQoKTogc3RyaW5ne1xuICAgIHJldHVybiB0aGlzLmhlaWdodDtcbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyB0by1kb1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIC8vIHRvLWRvXG4gIH1cblxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R4Yy1hcHAtbGVmdC1jb250ZW50JyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBEeGNBcHBMZWZ0Q29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyB3aWR0aDogc3RyaW5nID0gJzIwMHB4JztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1pbi13aWR0aCcpIGdldCBtaW5XaWR0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWF4LXdpZHRoJykgZ2V0IG1heFdpZHRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gdG8tZG9cbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAvLyB0by1kb1xuICB9XG5cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1jbGFzc2VzLXBlci1maWxlXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkeGMtYXBwLXJpZ2h0LWNvbnRlbnQnLFxuICB0ZW1wbGF0ZTogYDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIER4Y0FwcFJpZ2h0Q29udGVudENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHB1YmxpYyB3aWR0aDogc3RyaW5nID0gJzIwMHB4JztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm1pbi13aWR0aCcpIGdldCBtaW5XaWR0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLndpZHRoO1xuICB9XG4gIEBIb3N0QmluZGluZygnc3R5bGUubWF4LXdpZHRoJykgZ2V0IG1heFdpZHRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGg7XG4gIH1cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgLy8gdG8tZG9cbiAgfVxuXG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAvLyB0by1kb1xuICB9XG5cbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1jbGFzc2VzLXBlci1maWxlXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkeGMtYXBwLWNlbnRlci1jb250ZW50JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2R4Yy1hcHAtY2VudGVyLWNvbnRlbnQuY29tcG9uZW50Lmh0bWwnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIER4Y0FwcENlbnRlckNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgnZml4ZWR0b3AnKSBwdWJsaWMgZml4ZWRUb3AgPSBmYWxzZTtcbiAgQFZpZXdDaGlsZCgnc2Nyb2xsd2luZG93JykgcHVibGljIHNjcm9sbFdpbmRvdzogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnY29udGVudHZpZXdlcicpIHB1YmxpYyBjb250ZW50Vmlld2VyOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAvLyB0by1kb1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2dCkgPT4ge1xuICAgICAgaWYgKCEoZXZ0IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5zY3JvbGxXaW5kb3cubmF0aXZlRWxlbWVudC5zY3JvbGxUbygwLCAwKTtcbiAgICAgICAgdGhpcy5jb250ZW50Vmlld2VyLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIG5vIGNvZGVcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWNsYXNzZXMtcGVyLWZpbGVcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2R4Yy1maXhlZC10b3AtY29udGVudCcsXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgRHhjRml4ZWRUb3BDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyB0by1kb1xuICB9XG5cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIC8vIHRvLWRvXG4gIH1cbn1cbiIsIjwhLS1cbiAgICBVbnB1Ymxpc2hlZCB3b3JrIMKpIDIwMTkgRFhDIFRlY2hub2xvZ3kgQ29tcGFueS5cbiAgICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIFVzZSwgZHVwbGljYXRpb24sIGFuZC9vciBhbHRlcmF0aW9uIGlzIHN1YmplY3QgdG8gbGljZW5zZSB0ZXJtcy5cbi0tPlxuXG48bmctY29udGVudCBzZWxlY3Q9XCJkeGMtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuPCEtLSA8ZHhjLWFsZXJ0LW1lc3NhZ2U+PC9keGMtYWxlcnQtbWVzc2FnZT4gLS0+XG48bmctY29udGVudD48L25nLWNvbnRlbnQ+IiwiPCEtLVxuICAgIFVucHVibGlzaGVkIHdvcmsgwqkgMjAxOSBEWEMgVGVjaG5vbG9neSBDb21wYW55LlxuICAgIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gICAgVXNlLCBkdXBsaWNhdGlvbiwgYW5kL29yIGFsdGVyYXRpb24gaXMgc3ViamVjdCB0byBsaWNlbnNlIHRlcm1zLlxuLS0+XG5cbjxkaXYgY2xhc3M9XCJkeGMtYXBwLWNvbnRhaW5lclwiPlxuICAgIDxkaXYgY2xhc3M9XCJkeGMtYXBwLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkeGMtYXBwLWNvbnRlbnQtdmlld2VyIG1hdC10eXBvZ3JhcGh5IG1hdC1lbGV2YXRpb24tejJcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImR4Yy1hcHAtY29udGVudC12aWV3ZXIgbWF0LXR5cG9ncmFwaHkgbWF0LWVsZXZhdGlvbi16MlwiIFtzdHlsZS5vdmVyZmxvd109XCJmaXhlZFRvcCA/ICdoaWRkZW4nOidhdXRvJ1wiIFtzdHlsZS5wYWRkaW5nXT1cImZpeGVkVG9wID8gJzAnOicnXCJcbiAgICAgICAgICAgIFtzdHlsZS5oZWlnaHRdPVwiZml4ZWRUb3AgPyAnMTAwJSc6JydcIiAjY29udGVudHZpZXdlcj5cbiAgICAgICAgICAgIDxkaXYgZnhMYXlvdXQ9XCJjb2x1bW5cIiBmeExheW91dEFsaWduPVwiIG5vbmVcIiBjbGFzcz1cImR4Yy1zY3JvbGwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBmeEZsZXg9XCJpbml0aWFsXCIgW2NsYXNzLmR4Yy1maXhlZC1oZWFkZXItY29udGFpbmVyXT1cImZpeGVkVG9wXCIgW2NsYXNzLmR4Yy1zY3JvbGwtaGVhZGVyLWNvbnRhaW5lcl09XCIhZml4ZWRUb3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZHhjLWZpeGVkLXRvcC1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgZnhGbGV4PVwiYXV0b1wiIGNsYXNzPVwiZHhjLXNjcm9sbC1jb250ZW50LWNvbnRhaW5lclwiICNzY3JvbGx3aW5kb3c+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkeGMtc2Nyb2xsLWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4gLS0+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=