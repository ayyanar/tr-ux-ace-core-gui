import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class MessageService {
    private router;
    private subject;
    private keepAfterRouteChange;
    constructor(router: Router);
    getMessage(): Observable<any>;
    success(message: string, keepAfterRouteChange?: boolean): void;
    error(message: string, keepAfterRouteChange?: boolean): void;
    info(message: string, keepAfterRouteChange?: boolean): void;
    warn(message: string, keepAfterRouteChange?: boolean): void;
    clear(): void;
    private alert;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MessageService>;
}
