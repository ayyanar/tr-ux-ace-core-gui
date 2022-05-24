import { OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DxcSessionComponent implements OnInit {
    sessionTitle: string;
    showHeader: boolean;
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcSessionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcSessionComponent, "dxc-session", never, { "sessionTitle": "session-title"; "showHeader": "show-header"; }, {}, never, ["dxc-session-controls", "dxc-session-content"]>;
}
export declare class DxcSessionControlsComponent implements OnInit {
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcSessionControlsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcSessionControlsComponent, "dxc-session-controls", never, {}, {}, never, ["[mat-button],[mat-icon-button],mat-menu"]>;
}
export declare class DxcSessionContentComponent implements OnInit {
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcSessionContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcSessionContentComponent, "dxc-session-content", never, {}, {}, never, ["*"]>;
}
