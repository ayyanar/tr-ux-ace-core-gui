/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { Injectable } from '@angular/core';
import { DxcConfirmDialogComponent } from '../components/dxc-confirm-dialog/dxc-confirm-dialog.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
export class DialogsService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    confirm(title, message) {
        let dialogRef;
        dialogRef = this.dialog.open(DxcConfirmDialogComponent);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    }
}
DialogsService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DialogsService, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Injectable });
DialogsService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DialogsService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DialogsService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGliL3NlcnZpY2VzL2RpYWxvZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFFSCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtEQUErRCxDQUFDOzs7QUFJMUcsTUFBTSxPQUFPLGNBQWM7SUFFdkIsWUFBb0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFJLENBQUM7SUFFbkMsT0FBTyxDQUFDLEtBQWEsRUFBRSxPQUFlO1FBRXpDLElBQUksU0FBa0QsQ0FBQztRQUV2RCxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUV4RCxTQUFTLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUMxQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUU5QyxPQUFPLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNuQyxDQUFDOzsyR0FkUSxjQUFjOytHQUFkLGNBQWM7MkZBQWQsY0FBYztrQkFEMUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBVbnB1Ymxpc2hlZCB3b3JrIMKpIDIwMTkgRFhDIFRlY2hub2xvZ3kgQ29tcGFueS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBVc2UsIGR1cGxpY2F0aW9uLCBhbmQvb3IgYWx0ZXJhdGlvbiBpcyBzdWJqZWN0IHRvIGxpY2Vuc2UgdGVybXMuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRHhjQ29uZmlybURpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvZHhjLWNvbmZpcm0tZGlhbG9nL2R4Yy1jb25maXJtLWRpYWxvZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGlhbG9nc1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkaWFsb2c6IE1hdERpYWxvZykgeyB9XG5cbiAgICBwdWJsaWMgY29uZmlybSh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcblxuICAgICAgICBsZXQgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RHhjQ29uZmlybURpYWxvZ0NvbXBvbmVudD47XG5cbiAgICAgICAgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihEeGNDb25maXJtRGlhbG9nQ29tcG9uZW50KTtcblxuICAgICAgICBkaWFsb2dSZWYuY29tcG9uZW50SW5zdGFuY2UudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgZGlhbG9nUmVmLmNvbXBvbmVudEluc3RhbmNlLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXG4gICAgICAgIHJldHVybiBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKTtcbiAgICB9XG59XG4iXX0=