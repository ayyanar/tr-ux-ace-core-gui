import { OnInit, EventEmitter } from '@angular/core';
import { DxcNav } from '../../models/dxc-nav-item.interface';
import * as i0 from "@angular/core";
export declare class DxcNavigationComponent implements OnInit {
    navItems: DxcNav[];
    activeItem: number;
    onItemClick: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    changeActiveItem(index: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcNavigationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcNavigationComponent, "dxc-nav", never, { "navItems": "nav-items"; "activeItem": "active-item"; }, { "onItemClick": "itemclick"; }, never, never>;
}
