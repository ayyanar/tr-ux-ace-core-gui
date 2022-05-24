import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ValidationFormatterDirective {
    private el;
    validationFormat: string;
    private pattern;
    private regexMap;
    private specialKeys;
    constructor(el: ElementRef);
    nInput(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ValidationFormatterDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<ValidationFormatterDirective, "[validationFormat]", never, { "validationFormat": "validationFormat"; }, {}, never>;
}
