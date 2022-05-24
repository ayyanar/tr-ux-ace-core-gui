import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DxcHeaderComponent implements OnInit {
    title: string;
    onLogoClick: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    logoClick(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcHeaderComponent, "dxc-header", never, { "title": "title"; }, { "onLogoClick": "onLogoClick"; }, never, ["[mat-button],[mat-icon-button],mat-menu"]>;
}
