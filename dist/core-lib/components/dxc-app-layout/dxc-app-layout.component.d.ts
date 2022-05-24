import { OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import * as i0 from "@angular/core";
export declare class DxcAppLayoutComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcAppLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcAppLayoutComponent, "dxc-app-layout", never, {}, {}, never, ["dxc-header", "*"]>;
}
export declare class DxcAppContentComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcAppContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcAppContentComponent, "dxc-content", never, {}, {}, never, ["dxc-app-top-content", "dxc-app-left-content", "dxc-app-center-content", "dxc-app-right-content"]>;
}
export declare class DxcAppTopContentComponent implements OnInit {
    height: string;
    get topHeight(): string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcAppTopContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcAppTopContentComponent, "dxc-app-top-content", never, { "height": "height"; }, {}, never, ["*"]>;
}
export declare class DxcAppLeftContentComponent implements OnInit {
    width: string;
    get minWidth(): string;
    get maxWidth(): string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcAppLeftContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcAppLeftContentComponent, "dxc-app-left-content", never, { "width": "width"; }, {}, never, ["*"]>;
}
export declare class DxcAppRightContentComponent implements OnInit {
    width: string;
    get minWidth(): string;
    get maxWidth(): string;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcAppRightContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcAppRightContentComponent, "dxc-app-right-content", never, { "width": "width"; }, {}, never, ["*"]>;
}
export declare class DxcAppCenterContentComponent implements OnInit {
    private router;
    fixedTop: boolean;
    scrollWindow: ElementRef;
    contentViewer: ElementRef;
    constructor(router: Router);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcAppCenterContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcAppCenterContentComponent, "dxc-app-center-content", never, { "fixedTop": "fixedtop"; }, {}, never, ["*"]>;
}
export declare class DxcFixedTopContentComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcFixedTopContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcFixedTopContentComponent, "dxc-fixed-top-content", never, {}, {}, never, ["*"]>;
}
