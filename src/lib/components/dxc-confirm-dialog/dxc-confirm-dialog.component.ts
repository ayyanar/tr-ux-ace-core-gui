/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './dxc-confirm-dialog.component.html',
  styleUrls: ['./dxc-confirm-dialog.component.scss']
})
export class DxcConfirmDialogComponent {
    public title: string;
    public message: string;

    constructor(public dialogRef: MatDialogRef<DxcConfirmDialogComponent>) {}
}
