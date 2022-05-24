/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import {
    Component,
    OnInit,
    forwardRef,
    Input,
    Output,
    OnChanges,
    AfterViewInit,
    EventEmitter,
    ViewChild,
    ElementRef,
    HostListener,
    ViewEncapsulation
} from '@angular/core';
import {
    FormControl,
    ControlValueAccessor,
    NG_VALUE_ACCESSOR
} from '@angular/forms';
// import { CustomFieldsAbstractClass } from '../custom-fields-abstract-class';
import { MatChipInputEvent } from '@angular/material/chips';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { CdkPortal, TemplatePortalDirective } from '@angular/cdk/portal';
import {
    Overlay,
    OverlayConfig,
    OverlayRef,
    CdkOverlayOrigin
} from '@angular/cdk/overlay';
import { tap } from 'rxjs/operators';

const COMMA = 188;
const ENTER = 13;
// tslint:disable:no-forward-ref
@Component({
    selector: 'dxc-chips',
    templateUrl: 'dxc-chips.component.html',
    styleUrls: ['dxc-chips.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DxcChipsComponent),
            multi: true
        }
    ]
})
export class DxcChipsComponent implements ControlValueAccessor, OnInit {
    @Input() public forEdit: any; // to be removed
    @Input() public placeholder: string;
    @Input() public inputValidationFormat: string;
    @Input()
    public maxChipsAllow: number;
    @Input()
    public maxChipsShow: number;
    @Input() public isValid: boolean = true;
    @Input() public inputPattern: string | RegExp = '';

    @Output() public forSave = new EventEmitter(); // to be removed

    // @HostListener('document:keydown', ['$event'])
    // onEscapePress(event: KeyboardEvent) {
    //     if (event.keyCode === 27) {
    //         this.closeAddCondition();
    //     }
    // }

    // public visible: boolean = true;
    public chipListCtrl: FormControl = new FormControl();
    public selectable: boolean = true;
    public removable: boolean = true;
    public addOnBlur: boolean = true;
    public isShowMoreVisible: boolean = false;
    public startIndex: number = 0;

    public separatorKeysCodes = [ENTER, COMMA];
    public selectedChips = [];
    public showChips = [];
    public overlayRef: OverlayRef;
    public isDisabled: boolean = false;

    public isPasted: boolean = false;
    public pasteText: string = '';

    @ViewChild('addConditionOrigin') private addConditionOrigin: CdkOverlayOrigin;
    @ViewChild('addConditionTemplate')
    private addConditionTemplate: CdkPortal;
    @ViewChild('chipparent', { read: ElementRef })
    private chipParent: ElementRef;
    @ViewChild('chipinput') private chipInput: ElementRef;

    public constructor(public overlay: Overlay) { }

    // tslint:disable:no-empty
    public propagateChange: any = () => { };

    public ngOnInit() {
        this.ForEditControl(this.forEdit);
        this.placeholder = this.placeholder || '';
        this.inputValidationFormat = this.inputValidationFormat || '';
        this.maxChipsAllow  = this.maxChipsAllow ? this.maxChipsAllow : 4;
        this.maxChipsShow =  this.maxChipsAllow ? this.maxChipsAllow : 0;
    }

    public writeValue(obj): void {
        this.selectedChips = [];
        this.showChips = this.setShowChips(this.selectedChips);
        if (this.chipInput) {
            (this.chipInput.nativeElement as HTMLInputElement).value = '';
        }      
        // console.log((this.chipInput.nativeElement as MatInput).empty);
        this.ForEditControl(obj);
        this.placeholder = this.placeholder || '';
        this.inputValidationFormat = this.inputValidationFormat || '';
        // this.chipListCtrl.setValue('');
        // this.chipListCtrl.reset();
    }
    public registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }
    public registerOnTouched(fn: any): void { }

    public setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
        if (isDisabled) {
            this.chipListCtrl.disable();
        } else {
            this.chipListCtrl.enable();
        }
    }

    public onPaste(event: ClipboardEvent) {
        if (!this.isDisabled) {
            const regexp = new RegExp(this.inputPattern);
            const pastedItems = event.clipboardData
                .getData('Text')
                .split(/[.]|[,]|[\s]|[\r]|[\n]/)
                .filter((value) => value.trim() !== '');
            let i = 0;
            for (const item of pastedItems) {
                if (this.selectedChips.filter((obj) => obj.value === item).length === 0) {
                    this.selectedChips.push({
                        value: item,
                        valid: regexp.test(item)
                    });
                    i++;
                }
                if (this.selectedChips.length >= this.maxChipsAllow) {
                    this.pasteText = i + ' of ' + pastedItems.length + ' items pasted. Max count reached';
                    console.log(this.pasteText);
                    break;
                }
            }
            this.isPasted = true;
            if (this.pasteText === '') {
                this.pasteText = i + ' of ' + pastedItems.length + ' items pasted.';
            }
            setTimeout(() => {
                this.isPasted = false;
                this.pasteText = '';
            }, 3000);
            this.showChips = this.setShowChips(this.selectedChips);
            this.returnData(this.selectedChips);
        }
        event.preventDefault();
    }

    public add(event: MatChipInputEvent): void {
        const regexp = new RegExp(this.inputPattern);
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            if (this.selectedChips.filter((s) => s.value === value).length <= 0) {
                this.selectedChips.push({
                    value: value.trim(),
                    valid: regexp.test(value.trim())
                });
            }
            // this.selectedChips.push(value.trim());
            // console.log('selectedChips:' + this.selectedChips);
            this.showChips = this.setShowChips(this.selectedChips);
            // input.focus();
            (this.chipInput.nativeElement as HTMLInputElement).focus();
            // console.log("focus");
        }
        if (input) {
            input.value = '';
        }
        this.returnData(this.selectedChips);
        this.forSave.emit(this.selectedChips);
    }

    public setShowChips(chips: any[]): any {
        if (this.maxChipsShow === 0) {
            return chips;
        }
        this.startIndex =
            chips.length > this.maxChipsShow ? chips.length - this.maxChipsShow : 0;
        this.isShowMoreVisible = this.startIndex > 0 ? true : false;
        // console.log('startIndex:' + this.startIndex + '||endIndex:' + chips.length);
        // console.log('selectedChips:' + this.selectedChips);
        return chips.slice(this.startIndex);
    }

    public remove(chip: any, index: number, deleteType: string): void {
        console.log("dxc chips remove call");
        // const index = this.selectedChips.indexOf(chip);
        if (!this.isDisabled) {
            if (deleteType === 'idel') {
                index = this.startIndex + index;
            }
            if (index >= 0) {
                this.selectedChips.splice(index, 1);
                // console.log('selectedChips:' + this.selectedChips);

                this.showChips = this.setShowChips(this.selectedChips);
                if (deleteType === 'idel') {
                    (this.chipInput.nativeElement as HTMLInputElement).focus();
                }
            }
            if (this.selectedChips.length === 0) {
                this.closeAllChips();
            }
            this.returnData(this.selectedChips);
            this.forSave.emit(this.selectedChips);
        }
    }

    public returnData(value) {
        const output: string[] = [];
        for (const item of value) {
            output.push(item.value);
        }
        this.propagateChange(output);
    }

    public ForEditControl(value: any[]) {
        const regexp = new RegExp(this.inputPattern);
        if (
            value &&
            value !== null &&
            value.length >= 1 &&
            (this.selectedChips === undefined || this.selectedChips.length < 1)
        ) {
            for (const item of value) {
                this.selectedChips.push({
                    value: item.trim(),
                    valid: regexp.test(item.trim())
                });
                if (this.selectedChips.length >= this.maxChipsAllow) {
                    break;
                }
            }
            // this.selectedChips = value.length > this.maxChipsAllow ?  value.slice(0, this.maxChipsAllow) : value;
            this.showChips = this.setShowChips(this.selectedChips);
        }
    }

    public showAllChips() {
        // console.log(this.chipParent.nativeElement);
        /*const strategy = this.overlay
            .position()
            .connectedTo(
                this.addConditionOrigin.elementRef,
                { originX: 'end', originY: 'bottom' },
                { overlayX: 'end', overlayY: 'top' }
            );*/

        /*const strategy = this.overlay.position()
        .flexibleConnectedTo(this.addConditionOrigin.elementRef)
        .withPositions([{
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
        }, {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
        }]);*/

        const strategy = this.overlay.position()
        .flexibleConnectedTo(this.addConditionOrigin.elementRef)
        .withPositions([{
            originX: 'end',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
        }, {
            originX: 'start',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'top',
        }]);

        const config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            positionStrategy: strategy,
            width: this.chipParent.nativeElement.getBoundingClientRect().width
        });
        this.overlayRef = this.overlay.create(config);
        this.overlayRef.attach(this.addConditionTemplate);
        this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
        this.overlayRef.keydownEvents().subscribe((event: KeyboardEvent) => {
            if (event.keyCode === 27) {
                // this.overlayRef.detach();
                this.closeAllChips();
            }
        });
    }

    public closeAllChips() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            (this.chipInput.nativeElement as HTMLInputElement).focus();
        }
    }
}
