import { ElementRef, DoCheck, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DxcTabNavBarComponent implements DoCheck, AfterViewInit {
    private el;
    labelContainer: ElementRef;
    showScrollButtons: boolean;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    left(): void;
    right(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcTabNavBarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcTabNavBarComponent, "dxc-tab-nav-bar", never, {}, {}, never, ["*"]>;
}
