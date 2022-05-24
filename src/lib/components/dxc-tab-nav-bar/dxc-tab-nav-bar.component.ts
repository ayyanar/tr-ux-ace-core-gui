/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Component, ElementRef, ViewChild, DoCheck, AfterViewInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dxc-tab-nav-bar',
  templateUrl: 'dxc-tab-nav-bar.component.html',
  styleUrls: ['dxc-tab-nav-bar.component.scss'],
})
export class DxcTabNavBarComponent implements DoCheck, AfterViewInit {

    @ViewChild('labelContainer') public labelContainer: ElementRef;
    public showScrollButtons = true;

    constructor(
        private el: ElementRef,
    ) {
    }

    public ngAfterViewInit() {
        this.labelContainer.nativeElement.querySelector('.mat-tab-links').style.display = 'flex';
    }

    public ngDoCheck() {
        if (this.labelContainer) {
            if (
                this.labelContainer.nativeElement.clientWidth -
                this.labelContainer.nativeElement.firstElementChild.clientWidth
                > 0
            ) {
                this.showScrollButtons = false;
            } else {
                this.showScrollButtons = true;
            }
        }

    }

    public left() {
        const el = (this.el.nativeElement as HTMLElement).querySelector('.mat-tab-label-container');
        console.log(el.clientWidth);
        el.scrollLeft -= el.clientWidth;
    }

    public right() {
        const el = this.el.nativeElement.querySelector('.mat-tab-label-container');
        el.scrollLeft += el.clientWidth;
    }
}
