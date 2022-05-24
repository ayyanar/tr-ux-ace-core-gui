import { OnDestroy, PipeTransform } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ObservablePipe implements OnDestroy, PipeTransform {
    private subject;
    private observable;
    ngOnDestroy(): void;
    transform(obj: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ObservablePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<ObservablePipe, "myObservable">;
}
