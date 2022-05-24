/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
import * as i0 from "@angular/core";
export class RegExValidatorDirective {
    constructor() {
        this.regexMap = {
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
    }
    validate(c) {
        this.pattern = this.regexMap[this.regExValidationPattern];
        const patternChange = c.value ? c.value.toString() : '';
        if (!patternChange.match(this.pattern)) {
            return { patternErrors: true, errorMsg: 'regex.pattern.error.' + this.regExValidationPattern };
        }
    }
}
RegExValidatorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: RegExValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RegExValidatorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.2", type: RegExValidatorDirective, selector: "[regExValidationPattern]", inputs: { regExValidationPattern: "regExValidationPattern" }, providers: [
        { provide: NG_VALIDATORS, useExisting: RegExValidatorDirective, multi: true }
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: RegExValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[regExValidationPattern]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: RegExValidatorDirective, multi: true }
                    ]
                }]
        }], propDecorators: { regExValidationPattern: [{
                type: Input,
                args: ['regExValidationPattern']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnZXgtdmFsaWRhdG9yLWRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvZGlyZWN0aXZlcy9yZWdleC12YWxpZGF0b3ItZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQThCLGFBQWEsRUFBb0IsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFRN0YsTUFBTSxPQUFPLHVCQUF1QjtJQU5wQztRQVNZLGFBQVEsR0FBRztZQUNmLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLE1BQU0sRUFBRSxlQUFlO1lBQ3ZCLFlBQVksRUFBRSxxQkFBcUI7WUFDbkMsVUFBVSxFQUFFLHFCQUFxQjtZQUNqQyxTQUFTLEVBQUUscUJBQXFCO1lBQ2hDLGFBQWEsRUFBRSxlQUFlO1lBQzlCLGFBQWEsRUFBRSxzQkFBc0I7WUFDckMsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixNQUFNLEVBQUUsY0FBYztZQUN0QixxQkFBcUIsRUFBRSwrQkFBK0I7WUFDdEQscUJBQXFCLEVBQUUsK0JBQStCO1lBQ3RELE9BQU8sRUFBRSxzQkFBc0I7WUFDL0IsU0FBUyxFQUFFLGVBQWU7WUFDMUIsUUFBUSxFQUFFLGdCQUFnQjtTQUM3QixDQUFDO0tBU0w7SUFQVSxRQUFRLENBQUMsQ0FBa0I7UUFDOUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1FBQzFELE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDcEMsT0FBTyxFQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1NBQ2pHO0lBQ0wsQ0FBQzs7b0hBM0JRLHVCQUF1Qjt3R0FBdkIsdUJBQXVCLGlIQUpyQjtRQUNQLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtLQUNoRjsyRkFFUSx1QkFBdUI7a0JBTm5DLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsU0FBUyxFQUFFO3dCQUNQLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLHlCQUF5QixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQ2hGO2lCQUNKOzhCQUUyQyxzQkFBc0I7c0JBQTdELEtBQUs7dUJBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFVucHVibGlzaGVkIHdvcmsgwqkgMjAxOSBEWEMgVGVjaG5vbG9neSBDb21wYW55LlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFVzZSwgZHVwbGljYXRpb24sIGFuZC9vciBhbHRlcmF0aW9uIGlzIHN1YmplY3QgdG8gbGljZW5zZSB0ZXJtcy5cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWYWxpZGF0b3IsIEFic3RyYWN0Q29udHJvbCwgTkdfVkFMSURBVE9SUywgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbcmVnRXhWYWxpZGF0aW9uUGF0dGVybl0nLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBSZWdFeFZhbGlkYXRvckRpcmVjdGl2ZSwgbXVsdGk6IHRydWUgfVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUmVnRXhWYWxpZGF0b3JEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3Ige1xuICAgIEBJbnB1dCgncmVnRXhWYWxpZGF0aW9uUGF0dGVybicpIHB1YmxpYyByZWdFeFZhbGlkYXRpb25QYXR0ZXJuOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXR0ZXJuOiBSZWdFeHA7XG4gICAgcHJpdmF0ZSByZWdleE1hcCA9IHsgLy8gYWRkIHlvdXIgb3duXG4gICAgICAgICc5OTknOiAvXlswLTldezAsM30kLyxcbiAgICAgICAgJzk5OTknOiAvXlswLTldezAsNH0kLyxcbiAgICAgICAgJzk5OS0nOiAvXlswLTktXXswLDd9JC8sXG4gICAgICAgICdkZWNpbWFsVHdvJzogL15cXGR7MCw2fVxcLj9cXGR7MCwyfSQvLFxuICAgICAgICAnOTk5OS45OTknOiAvXlxcZHswLDd9XFwuP1xcZHswLDN9JC8sXG4gICAgICAgICdhbHBoYTI1JzogL15bYS16QS1aMC05XXswLDI1fSQvLFxuICAgICAgICAnbnVtYmVyOFdpbGQnOiAvXlswLTkqXXswLDh9JC8sXG4gICAgICAgICdhbHBoYTEwV2lsZCc6IC9eW2EtekEtWjAtOSpdezAsMTB9JC8sXG4gICAgICAgICdhbHBoYTknOiAvXlthLXpBLVowLTldezAsOX0kLyxcbiAgICAgICAgJ3RpbWUnOiAvXlswLTldezAsMn0kLyxcbiAgICAgICAgJ2RhdGVGb3JtYXRfTS9EL1lZWVknOiAvXlxcZHswLDJ9XFwvP1xcZHswLDJ9XFwvP1xcZHswLDR9JC8sXG4gICAgICAgICdkYXRlRm9ybWF0X00tRC1ZWVlZJzogL15cXGR7MCwyfVxcLT9cXGR7MCwyfVxcLT9cXGR7MCw0fSQvLFxuICAgICAgICAnaG91cnMnOiAvXlswLTFdP1swLTldfDJbMC0zXSQvLFxuICAgICAgICAnbWludXRlcyc6IC9eWzAtNV0/WzAtOV0kLyxcbiAgICAgICAgJzljb21tYSc6IC9eWzAtOSxdezAsMTB9JC9cbiAgICB9O1xuXG4gICAgcHVibGljIHZhbGlkYXRlKGM6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMge1xuICAgICAgICB0aGlzLnBhdHRlcm4gPSB0aGlzLnJlZ2V4TWFwW3RoaXMucmVnRXhWYWxpZGF0aW9uUGF0dGVybl07XG4gICAgICAgIGNvbnN0IHBhdHRlcm5DaGFuZ2UgPSBjLnZhbHVlID8gYy52YWx1ZS50b1N0cmluZygpIDogJyc7XG4gICAgICAgIGlmICghcGF0dGVybkNoYW5nZS5tYXRjaCh0aGlzLnBhdHRlcm4pKSB7XG4gICAgICAgICAgICByZXR1cm4ge3BhdHRlcm5FcnJvcnM6IHRydWUsIGVycm9yTXNnOiAncmVnZXgucGF0dGVybi5lcnJvci4nICsgdGhpcy5yZWdFeFZhbGlkYXRpb25QYXR0ZXJuIH07XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=