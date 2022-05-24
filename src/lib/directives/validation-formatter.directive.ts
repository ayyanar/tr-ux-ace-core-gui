/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[validationFormat]'
})
export class ValidationFormatterDirective {
    @Input('validationFormat') public validationFormat: string;
    private pattern: RegExp;

    /*
    private regexMap = { // add your own
        '999': /^([0-9]){0,3}$/g,
        '9999': /^([0-9]){0,4}$/g,
        '999-': /^([0-9-]){0,7}$/g,
        'decimalTwo': /^\d{0,6}\.?\d{0,2}$/g,
        '9999.999': /^\d{0,7}\.?\d{0,3}$/g,
        'alpha25': /^([a-zA-Z0-9]){0,25}$/g,
        'number8Wild': /^([0-9*]){0,8}$/g,
        'alpha10Wild': /^([a-zA-Z0-9*]){0,10}$/g,
        'alpha9': /^([a-zA-Z0-9]){0,9}$/g,
        'time': /^([0-9]){0,2}$/g,
        'dateFormat': /^\d{0,2}\/?\d{0,2}\/?\d{0,4}$/g,
        'timeHour': /^([0-1]?[0-9]|2[0-3])$/g,
        'timeMin': /^([0-5]?[0-9])$/g,
        "9comma": /^([0-9,]){0,10}$/g
    };
    */
    private regexMap = { // add your own
        '999': /^[0-9]{0,3}$/,
        '9999': /^[0-9]{0,4}$/,
        '999-': /^[0-9-]{0,7}$/,
        'decimalTwo': /^\d{0,6}\.?\d{0,2}$/,
        '9999.999': /^\d{0,7}\.?\d{0,3}$/,
        'alpha25': /^[a-zA-Z0-9]{0,25}$/,
        'number8Wild': /^[0-9*]{0,8}$/,
        'alpha10Wild': /^[a-zA-Z0-9*]{0,10}$/,
        'alpha9': /^[a-zA-Z0-9]{0,9}$/,
        'time': /^[0-9]{0,2}$/,
        'dateFormat_M/D/YYYY': /^\d{0,2}\/?\d{0,2}\/?\d{0,4}$/,
        'dateFormat_M-D-YYYY': /^\d{0,2}\-?\d{0,2}\-?\d{0,4}$/,
        'timeHour': /^[0-1]?[0-9]|2[0-3]$/,
        'timeMin': /^[0-5]?[0-9]$/,
        '9comma': /^[0-9,]{0,10}$/
    };
    // Allow key codes for special events. Reflect :
    // Backspace, tab, end, home
    private specialKeys: string[] = ['Backspace', 'Tab', 'End', 'Home'];

    constructor(private el: ElementRef) {
    }
    @HostListener('keypress', ['$event'])
    public nInput(event: KeyboardEvent) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        this.pattern = this.regexMap[this.validationFormat];
        const current: string = this.el.nativeElement.value;
        const next: string = current.concat(event.key);
        if (next && !String(next).match(this.pattern)) {
            event.preventDefault();
        }
    }
}
