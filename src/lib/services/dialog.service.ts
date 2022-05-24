/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DxcConfirmDialogComponent } from '../components/dxc-confirm-dialog/dxc-confirm-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

@Injectable()
export class DialogsService {

    constructor(private dialog: MatDialog) { }

    public confirm(title: string, message: string): Observable<boolean> {

        let dialogRef: MatDialogRef<DxcConfirmDialogComponent>;

        dialogRef = this.dialog.open(DxcConfirmDialogComponent);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;

        return dialogRef.afterClosed();
    }
}
