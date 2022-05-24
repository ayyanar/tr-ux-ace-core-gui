/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[regExValidationPattern]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: RegExValidatorDirective, multi: true }
    ]
})
export class RegExValidatorDirective implements Validator {
    @Input('regExValidationPattern') public regExValidationPattern: string;
    private pattern: RegExp;
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
        'hours': /^[0-1]?[0-9]|2[0-3]$/,
        'minutes': /^[0-5]?[0-9]$/,
        '9comma': /^[0-9,]{0,10}$/
    };

    public validate(c: AbstractControl): ValidationErrors {
        this.pattern = this.regexMap[this.regExValidationPattern];
        const patternChange = c.value ? c.value.toString() : '';
        if (!patternChange.match(this.pattern)) {
            return {patternErrors: true, errorMsg: 'regex.pattern.error.' + this.regExValidationPattern };
        }
    }
}
