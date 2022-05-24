/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ValidationFormatterDirective {
    constructor(el) {
        this.el = el;
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
            'timeHour': /^[0-1]?[0-9]|2[0-3]$/,
            'timeMin': /^[0-5]?[0-9]$/,
            '9comma': /^[0-9,]{0,10}$/
        };
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home'];
    }
    nInput(event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        this.pattern = this.regexMap[this.validationFormat];
        const current = this.el.nativeElement.value;
        const next = current.concat(event.key);
        if (next && !String(next).match(this.pattern)) {
            event.preventDefault();
        }
    }
}
ValidationFormatterDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ValidationFormatterDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ValidationFormatterDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.2", type: ValidationFormatterDirective, selector: "[validationFormat]", inputs: { validationFormat: "validationFormat" }, host: { listeners: { "keypress": "nInput($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ValidationFormatterDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[validationFormat]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { validationFormat: [{
                type: Input,
                args: ['validationFormat']
            }], nInput: [{
                type: HostListener,
                args: ['keypress', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1mb3JtYXR0ZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9kaXJlY3RpdmVzL3ZhbGlkYXRpb24tZm9ybWF0dGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBYyxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszRSxNQUFNLE9BQU8sNEJBQTRCO0lBMkNyQyxZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQXZDbEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBaUJFO1FBQ00sYUFBUSxHQUFHO1lBQ2YsS0FBSyxFQUFFLGNBQWM7WUFDckIsTUFBTSxFQUFFLGNBQWM7WUFDdEIsTUFBTSxFQUFFLGVBQWU7WUFDdkIsWUFBWSxFQUFFLHFCQUFxQjtZQUNuQyxVQUFVLEVBQUUscUJBQXFCO1lBQ2pDLFNBQVMsRUFBRSxxQkFBcUI7WUFDaEMsYUFBYSxFQUFFLGVBQWU7WUFDOUIsYUFBYSxFQUFFLHNCQUFzQjtZQUNyQyxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLHFCQUFxQixFQUFFLCtCQUErQjtZQUN0RCxxQkFBcUIsRUFBRSwrQkFBK0I7WUFDdEQsVUFBVSxFQUFFLHNCQUFzQjtZQUNsQyxTQUFTLEVBQUUsZUFBZTtZQUMxQixRQUFRLEVBQUUsZ0JBQWdCO1NBQzdCLENBQUM7UUFDRixnREFBZ0Q7UUFDaEQsNEJBQTRCO1FBQ3BCLGdCQUFXLEdBQWEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUdwRSxDQUFDO0lBRU0sTUFBTSxDQUFDLEtBQW9CO1FBQzlCLDJDQUEyQztRQUMzQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUM1QyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDcEQsTUFBTSxPQUFPLEdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQ3BELE1BQU0sSUFBSSxHQUFXLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9DLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDM0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQzs7eUhBekRRLDRCQUE0Qjs2R0FBNUIsNEJBQTRCOzJGQUE1Qiw0QkFBNEI7a0JBSHhDLFNBQVM7bUJBQUM7b0JBQ1AsUUFBUSxFQUFFLG9CQUFvQjtpQkFDakM7aUdBRXFDLGdCQUFnQjtzQkFBakQsS0FBSzt1QkFBQyxrQkFBa0I7Z0JBNkNsQixNQUFNO3NCQURaLFlBQVk7dUJBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFVucHVibGlzaGVkIHdvcmsgwqkgMjAxOSBEWEMgVGVjaG5vbG9neSBDb21wYW55LlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFVzZSwgZHVwbGljYXRpb24sIGFuZC9vciBhbHRlcmF0aW9uIGlzIHN1YmplY3QgdG8gbGljZW5zZSB0ZXJtcy5cbiAqL1xuXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbdmFsaWRhdGlvbkZvcm1hdF0nXG59KVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRpb25Gb3JtYXR0ZXJEaXJlY3RpdmUge1xuICAgIEBJbnB1dCgndmFsaWRhdGlvbkZvcm1hdCcpIHB1YmxpYyB2YWxpZGF0aW9uRm9ybWF0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBwYXR0ZXJuOiBSZWdFeHA7XG5cbiAgICAvKlxuICAgIHByaXZhdGUgcmVnZXhNYXAgPSB7IC8vIGFkZCB5b3VyIG93blxuICAgICAgICAnOTk5JzogL14oWzAtOV0pezAsM30kL2csXG4gICAgICAgICc5OTk5JzogL14oWzAtOV0pezAsNH0kL2csXG4gICAgICAgICc5OTktJzogL14oWzAtOS1dKXswLDd9JC9nLFxuICAgICAgICAnZGVjaW1hbFR3byc6IC9eXFxkezAsNn1cXC4/XFxkezAsMn0kL2csXG4gICAgICAgICc5OTk5Ljk5OSc6IC9eXFxkezAsN31cXC4/XFxkezAsM30kL2csXG4gICAgICAgICdhbHBoYTI1JzogL14oW2EtekEtWjAtOV0pezAsMjV9JC9nLFxuICAgICAgICAnbnVtYmVyOFdpbGQnOiAvXihbMC05Kl0pezAsOH0kL2csXG4gICAgICAgICdhbHBoYTEwV2lsZCc6IC9eKFthLXpBLVowLTkqXSl7MCwxMH0kL2csXG4gICAgICAgICdhbHBoYTknOiAvXihbYS16QS1aMC05XSl7MCw5fSQvZyxcbiAgICAgICAgJ3RpbWUnOiAvXihbMC05XSl7MCwyfSQvZyxcbiAgICAgICAgJ2RhdGVGb3JtYXQnOiAvXlxcZHswLDJ9XFwvP1xcZHswLDJ9XFwvP1xcZHswLDR9JC9nLFxuICAgICAgICAndGltZUhvdXInOiAvXihbMC0xXT9bMC05XXwyWzAtM10pJC9nLFxuICAgICAgICAndGltZU1pbic6IC9eKFswLTVdP1swLTldKSQvZyxcbiAgICAgICAgXCI5Y29tbWFcIjogL14oWzAtOSxdKXswLDEwfSQvZ1xuICAgIH07XG4gICAgKi9cbiAgICBwcml2YXRlIHJlZ2V4TWFwID0geyAvLyBhZGQgeW91ciBvd25cbiAgICAgICAgJzk5OSc6IC9eWzAtOV17MCwzfSQvLFxuICAgICAgICAnOTk5OSc6IC9eWzAtOV17MCw0fSQvLFxuICAgICAgICAnOTk5LSc6IC9eWzAtOS1dezAsN30kLyxcbiAgICAgICAgJ2RlY2ltYWxUd28nOiAvXlxcZHswLDZ9XFwuP1xcZHswLDJ9JC8sXG4gICAgICAgICc5OTk5Ljk5OSc6IC9eXFxkezAsN31cXC4/XFxkezAsM30kLyxcbiAgICAgICAgJ2FscGhhMjUnOiAvXlthLXpBLVowLTldezAsMjV9JC8sXG4gICAgICAgICdudW1iZXI4V2lsZCc6IC9eWzAtOSpdezAsOH0kLyxcbiAgICAgICAgJ2FscGhhMTBXaWxkJzogL15bYS16QS1aMC05Kl17MCwxMH0kLyxcbiAgICAgICAgJ2FscGhhOSc6IC9eW2EtekEtWjAtOV17MCw5fSQvLFxuICAgICAgICAndGltZSc6IC9eWzAtOV17MCwyfSQvLFxuICAgICAgICAnZGF0ZUZvcm1hdF9NL0QvWVlZWSc6IC9eXFxkezAsMn1cXC8/XFxkezAsMn1cXC8/XFxkezAsNH0kLyxcbiAgICAgICAgJ2RhdGVGb3JtYXRfTS1ELVlZWVknOiAvXlxcZHswLDJ9XFwtP1xcZHswLDJ9XFwtP1xcZHswLDR9JC8sXG4gICAgICAgICd0aW1lSG91cic6IC9eWzAtMV0/WzAtOV18MlswLTNdJC8sXG4gICAgICAgICd0aW1lTWluJzogL15bMC01XT9bMC05XSQvLFxuICAgICAgICAnOWNvbW1hJzogL15bMC05LF17MCwxMH0kL1xuICAgIH07XG4gICAgLy8gQWxsb3cga2V5IGNvZGVzIGZvciBzcGVjaWFsIGV2ZW50cy4gUmVmbGVjdCA6XG4gICAgLy8gQmFja3NwYWNlLCB0YWIsIGVuZCwgaG9tZVxuICAgIHByaXZhdGUgc3BlY2lhbEtleXM6IHN0cmluZ1tdID0gWydCYWNrc3BhY2UnLCAnVGFiJywgJ0VuZCcsICdIb21lJ107XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgfVxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleXByZXNzJywgWyckZXZlbnQnXSlcbiAgICBwdWJsaWMgbklucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vIEFsbG93IEJhY2tzcGFjZSwgdGFiLCBlbmQsIGFuZCBob21lIGtleXNcbiAgICAgICAgaWYgKHRoaXMuc3BlY2lhbEtleXMuaW5kZXhPZihldmVudC5rZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGF0dGVybiA9IHRoaXMucmVnZXhNYXBbdGhpcy52YWxpZGF0aW9uRm9ybWF0XTtcbiAgICAgICAgY29uc3QgY3VycmVudDogc3RyaW5nID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgICBjb25zdCBuZXh0OiBzdHJpbmcgPSBjdXJyZW50LmNvbmNhdChldmVudC5rZXkpO1xuICAgICAgICBpZiAobmV4dCAmJiAhU3RyaW5nKG5leHQpLm1hdGNoKHRoaXMucGF0dGVybikpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=