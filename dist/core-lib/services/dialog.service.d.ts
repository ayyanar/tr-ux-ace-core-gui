import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class DialogsService {
    private dialog;
    constructor(dialog: MatDialog);
    confirm(title: string, message: string): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DialogsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DialogsService>;
}
