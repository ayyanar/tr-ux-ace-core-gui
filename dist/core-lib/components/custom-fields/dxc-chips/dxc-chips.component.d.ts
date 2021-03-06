import { OnInit, EventEmitter } from '@angular/core';
import { FormControl, ControlValueAccessor } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export declare class DxcChipsComponent implements ControlValueAccessor, OnInit {
    overlay: Overlay;
    forEdit: any;
    placeholder: string;
    inputValidationFormat: string;
    maxChipsAllow: number;
    maxChipsShow: number;
    isValid: boolean;
    inputPattern: string | RegExp;
    forSave: EventEmitter<any>;
    chipListCtrl: FormControl;
    selectable: boolean;
    removable: boolean;
    addOnBlur: boolean;
    isShowMoreVisible: boolean;
    startIndex: number;
    separatorKeysCodes: number[];
    selectedChips: any[];
    showChips: any[];
    overlayRef: OverlayRef;
    isDisabled: boolean;
    isPasted: boolean;
    pasteText: string;
    private addConditionOrigin;
    private addConditionTemplate;
    private chipParent;
    private chipInput;
    constructor(overlay: Overlay);
    propagateChange: any;
    ngOnInit(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    onPaste(event: ClipboardEvent): void;
    add(event: MatChipInputEvent): void;
    setShowChips(chips: any[]): any;
    remove(chip: any, index: number, deleteType: string): void;
    returnData(value: any): void;
    ForEditControl(value: any[]): void;
    showAllChips(): void;
    closeAllChips(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DxcChipsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DxcChipsComponent, "dxc-chips", never, { "forEdit": "forEdit"; "placeholder": "placeholder"; "inputValidationFormat": "inputValidationFormat"; "maxChipsAllow": "maxChipsAllow"; "maxChipsShow": "maxChipsShow"; "isValid": "isValid"; "inputPattern": "inputPattern"; }, { "forSave": "forSave"; }, never, ["mat-error"]>;
}
