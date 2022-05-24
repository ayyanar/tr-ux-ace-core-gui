import { Pipe } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import * as i0 from "@angular/core";
export class ObservablePipe {
    constructor() {
        this.subject = new BehaviorSubject(null);
        this.observable = this.subject.pipe(distinctUntilChanged());
    }
    ngOnDestroy() {
        this.subject.complete();
    }
    transform(obj) {
        this.subject.next(obj);
        return this.observable; // newcode
    }
}
ObservablePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ObservablePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
ObservablePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ObservablePipe, name: "myObservable", pure: false });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ObservablePipe, decorators: [{
            type: Pipe,
            args: [{ name: 'myObservable', pure: false }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL29ic2VydmFibGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxPQUFPLEVBQUUsSUFBSSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUd0RCxNQUFNLE9BQU8sY0FBYztJQUQzQjtRQUdVLFlBQU8sR0FBeUIsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUQsZUFBVSxHQUFvQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQUM7S0FVakY7SUFSUSxXQUFXO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLFNBQVMsQ0FBQyxHQUFRO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFFLFVBQVU7SUFDckMsQ0FBQzs7MkdBWlUsY0FBYzt5R0FBZCxjQUFjOzJGQUFkLGNBQWM7a0JBRDFCLElBQUk7bUJBQUMsRUFBQyxJQUFJLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVW5wdWJsaXNoZWQgd29yayDCqSAyMDE5IERYQyBUZWNobm9sb2d5IENvbXBhbnkuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVXNlLCBkdXBsaWNhdGlvbiwgYW5kL29yIGFsdGVyYXRpb24gaXMgc3ViamVjdCB0byBsaWNlbnNlIHRlcm1zLlxuICovXG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBpcGUsIE9uRGVzdHJveSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQFBpcGUoe25hbWU6ICdteU9ic2VydmFibGUnLCBwdXJlOiBmYWxzZX0pXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZVBpcGUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHByaXZhdGUgc3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuICBwcml2YXRlIG9ic2VydmFibGU6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuc3ViamVjdC5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpO1xuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YmplY3QuY29tcGxldGUoKTtcbiAgfVxuXG4gIHB1YmxpYyB0cmFuc2Zvcm0ob2JqOiBhbnkpOiBhbnkge1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KG9iaik7XG4gICAgcmV0dXJuIHRoaXMub2JzZXJ2YWJsZTsgIC8vIG5ld2NvZGVcbiAgfVxufVxuIl19