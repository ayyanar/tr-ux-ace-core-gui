/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { Component, ViewChild, HostBinding } from '@angular/core';
import { MessageType } from '../../services/message';
import { OverlayConfig } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
import * as i1 from "../../services/message.service";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/material/icon";
import * as i4 from "@angular/common";
import * as i5 from "@angular/cdk/portal";
export class DxcAlertMessageComponent {
    constructor(messageService, overlay, viewContainerRef) {
        this.messageService = messageService;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.messages = [];
        this.backColor = '#FFF';
        this.messageService.getMessage().subscribe((alert) => {
            if (!alert) {
                // clear alerts when an empty alert is received
                this.messages = [];
                return;
            }
            // add alert to array
            this.messages.push(alert);
            // console.log(this.messages)
        });
    }
    ngOnInit() {
        // no code
    }
    showAllMessages() {
        /*  const strategy = this.overlay.position()
          .connectedTo(
              this.messageOrigin.elementRef,
              {originX: 'start', originY: 'bottom'},
              {overlayX: 'start', overlayY: 'top'} ); */
        const strategy = this.overlay.position()
            .flexibleConnectedTo(this.messageOrigin.elementRef)
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
            }]);
        const config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            positionStrategy: strategy
        });
        const overlayRef = this.overlay.create(config);
        overlayRef.attach(this.messageTemplate);
        overlayRef.backdropClick().subscribe(() => overlayRef.detach());
    }
    removeAlert(alert) {
        this.messageService.clear();
    }
    cssClass(alert) {
        if (!alert) {
            return;
        }
        // return css class based on alert type
        switch (alert.type) {
            case MessageType.Success:
                return 'alert alert-success';
            case MessageType.Error:
                return 'alert alert-danger';
            case MessageType.Info:
                return 'alert alert-info';
            case MessageType.Warning:
                return 'alert alert-warning';
            default:
        }
    }
}
DxcAlertMessageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAlertMessageComponent, deps: [{ token: i1.MessageService }, { token: i2.Overlay }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
DxcAlertMessageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcAlertMessageComponent, selector: "dxc-alert-message", host: { properties: { "style.background-color": "this.backColor" } }, viewQueries: [{ propertyName: "messageOrigin", first: true, predicate: ["messageOrigin"], descendants: true }, { propertyName: "messageTemplate", first: true, predicate: ["messageTemplate"], descendants: true }], ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<div *ngIf=\"messages.length > 0\" class=\"{{ cssClass(messages[0]) }} alert-dismissable\">\n    <mat-icon role=\"button\" (click)=\"removeAlert(messages[0])\" class=\"alert-close\">close</mat-icon>\n    <ng-container [ngSwitch]=\"messages[0].type\">\n        <mat-icon *ngSwitchCase=\"0\">check_circle</mat-icon>\n        <mat-icon *ngSwitchCase=\"1\">error</mat-icon>\n        <mat-icon *ngSwitchCase=\"2\">info</mat-icon>\n        <mat-icon *ngSwitchCase=\"3\">warning</mat-icon>\n        <mat-icon *ngSwitchDefault>notifications</mat-icon>\n    </ng-container>\n    <span class=\"alert-text\" cdk-overlay-origin #messageOrigin=\"cdkOverlayOrigin\" (click)=\"showAllMessages()\">{{messages[0].message}}</span>\n    <div *ngIf=\"messages.length > 1\" class=\"alert-count\" (click)=\"showAllMessages()\">{{messages.length}}</div>\n</div>\n<ng-template cdk-portal #messageTemplate=\"cdkPortal\">\n    <ul class=\"alert-popup mat-elevation-z6\">\n        <li *ngFor=\"let msg of messages\" class=\"{{ cssClass(msg) }}\">\n            <ng-container [ngSwitch]=\"msg.type\">\n                <mat-icon *ngSwitchCase=\"0\">check_circle</mat-icon>\n                <mat-icon *ngSwitchCase=\"1\">error</mat-icon>\n                <mat-icon *ngSwitchCase=\"2\">info</mat-icon>\n                <mat-icon *ngSwitchCase=\"3\">warning</mat-icon>\n                <mat-icon *ngSwitchDefault>notifications</mat-icon>\n            </ng-container>\n\n            <span class=\"alert-text\">{{msg.message}}</span>\n        </li>\n    </ul>\n</ng-template>", styles: ["@charset \"UTF-8\";.alert-dismissable{width:800px;margin-left:auto;margin-right:auto;display:flex;flex-direction:row;cursor:pointer;border-width:0}.alert-dismissable .alert-close{cursor:pointer;margin-right:16px}.alert-dismissable .alert-count{padding:0 8px;border-radius:50%}.alert-popup{width:800px;margin-top:16px;margin-left:-70px;padding:8px;list-style-type:none;max-height:50vh;overflow-y:auto}.alert{padding:8px;display:flex}.alert-text{flex:1 1 auto}\n"], components: [{ type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i4.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i4.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: i2.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { type: i5.TemplatePortalDirective, selector: "[cdk-portal], [portal]", exportAs: ["cdkPortal"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAlertMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-alert-message', template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<div *ngIf=\"messages.length > 0\" class=\"{{ cssClass(messages[0]) }} alert-dismissable\">\n    <mat-icon role=\"button\" (click)=\"removeAlert(messages[0])\" class=\"alert-close\">close</mat-icon>\n    <ng-container [ngSwitch]=\"messages[0].type\">\n        <mat-icon *ngSwitchCase=\"0\">check_circle</mat-icon>\n        <mat-icon *ngSwitchCase=\"1\">error</mat-icon>\n        <mat-icon *ngSwitchCase=\"2\">info</mat-icon>\n        <mat-icon *ngSwitchCase=\"3\">warning</mat-icon>\n        <mat-icon *ngSwitchDefault>notifications</mat-icon>\n    </ng-container>\n    <span class=\"alert-text\" cdk-overlay-origin #messageOrigin=\"cdkOverlayOrigin\" (click)=\"showAllMessages()\">{{messages[0].message}}</span>\n    <div *ngIf=\"messages.length > 1\" class=\"alert-count\" (click)=\"showAllMessages()\">{{messages.length}}</div>\n</div>\n<ng-template cdk-portal #messageTemplate=\"cdkPortal\">\n    <ul class=\"alert-popup mat-elevation-z6\">\n        <li *ngFor=\"let msg of messages\" class=\"{{ cssClass(msg) }}\">\n            <ng-container [ngSwitch]=\"msg.type\">\n                <mat-icon *ngSwitchCase=\"0\">check_circle</mat-icon>\n                <mat-icon *ngSwitchCase=\"1\">error</mat-icon>\n                <mat-icon *ngSwitchCase=\"2\">info</mat-icon>\n                <mat-icon *ngSwitchCase=\"3\">warning</mat-icon>\n                <mat-icon *ngSwitchDefault>notifications</mat-icon>\n            </ng-container>\n\n            <span class=\"alert-text\">{{msg.message}}</span>\n        </li>\n    </ul>\n</ng-template>", styles: ["@charset \"UTF-8\";.alert-dismissable{width:800px;margin-left:auto;margin-right:auto;display:flex;flex-direction:row;cursor:pointer;border-width:0}.alert-dismissable .alert-close{cursor:pointer;margin-right:16px}.alert-dismissable .alert-count{padding:0 8px;border-radius:50%}.alert-popup{width:800px;margin-top:16px;margin-left:-70px;padding:8px;list-style-type:none;max-height:50vh;overflow-y:auto}.alert{padding:8px;display:flex}.alert-text{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MessageService }, { type: i2.Overlay }, { type: i0.ViewContainerRef }]; }, propDecorators: { messageOrigin: [{
                type: ViewChild,
                args: ['messageOrigin']
            }], messageTemplate: [{
                type: ViewChild,
                args: ['messageTemplate']
            }], backColor: [{
                type: HostBinding,
                args: ['style.background-color']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHhjLWFsZXJ0LW1lc3NhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2R4Yy1hbGVydC1tZXNzYWdlL2R4Yy1hbGVydC1tZXNzYWdlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9keGMtYWxlcnQtbWVzc2FnZS9keGMtYWxlcnQtbWVzc2FnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBVSxTQUFTLEVBQW9CLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc1RixPQUFPLEVBQVcsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUE2QixhQUFhLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7OztBQVNoRixNQUFNLE9BQU8sd0JBQXdCO0lBT2pDLFlBQW9CLGNBQThCLEVBQVMsT0FBZ0IsRUFBUyxnQkFBa0M7UUFBbEcsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFOL0csYUFBUSxHQUFjLEVBQUUsQ0FBQztRQUljLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFHN0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFjLEVBQUUsRUFBRTtZQUMxRCxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNSLCtDQUErQztnQkFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7Z0JBQ25CLE9BQU87YUFDVjtZQUVELHFCQUFxQjtZQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQiw2QkFBNkI7UUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDO0lBRUssUUFBUTtRQUNYLFVBQVU7SUFDZCxDQUFDO0lBRU0sZUFBZTtRQUNwQjs7Ozt3REFJZ0Q7UUFFakQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7YUFDdEMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7YUFDbEQsYUFBYSxDQUFDLENBQUM7Z0JBQ2QsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLE9BQU8sRUFBRSxRQUFRO2dCQUNqQixRQUFRLEVBQUUsT0FBTztnQkFDakIsUUFBUSxFQUFFLEtBQUs7YUFDaEIsRUFBRTtnQkFDRCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxRQUFRO2FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBRUYsTUFBTSxNQUFNLEdBQUcsSUFBSSxhQUFhLENBQUM7WUFDN0IsV0FBVyxFQUFFLElBQUk7WUFDakIsYUFBYSxFQUFFLGtDQUFrQztZQUNqRCxnQkFBZ0IsRUFBRSxRQUFRO1NBQzdCLENBQUMsQ0FBQztRQUNILE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRS9DLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLFdBQVcsQ0FBQyxLQUFjO1FBQzdCLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFjO1FBQzFCLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDUixPQUFPO1NBQ1Y7UUFFRCx1Q0FBdUM7UUFDdkMsUUFBUSxLQUFLLENBQUMsSUFBSSxFQUFFO1lBQ2hCLEtBQUssV0FBVyxDQUFDLE9BQU87Z0JBQ3BCLE9BQU8scUJBQXFCLENBQUM7WUFDakMsS0FBSyxXQUFXLENBQUMsS0FBSztnQkFDbEIsT0FBTyxvQkFBb0IsQ0FBQztZQUNoQyxLQUFLLFdBQVcsQ0FBQyxJQUFJO2dCQUNqQixPQUFPLGtCQUFrQixDQUFDO1lBQzlCLEtBQUssV0FBVyxDQUFDLE9BQU87Z0JBQ3BCLE9BQU8scUJBQXFCLENBQUM7WUFDakMsUUFBUTtTQUNYO0lBQ0wsQ0FBQzs7cUhBOUVRLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLG9WQ25CckMsNnFEQWdDYzsyRkRiRCx3QkFBd0I7a0JBTnBDLFNBQVM7K0JBQ0ksbUJBQW1COzBKQU9NLGFBQWE7c0JBQS9DLFNBQVM7dUJBQUMsZUFBZTtnQkFDVyxlQUFlO3NCQUFuRCxTQUFTO3VCQUFDLGlCQUFpQjtnQkFFa0IsU0FBUztzQkFBdEQsV0FBVzt1QkFBQyx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVW5wdWJsaXNoZWQgd29yayDCqSAyMDE5IERYQyBUZWNobm9sb2d5IENvbXBhbnkuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVXNlLCBkdXBsaWNhdGlvbiwgYW5kL29yIGFsdGVyYXRpb24gaXMgc3ViamVjdCB0byBsaWNlbnNlIHRlcm1zLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWYsIEhvc3RCaW5kaW5nIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IE1lc3NhZ2UsIE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbWVzc2FnZSc7XG5pbXBvcnQgeyBPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBPdmVybGF5Q29uZmlnIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tcG9uZW50UG9ydGFsLCBDZGtQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdkeGMtYWxlcnQtbWVzc2FnZScsXG4gICAgdGVtcGxhdGVVcmw6ICdkeGMtYWxlcnQtbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ2R4Yy1hbGVydC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuXG5leHBvcnQgY2xhc3MgRHhjQWxlcnRNZXNzYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtdO1xuICAgIEBWaWV3Q2hpbGQoJ21lc3NhZ2VPcmlnaW4nKSBwdWJsaWMgbWVzc2FnZU9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgICBAVmlld0NoaWxkKCdtZXNzYWdlVGVtcGxhdGUnKSBwdWJsaWMgbWVzc2FnZVRlbXBsYXRlOiBDZGtQb3J0YWw7XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLmJhY2tncm91bmQtY29sb3InKSBwdWJsaWMgYmFja0NvbG9yID0gJyNGRkYnO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UsIHB1YmxpYyBvdmVybGF5OiBPdmVybGF5LCBwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2UoKS5zdWJzY3JpYmUoKGFsZXJ0OiBNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWFsZXJ0KSB7XG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgYWxlcnRzIHdoZW4gYW4gZW1wdHkgYWxlcnQgaXMgcmVjZWl2ZWRcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBhZGQgYWxlcnQgdG8gYXJyYXlcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChhbGVydCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1lc3NhZ2VzKVxuICAgICAgICB9KTtcbiAgICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICAvLyBubyBjb2RlXG4gICAgfVxuXG4gICAgcHVibGljIHNob3dBbGxNZXNzYWdlcygpIHtcbiAgICAgIC8qICBjb25zdCBzdHJhdGVneSA9IHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXG4gICAgICAgIC5jb25uZWN0ZWRUbyhcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZU9yaWdpbi5lbGVtZW50UmVmLFxuICAgICAgICAgICAge29yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nfSxcbiAgICAgICAgICAgIHtvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnfSApOyAqL1xuXG4gICAgIGNvbnN0IHN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMubWVzc2FnZU9yaWdpbi5lbGVtZW50UmVmKVxuICAgICAgLndpdGhQb3NpdGlvbnMoW3tcbiAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgICB9LCB7XG4gICAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICAgIG9yaWdpblk6ICd0b3AnLFxuICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICAgICAgb3ZlcmxheVk6ICdib3R0b20nLFxuICAgICAgfV0pO1xuXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgICAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxuICAgICAgICAgICAgYmFja2Ryb3BDbGFzczogJ2Nkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcbiAgICAgICAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHN0cmF0ZWd5XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZShjb25maWcpO1xuXG4gICAgICAgIG92ZXJsYXlSZWYuYXR0YWNoKHRoaXMubWVzc2FnZVRlbXBsYXRlKTtcbiAgICAgICAgb3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IG92ZXJsYXlSZWYuZGV0YWNoKCkpO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVBbGVydChhbGVydDogTWVzc2FnZSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGNzc0NsYXNzKGFsZXJ0OiBNZXNzYWdlKSB7XG4gICAgICAgIGlmICghYWxlcnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJldHVybiBjc3MgY2xhc3MgYmFzZWQgb24gYWxlcnQgdHlwZVxuICAgICAgICBzd2l0Y2ggKGFsZXJ0LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuU3VjY2VzczpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2FsZXJ0IGFsZXJ0LXN1Y2Nlc3MnO1xuICAgICAgICAgICAgY2FzZSBNZXNzYWdlVHlwZS5FcnJvcjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2FsZXJ0IGFsZXJ0LWRhbmdlcic7XG4gICAgICAgICAgICBjYXNlIE1lc3NhZ2VUeXBlLkluZm86XG4gICAgICAgICAgICAgICAgcmV0dXJuICdhbGVydCBhbGVydC1pbmZvJztcbiAgICAgICAgICAgIGNhc2UgTWVzc2FnZVR5cGUuV2FybmluZzpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2FsZXJ0IGFsZXJ0LXdhcm5pbmcnO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjwhLS1cbiAgICBVbnB1Ymxpc2hlZCB3b3JrIMKpIDIwMTkgRFhDIFRlY2hub2xvZ3kgQ29tcGFueS5cbiAgICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICAgIFVzZSwgZHVwbGljYXRpb24sIGFuZC9vciBhbHRlcmF0aW9uIGlzIHN1YmplY3QgdG8gbGljZW5zZSB0ZXJtcy5cbi0tPlxuXG48ZGl2ICpuZ0lmPVwibWVzc2FnZXMubGVuZ3RoID4gMFwiIGNsYXNzPVwie3sgY3NzQ2xhc3MobWVzc2FnZXNbMF0pIH19IGFsZXJ0LWRpc21pc3NhYmxlXCI+XG4gICAgPG1hdC1pY29uIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwicmVtb3ZlQWxlcnQobWVzc2FnZXNbMF0pXCIgY2xhc3M9XCJhbGVydC1jbG9zZVwiPmNsb3NlPC9tYXQtaWNvbj5cbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJtZXNzYWdlc1swXS50eXBlXCI+XG4gICAgICAgIDxtYXQtaWNvbiAqbmdTd2l0Y2hDYXNlPVwiMFwiPmNoZWNrX2NpcmNsZTwvbWF0LWljb24+XG4gICAgICAgIDxtYXQtaWNvbiAqbmdTd2l0Y2hDYXNlPVwiMVwiPmVycm9yPC9tYXQtaWNvbj5cbiAgICAgICAgPG1hdC1pY29uICpuZ1N3aXRjaENhc2U9XCIyXCI+aW5mbzwvbWF0LWljb24+XG4gICAgICAgIDxtYXQtaWNvbiAqbmdTd2l0Y2hDYXNlPVwiM1wiPndhcm5pbmc8L21hdC1pY29uPlxuICAgICAgICA8bWF0LWljb24gKm5nU3dpdGNoRGVmYXVsdD5ub3RpZmljYXRpb25zPC9tYXQtaWNvbj5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8c3BhbiBjbGFzcz1cImFsZXJ0LXRleHRcIiBjZGstb3ZlcmxheS1vcmlnaW4gI21lc3NhZ2VPcmlnaW49XCJjZGtPdmVybGF5T3JpZ2luXCIgKGNsaWNrKT1cInNob3dBbGxNZXNzYWdlcygpXCI+e3ttZXNzYWdlc1swXS5tZXNzYWdlfX08L3NwYW4+XG4gICAgPGRpdiAqbmdJZj1cIm1lc3NhZ2VzLmxlbmd0aCA+IDFcIiBjbGFzcz1cImFsZXJ0LWNvdW50XCIgKGNsaWNrKT1cInNob3dBbGxNZXNzYWdlcygpXCI+e3ttZXNzYWdlcy5sZW5ndGh9fTwvZGl2PlxuPC9kaXY+XG48bmctdGVtcGxhdGUgY2RrLXBvcnRhbCAjbWVzc2FnZVRlbXBsYXRlPVwiY2RrUG9ydGFsXCI+XG4gICAgPHVsIGNsYXNzPVwiYWxlcnQtcG9wdXAgbWF0LWVsZXZhdGlvbi16NlwiPlxuICAgICAgICA8bGkgKm5nRm9yPVwibGV0IG1zZyBvZiBtZXNzYWdlc1wiIGNsYXNzPVwie3sgY3NzQ2xhc3MobXNnKSB9fVwiPlxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwibXNnLnR5cGVcIj5cbiAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nU3dpdGNoQ2FzZT1cIjBcIj5jaGVja19jaXJjbGU8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiAqbmdTd2l0Y2hDYXNlPVwiMVwiPmVycm9yPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nU3dpdGNoQ2FzZT1cIjJcIj5pbmZvPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nU3dpdGNoQ2FzZT1cIjNcIj53YXJuaW5nPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICA8bWF0LWljb24gKm5nU3dpdGNoRGVmYXVsdD5ub3RpZmljYXRpb25zPC9tYXQtaWNvbj5cbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFsZXJ0LXRleHRcIj57e21zZy5tZXNzYWdlfX08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgPC91bD5cbjwvbmctdGVtcGxhdGU+Il19