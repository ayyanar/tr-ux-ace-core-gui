/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { Injectable } from '@angular/core';
import { NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';
import { MessageType } from './message';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class MessageService {
    constructor(router) {
        this.router = router;
        this.subject = new Subject();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert messages
                    this.clear();
                }
            }
        });
    }
    getMessage() {
        return this.subject.asObservable();
    }
    success(message, keepAfterRouteChange = false) {
        this.alert(MessageType.Success, message, keepAfterRouteChange);
    }
    error(message, keepAfterRouteChange = false) {
        this.alert(MessageType.Error, message, keepAfterRouteChange);
    }
    info(message, keepAfterRouteChange = false) {
        this.alert(MessageType.Info, message, keepAfterRouteChange);
    }
    warn(message, keepAfterRouteChange = false) {
        this.alert(MessageType.Warning, message, keepAfterRouteChange);
    }
    clear() {
        // clear alerts
        this.subject.next(null);
    }
    alert(pType, pMessage, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: pType, message: pMessage });
    }
}
MessageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MessageService, deps: [{ token: i1.Router }], target: i0.ɵɵFactoryTarget.Injectable });
MessageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MessageService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MessageService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFVLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTFELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFXLFdBQVcsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7O0FBR2pELE1BQU0sT0FBTyxjQUFjO0lBSXZCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSDFCLFlBQU8sR0FBRyxJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ2pDLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQUdqQyxrRkFBa0Y7UUFDbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbkMsSUFBSSxLQUFLLFlBQVksZUFBZSxFQUFFO2dCQUNsQyxJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtvQkFDM0Isc0NBQXNDO29CQUN0QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsS0FBSyxDQUFDO2lCQUNyQztxQkFBTTtvQkFDSCx1QkFBdUI7b0JBQ3ZCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDaEI7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLFVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVNLE9BQU8sQ0FBQyxPQUFlLEVBQUUsb0JBQW9CLEdBQUcsS0FBSztRQUN4RCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFlLEVBQUUsb0JBQW9CLEdBQUcsS0FBSztRQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFlLEVBQUUsb0JBQW9CLEdBQUcsS0FBSztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVNLElBQUksQ0FBQyxPQUFlLEVBQUUsb0JBQW9CLEdBQUcsS0FBSztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVNLEtBQUs7UUFDUixlQUFlO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFTyxLQUFLLENBQUMsS0FBa0IsRUFBRSxRQUFnQixFQUFFLG9CQUFvQixHQUFHLEtBQUs7UUFDNUUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLG9CQUFvQixDQUFDO1FBQ2pELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFhLENBQUMsQ0FBQztJQUNyRSxDQUFDOzsyR0EvQ1EsY0FBYzsrR0FBZCxjQUFjOzJGQUFkLGNBQWM7a0JBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVW5wdWJsaXNoZWQgd29yayDCqSAyMDE5IERYQyBUZWNobm9sb2d5IENvbXBhbnkuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVXNlLCBkdXBsaWNhdGlvbiwgYW5kL29yIGFsdGVyYXRpb24gaXMgc3ViamVjdCB0byBsaWNlbnNlIHRlcm1zLlxuICovXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciwgTmF2aWdhdGlvblN0YXJ0IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgTWVzc2FnZSwgTWVzc2FnZVR5cGUgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICAgIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PE1lc3NhZ2U+KCk7XG4gICAgcHJpdmF0ZSBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICAvLyBjbGVhciBhbGVydCBtZXNzYWdlcyBvbiByb3V0ZSBjaGFuZ2UgdW5sZXNzICdrZWVwQWZ0ZXJSb3V0ZUNoYW5nZScgZmxhZyBpcyB0cnVlXG4gICAgICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5rZWVwQWZ0ZXJSb3V0ZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IGtlZXAgZm9yIGEgc2luZ2xlIHJvdXRlIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xlYXIgYWxlcnQgbWVzc2FnZXNcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldE1lc3NhZ2UoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3VjY2VzcyhtZXNzYWdlOiBzdHJpbmcsIGtlZXBBZnRlclJvdXRlQ2hhbmdlID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5hbGVydChNZXNzYWdlVHlwZS5TdWNjZXNzLCBtZXNzYWdlLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGVycm9yKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmFsZXJ0KE1lc3NhZ2VUeXBlLkVycm9yLCBtZXNzYWdlLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSk7XG4gICAgfVxuXG4gICAgcHVibGljIGluZm8obWVzc2FnZTogc3RyaW5nLCBrZWVwQWZ0ZXJSb3V0ZUNoYW5nZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuYWxlcnQoTWVzc2FnZVR5cGUuSW5mbywgbWVzc2FnZSwga2VlcEFmdGVyUm91dGVDaGFuZ2UpO1xuICAgIH1cblxuICAgIHB1YmxpYyB3YXJuKG1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmFsZXJ0KE1lc3NhZ2VUeXBlLldhcm5pbmcsIG1lc3NhZ2UsIGtlZXBBZnRlclJvdXRlQ2hhbmdlKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgICAgIC8vIGNsZWFyIGFsZXJ0c1xuICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KG51bGwpOyBcbiAgICB9XG5cbiAgICBwcml2YXRlIGFsZXJ0KHBUeXBlOiBNZXNzYWdlVHlwZSwgcE1lc3NhZ2U6IHN0cmluZywga2VlcEFmdGVyUm91dGVDaGFuZ2UgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmtlZXBBZnRlclJvdXRlQ2hhbmdlID0ga2VlcEFmdGVyUm91dGVDaGFuZ2U7XG4gICAgICAgIHRoaXMuc3ViamVjdC5uZXh0KHsgdHlwZTogcFR5cGUsIG1lc3NhZ2U6IHBNZXNzYWdlIH0gYXMgTWVzc2FnZSk7XG4gICAgfVxufVxuIl19