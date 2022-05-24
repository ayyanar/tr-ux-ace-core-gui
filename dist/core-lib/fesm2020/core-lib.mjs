import * as i0 from '@angular/core';
import { Injectable, Component, ViewChild, HostBinding, ViewEncapsulation, Input, EventEmitter, Output, NgModule, Pipe, Directive, forwardRef, ElementRef, Optional, HostListener } from '@angular/core';
import * as i2 from '@angular/router';
import { NavigationStart, NavigationEnd, RouterModule } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';
import * as i1 from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import * as i2$1 from '@angular/material/button';
import { MatButtonModule } from '@angular/material/button';
import * as i1$1 from '@angular/cdk/overlay';
import { OverlayContainer, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i11 from '@angular/cdk/portal';
import { PortalModule } from '@angular/cdk/portal';
import * as i1$2 from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as i2$2 from '@angular/material/core';
import { MatNativeDateModule, MatRippleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import * as i9 from '@angular/material/input';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import * as i6 from '@angular/material/autocomplete';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i3$1 from '@angular/material/chips';
import { MatChipsModule } from '@angular/material/chips';
import * as i2$3 from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PlatformModule } from '@angular/cdk/platform';
import { ObserversModule } from '@angular/cdk/observers';
import * as i2$4 from '@angular/forms';
import { ReactiveFormsModule, FormsModule, NG_VALIDATORS, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';
import * as i7 from '@angular/flex-layout/flex';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class User {
    constructor(userId, username, password, role) {
        this.userId = userId;
        this.username = username;
        this.password = password;
        this.role = role;
    }
}

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class Message {
}
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Success"] = 0] = "Success";
    MessageType[MessageType["Error"] = 1] = "Error";
    MessageType[MessageType["Info"] = 2] = "Info";
    MessageType[MessageType["Warning"] = 3] = "Warning";
})(MessageType || (MessageType = {}));

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class MessageService {
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
MessageService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MessageService, deps: [{ token: i2.Router }], target: i0.ɵɵFactoryTarget.Injectable });
MessageService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MessageService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MessageService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i2.Router }]; } });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class DxcConfirmDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
}
DxcConfirmDialogComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcConfirmDialogComponent, deps: [{ token: i1.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component });
DxcConfirmDialogComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcConfirmDialogComponent, selector: "app-confirm-dialog", ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<h1 mat-dialog-title>{{ title }}</h1>\n<p>{{ message }}</p>\n\n<button type=\"button\" mat-raised-button color=\"primary\"\n    (click)=\"dialogRef.close(true)\">OK</button>\n<button type=\"button\" mat-button \n    (click)=\"dialogRef.close()\">Cancel</button>", styles: ["@charset \"UTF-8\";\n"], components: [{ type: i2$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcConfirmDialogComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-confirm-dialog', template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<h1 mat-dialog-title>{{ title }}</h1>\n<p>{{ message }}</p>\n\n<button type=\"button\" mat-raised-button color=\"primary\"\n    (click)=\"dialogRef.close(true)\">OK</button>\n<button type=\"button\" mat-button \n    (click)=\"dialogRef.close()\">Cancel</button>", styles: ["@charset \"UTF-8\";\n"] }]
        }], ctorParameters: function () { return [{ type: i1.MatDialogRef }]; } });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class DialogsService {
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

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class AceOverlayContainer extends OverlayContainer {
    _createContainer() {
        const container = document.createElement('div');
        container.classList.add('cdk-overlay-container');
        document.querySelector('.ace-app-container').appendChild(container);
        this._containerElement = container;
    }
}
AceOverlayContainer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: AceOverlayContainer, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
AceOverlayContainer.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: AceOverlayContainer });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: AceOverlayContainer, decorators: [{
            type: Injectable
        }] });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class DxcAlertMessageComponent {
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
DxcAlertMessageComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAlertMessageComponent, deps: [{ token: MessageService }, { token: i1$1.Overlay }, { token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
DxcAlertMessageComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcAlertMessageComponent, selector: "dxc-alert-message", host: { properties: { "style.background-color": "this.backColor" } }, viewQueries: [{ propertyName: "messageOrigin", first: true, predicate: ["messageOrigin"], descendants: true }, { propertyName: "messageTemplate", first: true, predicate: ["messageTemplate"], descendants: true }], ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<div *ngIf=\"messages.length > 0\" class=\"{{ cssClass(messages[0]) }} alert-dismissable\">\n    <mat-icon role=\"button\" (click)=\"removeAlert(messages[0])\" class=\"alert-close\">close</mat-icon>\n    <ng-container [ngSwitch]=\"messages[0].type\">\n        <mat-icon *ngSwitchCase=\"0\">check_circle</mat-icon>\n        <mat-icon *ngSwitchCase=\"1\">error</mat-icon>\n        <mat-icon *ngSwitchCase=\"2\">info</mat-icon>\n        <mat-icon *ngSwitchCase=\"3\">warning</mat-icon>\n        <mat-icon *ngSwitchDefault>notifications</mat-icon>\n    </ng-container>\n    <span class=\"alert-text\" cdk-overlay-origin #messageOrigin=\"cdkOverlayOrigin\" (click)=\"showAllMessages()\">{{messages[0].message}}</span>\n    <div *ngIf=\"messages.length > 1\" class=\"alert-count\" (click)=\"showAllMessages()\">{{messages.length}}</div>\n</div>\n<ng-template cdk-portal #messageTemplate=\"cdkPortal\">\n    <ul class=\"alert-popup mat-elevation-z6\">\n        <li *ngFor=\"let msg of messages\" class=\"{{ cssClass(msg) }}\">\n            <ng-container [ngSwitch]=\"msg.type\">\n                <mat-icon *ngSwitchCase=\"0\">check_circle</mat-icon>\n                <mat-icon *ngSwitchCase=\"1\">error</mat-icon>\n                <mat-icon *ngSwitchCase=\"2\">info</mat-icon>\n                <mat-icon *ngSwitchCase=\"3\">warning</mat-icon>\n                <mat-icon *ngSwitchDefault>notifications</mat-icon>\n            </ng-container>\n\n            <span class=\"alert-text\">{{msg.message}}</span>\n        </li>\n    </ul>\n</ng-template>", styles: ["@charset \"UTF-8\";.alert-dismissable{width:800px;margin-left:auto;margin-right:auto;display:flex;flex-direction:row;cursor:pointer;border-width:0}.alert-dismissable .alert-close{cursor:pointer;margin-right:16px}.alert-dismissable .alert-count{padding:0 8px;border-radius:50%}.alert-popup{width:800px;margin-top:16px;margin-left:-70px;padding:8px;list-style-type:none;max-height:50vh;overflow-y:auto}.alert{padding:8px;display:flex}.alert-text{flex:1 1 auto}\n"], components: [{ type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i4.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i4.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { type: i1$1.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { type: i11.TemplatePortalDirective, selector: "[cdk-portal], [portal]", exportAs: ["cdkPortal"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAlertMessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-alert-message', template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<div *ngIf=\"messages.length > 0\" class=\"{{ cssClass(messages[0]) }} alert-dismissable\">\n    <mat-icon role=\"button\" (click)=\"removeAlert(messages[0])\" class=\"alert-close\">close</mat-icon>\n    <ng-container [ngSwitch]=\"messages[0].type\">\n        <mat-icon *ngSwitchCase=\"0\">check_circle</mat-icon>\n        <mat-icon *ngSwitchCase=\"1\">error</mat-icon>\n        <mat-icon *ngSwitchCase=\"2\">info</mat-icon>\n        <mat-icon *ngSwitchCase=\"3\">warning</mat-icon>\n        <mat-icon *ngSwitchDefault>notifications</mat-icon>\n    </ng-container>\n    <span class=\"alert-text\" cdk-overlay-origin #messageOrigin=\"cdkOverlayOrigin\" (click)=\"showAllMessages()\">{{messages[0].message}}</span>\n    <div *ngIf=\"messages.length > 1\" class=\"alert-count\" (click)=\"showAllMessages()\">{{messages.length}}</div>\n</div>\n<ng-template cdk-portal #messageTemplate=\"cdkPortal\">\n    <ul class=\"alert-popup mat-elevation-z6\">\n        <li *ngFor=\"let msg of messages\" class=\"{{ cssClass(msg) }}\">\n            <ng-container [ngSwitch]=\"msg.type\">\n                <mat-icon *ngSwitchCase=\"0\">check_circle</mat-icon>\n                <mat-icon *ngSwitchCase=\"1\">error</mat-icon>\n                <mat-icon *ngSwitchCase=\"2\">info</mat-icon>\n                <mat-icon *ngSwitchCase=\"3\">warning</mat-icon>\n                <mat-icon *ngSwitchDefault>notifications</mat-icon>\n            </ng-container>\n\n            <span class=\"alert-text\">{{msg.message}}</span>\n        </li>\n    </ul>\n</ng-template>", styles: ["@charset \"UTF-8\";.alert-dismissable{width:800px;margin-left:auto;margin-right:auto;display:flex;flex-direction:row;cursor:pointer;border-width:0}.alert-dismissable .alert-close{cursor:pointer;margin-right:16px}.alert-dismissable .alert-count{padding:0 8px;border-radius:50%}.alert-popup{width:800px;margin-top:16px;margin-left:-70px;padding:8px;list-style-type:none;max-height:50vh;overflow-y:auto}.alert{padding:8px;display:flex}.alert-text{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return [{ type: MessageService }, { type: i1$1.Overlay }, { type: i0.ViewContainerRef }]; }, propDecorators: { messageOrigin: [{
                type: ViewChild,
                args: ['messageOrigin']
            }], messageTemplate: [{
                type: ViewChild,
                args: ['messageTemplate']
            }], backColor: [{
                type: HostBinding,
                args: ['style.background-color']
            }] } });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class DxcAppLayoutComponent {
    constructor() {
        // to-do
    }
    ngOnInit() {
        // to-do
    }
}
DxcAppLayoutComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppLayoutComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcAppLayoutComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcAppLayoutComponent, selector: "dxc-app-layout", ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<ng-content select=\"dxc-header\"></ng-content>\n<!-- <dxc-alert-message></dxc-alert-message> -->\n<ng-content></ng-content>", styles: ["@charset \"UTF-8\";dxc-app-layout{display:flex;flex-direction:column;position:absolute;top:48px;bottom:0;left:0;right:0}dxc-app-layout>dxc-header~*{display:flex}dxc-app-layout dxc-content{display:flex;width:100%;position:absolute;top:0;bottom:0;left:0;right:0}dxc-app-layout .dxc-app-main{display:flex;flex-direction:column;flex:1;width:100%}dxc-app-layout .dxc-app-main dxc-app-center-content{display:flex;flex:1 1 auto;overflow:auto}dxc-app-layout .dxc-app-main dxc-app-top-content{border-bottom:2px solid #FFF}dxc-app-layout .dxc-app-main .dxc-app-body-content{display:flex;flex-direction:row;flex:1}dxc-app-layout .dxc-app-main dxc-app-right-content,dxc-app-layout .dxc-app-main dxc-app-left-content{flex:1;height:100%;overflow:hidden}dxc-app-layout .dxc-app-main .dxc-app-container{position:relative;z-index:1;box-sizing:border-box;display:block;overflow:hidden;flex:1 1 auto}dxc-app-layout .dxc-app-main .dxc-app-content{height:100%;display:flex;flex-direction:column}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer{margin:10px;background-color:#fff;flex-grow:1;border-radius:0;overflow:hidden;height:100%}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container{min-height:100%;max-height:100%;height:100%}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-fixed-header-container{padding-top:16px;border-bottom:1px solid #ddd}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-scroll-header-container{padding-top:16px}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-scroll-content-container{overflow:auto!important}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-scroll-content-container .dxc-scroll-content-wrapper{padding:0 16px}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-session-ignore-padding{padding-left:16px;padding-right:16px;margin-left:-16px;margin-right:-16px}\n"], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppLayoutComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-app-layout', encapsulation: ViewEncapsulation.None, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<ng-content select=\"dxc-header\"></ng-content>\n<!-- <dxc-alert-message></dxc-alert-message> -->\n<ng-content></ng-content>", styles: ["@charset \"UTF-8\";dxc-app-layout{display:flex;flex-direction:column;position:absolute;top:48px;bottom:0;left:0;right:0}dxc-app-layout>dxc-header~*{display:flex}dxc-app-layout dxc-content{display:flex;width:100%;position:absolute;top:0;bottom:0;left:0;right:0}dxc-app-layout .dxc-app-main{display:flex;flex-direction:column;flex:1;width:100%}dxc-app-layout .dxc-app-main dxc-app-center-content{display:flex;flex:1 1 auto;overflow:auto}dxc-app-layout .dxc-app-main dxc-app-top-content{border-bottom:2px solid #FFF}dxc-app-layout .dxc-app-main .dxc-app-body-content{display:flex;flex-direction:row;flex:1}dxc-app-layout .dxc-app-main dxc-app-right-content,dxc-app-layout .dxc-app-main dxc-app-left-content{flex:1;height:100%;overflow:hidden}dxc-app-layout .dxc-app-main .dxc-app-container{position:relative;z-index:1;box-sizing:border-box;display:block;overflow:hidden;flex:1 1 auto}dxc-app-layout .dxc-app-main .dxc-app-content{height:100%;display:flex;flex-direction:column}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer{margin:10px;background-color:#fff;flex-grow:1;border-radius:0;overflow:hidden;height:100%}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container{min-height:100%;max-height:100%;height:100%}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-fixed-header-container{padding-top:16px;border-bottom:1px solid #ddd}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-scroll-header-container{padding-top:16px}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-scroll-content-container{overflow:auto!important}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-scroll-container .dxc-scroll-content-container .dxc-scroll-content-wrapper{padding:0 16px}dxc-app-layout .dxc-app-main .dxc-app-content .dxc-app-content-viewer .dxc-session-ignore-padding{padding-left:16px;padding-right:16px;margin-left:-16px;margin-right:-16px}\n"] }]
        }], ctorParameters: function () { return []; } });
// tslint:disable-next-line:max-classes-per-file
class DxcAppContentComponent {
    constructor() {
        // to-do
    }
    ngOnInit() {
        // to-do
    }
}
DxcAppContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcAppContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcAppContentComponent, selector: "dxc-content", ngImport: i0, template: `
    <div class="dxc-app-main">
    <ng-content select="dxc-app-top-content"></ng-content>
    <dxc-alert-message></dxc-alert-message>
    <div class="dxc-app-body-content">
      <ng-content select="dxc-app-left-content"></ng-content>
      <ng-content select="dxc-app-center-content"></ng-content>
      <ng-content select="dxc-app-right-content"></ng-content>
    </div>
  </div>
  `, isInline: true, components: [{ type: DxcAlertMessageComponent, selector: "dxc-alert-message" }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dxc-content',
                    template: `
    <div class="dxc-app-main">
    <ng-content select="dxc-app-top-content"></ng-content>
    <dxc-alert-message></dxc-alert-message>
    <div class="dxc-app-body-content">
      <ng-content select="dxc-app-left-content"></ng-content>
      <ng-content select="dxc-app-center-content"></ng-content>
      <ng-content select="dxc-app-right-content"></ng-content>
    </div>
  </div>
  `,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return []; } });
// tslint:disable-next-line:max-classes-per-file
class DxcAppTopContentComponent {
    constructor() {
        this.height = '50px';
        // to-do
    }
    get topHeight() {
        return this.height;
    }
    ngOnInit() {
        // to-do
    }
}
DxcAppTopContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppTopContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcAppTopContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcAppTopContentComponent, selector: "dxc-app-top-content", inputs: { height: "height" }, host: { properties: { "style.height": "this.topHeight" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppTopContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dxc-app-top-content',
                    template: `<ng-content></ng-content>`,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { height: [{
                type: Input
            }], topHeight: [{
                type: HostBinding,
                args: ['style.height']
            }] } });
// tslint:disable-next-line:max-classes-per-file
class DxcAppLeftContentComponent {
    constructor() {
        this.width = '200px';
        // to-do
    }
    get minWidth() {
        return this.width;
    }
    get maxWidth() {
        return this.width;
    }
    ngOnInit() {
        // to-do
    }
}
DxcAppLeftContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppLeftContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcAppLeftContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcAppLeftContentComponent, selector: "dxc-app-left-content", inputs: { width: "width" }, host: { properties: { "style.min-width": "this.minWidth", "style.max-width": "this.maxWidth" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppLeftContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dxc-app-left-content',
                    template: `<ng-content></ng-content>`,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { width: [{
                type: Input
            }], minWidth: [{
                type: HostBinding,
                args: ['style.min-width']
            }], maxWidth: [{
                type: HostBinding,
                args: ['style.max-width']
            }] } });
// tslint:disable-next-line:max-classes-per-file
class DxcAppRightContentComponent {
    constructor() {
        this.width = '200px';
        // to-do
    }
    get minWidth() {
        return this.width;
    }
    get maxWidth() {
        return this.width;
    }
    ngOnInit() {
        // to-do
    }
}
DxcAppRightContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppRightContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcAppRightContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcAppRightContentComponent, selector: "dxc-app-right-content", inputs: { width: "width" }, host: { properties: { "style.min-width": "this.minWidth", "style.max-width": "this.maxWidth" } }, ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppRightContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dxc-app-right-content',
                    template: `<ng-content></ng-content>`,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { width: [{
                type: Input
            }], minWidth: [{
                type: HostBinding,
                args: ['style.min-width']
            }], maxWidth: [{
                type: HostBinding,
                args: ['style.max-width']
            }] } });
// tslint:disable-next-line:max-classes-per-file
class DxcAppCenterContentComponent {
    constructor(router) {
        this.router = router;
        this.fixedTop = false;
        // to-do
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            try {
                this.scrollWindow.nativeElement.scrollTo(0, 0);
                this.contentViewer.nativeElement.scrollTo(0, 0);
            }
            catch (e) {
                // no code
            }
        });
    }
}
DxcAppCenterContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppCenterContentComponent, deps: [{ token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
DxcAppCenterContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcAppCenterContentComponent, selector: "dxc-app-center-content", inputs: { fixedTop: ["fixedtop", "fixedTop"] }, viewQueries: [{ propertyName: "scrollWindow", first: true, predicate: ["scrollwindow"], descendants: true }, { propertyName: "contentViewer", first: true, predicate: ["contentviewer"], descendants: true }], ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<div class=\"dxc-app-container\">\n    <div class=\"dxc-app-content\">\n            <div class=\"dxc-app-content-viewer mat-typography mat-elevation-z2\">\n                    <ng-content></ng-content>\n            </div>\n        <!-- <div class=\"dxc-app-content-viewer mat-typography mat-elevation-z2\" [style.overflow]=\"fixedTop ? 'hidden':'auto'\" [style.padding]=\"fixedTop ? '0':''\"\n            [style.height]=\"fixedTop ? '100%':''\" #contentviewer>\n            <div fxLayout=\"column\" fxLayoutAlign=\" none\" class=\"dxc-scroll-container\">\n                <div fxFlex=\"initial\" [class.dxc-fixed-header-container]=\"fixedTop\" [class.dxc-scroll-header-container]=\"!fixedTop\">\n                    <ng-content select=\"dxc-fixed-top-content\"></ng-content>\n                </div>\n                <div fxFlex=\"auto\" class=\"dxc-scroll-content-container\" #scrollwindow>\n                    <div class=\"dxc-scroll-content-wrapper\">\n                        <ng-content></ng-content>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n    </div>\n</div>", encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcAppCenterContentComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-app-center-content', encapsulation: ViewEncapsulation.None, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<div class=\"dxc-app-container\">\n    <div class=\"dxc-app-content\">\n            <div class=\"dxc-app-content-viewer mat-typography mat-elevation-z2\">\n                    <ng-content></ng-content>\n            </div>\n        <!-- <div class=\"dxc-app-content-viewer mat-typography mat-elevation-z2\" [style.overflow]=\"fixedTop ? 'hidden':'auto'\" [style.padding]=\"fixedTop ? '0':''\"\n            [style.height]=\"fixedTop ? '100%':''\" #contentviewer>\n            <div fxLayout=\"column\" fxLayoutAlign=\" none\" class=\"dxc-scroll-container\">\n                <div fxFlex=\"initial\" [class.dxc-fixed-header-container]=\"fixedTop\" [class.dxc-scroll-header-container]=\"!fixedTop\">\n                    <ng-content select=\"dxc-fixed-top-content\"></ng-content>\n                </div>\n                <div fxFlex=\"auto\" class=\"dxc-scroll-content-container\" #scrollwindow>\n                    <div class=\"dxc-scroll-content-wrapper\">\n                        <ng-content></ng-content>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n    </div>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i2.Router }]; }, propDecorators: { fixedTop: [{
                type: Input,
                args: ['fixedtop']
            }], scrollWindow: [{
                type: ViewChild,
                args: ['scrollwindow']
            }], contentViewer: [{
                type: ViewChild,
                args: ['contentviewer']
            }] } });
// tslint:disable-next-line:max-classes-per-file
class DxcFixedTopContentComponent {
    constructor() {
        // to-do
    }
    ngOnInit() {
        // to-do
    }
}
DxcFixedTopContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcFixedTopContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcFixedTopContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcFixedTopContentComponent, selector: "dxc-fixed-top-content", ngImport: i0, template: `<ng-content></ng-content>`, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcFixedTopContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dxc-fixed-top-content',
                    template: `<ng-content></ng-content>`,
                    encapsulation: ViewEncapsulation.None
                }]
        }], ctorParameters: function () { return []; } });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class DxcHeaderComponent {
    constructor() {
        this.title = 'Application Title';
        this.onLogoClick = new EventEmitter();
        // to-do
    }
    ngOnInit() {
        // to-do
    }
    logoClick() {
        this.onLogoClick.emit();
    }
}
DxcHeaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcHeaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcHeaderComponent, selector: "dxc-header", inputs: { title: "title" }, outputs: { onLogoClick: "onLogoClick" }, ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<mat-toolbar color=\"primary\" class=\"dxc-app-toolbar\">\n  <!-- <mat-toolbar-row> -->\n    <div class=\"icn-logo\" (click)=\"logoClick()\"></div>\n    <span>{{title}}</span>\n    <span class=\"app-menu-spacer\"></span>\n    <ng-content select=\"[mat-button],[mat-icon-button],mat-menu\"></ng-content>\n  <!-- </mat-toolbar-row> -->\n</mat-toolbar>", styles: ["@charset \"UTF-8\";mat-toolbar.dxc-app-toolbar{height:48px;position:fixed;top:0;left:0;z-index:2}mat-toolbar.dxc-app-toolbar .mat-toolbar-row{height:48px}mat-toolbar.dxc-app-toolbar .icn-logo{width:147px;height:25px;cursor:pointer}mat-toolbar.dxc-app-toolbar .app-menu-spacer{flex:1 1 auto}\n"], components: [{ type: i1$2.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-header', encapsulation: ViewEncapsulation.None, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<mat-toolbar color=\"primary\" class=\"dxc-app-toolbar\">\n  <!-- <mat-toolbar-row> -->\n    <div class=\"icn-logo\" (click)=\"logoClick()\"></div>\n    <span>{{title}}</span>\n    <span class=\"app-menu-spacer\"></span>\n    <ng-content select=\"[mat-button],[mat-icon-button],mat-menu\"></ng-content>\n  <!-- </mat-toolbar-row> -->\n</mat-toolbar>", styles: ["@charset \"UTF-8\";mat-toolbar.dxc-app-toolbar{height:48px;position:fixed;top:0;left:0;z-index:2}mat-toolbar.dxc-app-toolbar .mat-toolbar-row{height:48px}mat-toolbar.dxc-app-toolbar .icn-logo{width:147px;height:25px;cursor:pointer}mat-toolbar.dxc-app-toolbar .app-menu-spacer{flex:1 1 auto}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], onLogoClick: [{
                type: Output
            }] } });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
// tslint:disable-next-line:max-classes-per-file
class DxcSessionComponent {
    constructor() {
        this.sessionTitle = 'Session Title';
        this.showHeader = true;
        // to-do
    }
    ngOnInit() {
        // to-do
    }
}
DxcSessionComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcSessionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcSessionComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcSessionComponent, selector: "dxc-session", inputs: { sessionTitle: ["session-title", "sessionTitle"], showHeader: ["show-header", "showHeader"] }, ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<div *ngIf=\"showHeader==true\" class=\"dxc-session-header\">\n  <span class=\"dxc-session-title\">{{sessionTitle}}</span>\n  <span class=\"dxc-session-header-spacer\"></span>\n  <ng-content select=\"dxc-session-controls\"></ng-content>\n</div>\n<div class=\"dxc-session-content\">\n  <ng-content select=\"dxc-session-content\"></ng-content>\n</div>\n", styles: ["@charset \"UTF-8\";dxc-session{display:block}dxc-session .dxc-session-header{padding:0 16px;display:flex;flex-direction:row}dxc-session .dxc-session-title{padding:12px 0}dxc-session .dxc-session-content{padding:16px}dxc-session .dxc-session-header-spacer{flex:1 1 auto}dxc-session dxc-session-controls{padding:4px 0}\n"], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcSessionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-session', encapsulation: ViewEncapsulation.None, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<div *ngIf=\"showHeader==true\" class=\"dxc-session-header\">\n  <span class=\"dxc-session-title\">{{sessionTitle}}</span>\n  <span class=\"dxc-session-header-spacer\"></span>\n  <ng-content select=\"dxc-session-controls\"></ng-content>\n</div>\n<div class=\"dxc-session-content\">\n  <ng-content select=\"dxc-session-content\"></ng-content>\n</div>\n", styles: ["@charset \"UTF-8\";dxc-session{display:block}dxc-session .dxc-session-header{padding:0 16px;display:flex;flex-direction:row}dxc-session .dxc-session-title{padding:12px 0}dxc-session .dxc-session-content{padding:16px}dxc-session .dxc-session-header-spacer{flex:1 1 auto}dxc-session dxc-session-controls{padding:4px 0}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { sessionTitle: [{
                type: Input,
                args: ['session-title']
            }], showHeader: [{
                type: Input,
                args: ['show-header']
            }] } });
// tslint:disable-next-line:max-classes-per-file
class DxcSessionControlsComponent {
    ngOnInit() {
        // to-do
    }
}
DxcSessionControlsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcSessionControlsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcSessionControlsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcSessionControlsComponent, selector: "dxc-session-controls", ngImport: i0, template: `
    <ng-content select="[mat-button],[mat-icon-button],mat-menu"></ng-content>
  `, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcSessionControlsComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dxc-session-controls',
                    template: `
    <ng-content select="[mat-button],[mat-icon-button],mat-menu"></ng-content>
  `,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });
// tslint:disable-next-line:max-classes-per-file
class DxcSessionContentComponent {
    ngOnInit() {
        // to-do
    }
}
DxcSessionContentComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcSessionContentComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcSessionContentComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcSessionContentComponent, selector: "dxc-session-content", ngImport: i0, template: `
    <ng-content></ng-content>
  `, isInline: true, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcSessionContentComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'dxc-session-content',
                    template: `
    <ng-content></ng-content>
  `,
                    encapsulation: ViewEncapsulation.None
                }]
        }] });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class DxcNavigationComponent {
    constructor() {
        this.navItems = [];
        this.activeItem = 0;
        // tslint:disable-next-line:no-output-rename
        this.onItemClick = new EventEmitter();
        // to-do
    }
    ngOnInit() {
        // to-do
    }
    changeActiveItem(index) {
        this.activeItem = index;
        this.onItemClick.emit({ value: index });
    }
}
DxcNavigationComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcNavigationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcNavigationComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcNavigationComponent, selector: "dxc-nav", inputs: { navItems: ["nav-items", "navItems"], activeItem: ["active-item", "activeItem"] }, outputs: { onItemClick: "itemclick" }, ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<!-- <ul class=\"nav-container\">\n  <li class=\"nav-item\" *ngFor=\"let item of navItems;let i = index\" [class.active]=\"i==activeItem\">\n    <a class=\"nav-link\" [routerLink]=\"item.Link\" (click)=\"changeActiveItem(i)\" >\n      {{item.Name}}\n    </a>\n  </li>\n</ul> -->\n<nav class=\"nav\">\n  <!-- <a class=\"nav-link\" *ngFor=\"let item of navItems;let i = index\" [routerLink]=\"item.Link\" (click)=\"changeActiveItem(i)\" [class.active]=\"i==activeItem\"> -->\n  <a class=\"nav-link\" *ngFor=\"let item of navItems;let i = index\" [routerLink]=\"item.Link\"  routerLinkActive=\"active\">\n    {{item.Name}}\n  </a>\n</nav>", styles: ["@charset \"UTF-8\";dxc-nav{display:flex;padding-bottom:16px;width:100%}dxc-nav .nav{display:flex;margin:0 auto;padding:0;list-style:none;box-shadow:0 3px 5px -1px #0000001a,0 6px 10px #0000000a,0 1px 18px #00000005}dxc-nav .nav .nav-link{display:block;padding:8px 16px;border:1px solid #E6E6E6;border-right-width:0;text-decoration:none;cursor:pointer}dxc-nav .nav .nav-link:last-child{border-right-width:1px}\n"], directives: [{ type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }, { type: i2.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcNavigationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-nav', encapsulation: ViewEncapsulation.None, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<!-- <ul class=\"nav-container\">\n  <li class=\"nav-item\" *ngFor=\"let item of navItems;let i = index\" [class.active]=\"i==activeItem\">\n    <a class=\"nav-link\" [routerLink]=\"item.Link\" (click)=\"changeActiveItem(i)\" >\n      {{item.Name}}\n    </a>\n  </li>\n</ul> -->\n<nav class=\"nav\">\n  <!-- <a class=\"nav-link\" *ngFor=\"let item of navItems;let i = index\" [routerLink]=\"item.Link\" (click)=\"changeActiveItem(i)\" [class.active]=\"i==activeItem\"> -->\n  <a class=\"nav-link\" *ngFor=\"let item of navItems;let i = index\" [routerLink]=\"item.Link\"  routerLinkActive=\"active\">\n    {{item.Name}}\n  </a>\n</nav>", styles: ["@charset \"UTF-8\";dxc-nav{display:flex;padding-bottom:16px;width:100%}dxc-nav .nav{display:flex;margin:0 auto;padding:0;list-style:none;box-shadow:0 3px 5px -1px #0000001a,0 6px 10px #0000000a,0 1px 18px #00000005}dxc-nav .nav .nav-link{display:block;padding:8px 16px;border:1px solid #E6E6E6;border-right-width:0;text-decoration:none;cursor:pointer}dxc-nav .nav .nav-link:last-child{border-right-width:1px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { navItems: [{
                type: Input,
                args: ['nav-items']
            }], activeItem: [{
                type: Input,
                args: ['active-item']
            }], onItemClick: [{
                type: Output,
                args: ['itemclick']
            }] } });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class DxcClassSelectorComponent {
    constructor() {
        // to-do
    }
    ngOnInit() {
        // to-do
    }
}
DxcClassSelectorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcClassSelectorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcClassSelectorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcClassSelectorComponent, selector: "dxc-class-selector", ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<ng-content select=\"mat-button-toggle-group\"></ng-content>\n", styles: ["@charset \"UTF-8\";dxc-class-selector{display:block}dxc-class-selector .mat-button-toggle-group{outline:none!important;border:none!important;box-shadow:none!important}dxc-class-selector .mat-button-toggle{border:1px solid #e9ecef;margin-right:5px;border-radius:4px}dxc-class-selector .mat-button-toggle:last-child{margin-right:0}dxc-class-selector .mat-button-toggle-label-content{line-height:0px!important;padding:6px!important}dxc-class-selector .mat-button-toggle-checked button{color:#fff}dxc-class-selector .mat-button-toggle-label-content{padding:0;text-align:center}\n"], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcClassSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-class-selector', encapsulation: ViewEncapsulation.None, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<ng-content select=\"mat-button-toggle-group\"></ng-content>\n", styles: ["@charset \"UTF-8\";dxc-class-selector{display:block}dxc-class-selector .mat-button-toggle-group{outline:none!important;border:none!important;box-shadow:none!important}dxc-class-selector .mat-button-toggle{border:1px solid #e9ecef;margin-right:5px;border-radius:4px}dxc-class-selector .mat-button-toggle:last-child{margin-right:0}dxc-class-selector .mat-button-toggle-label-content{line-height:0px!important;padding:6px!important}dxc-class-selector .mat-button-toggle-checked button{color:#fff}dxc-class-selector .mat-button-toggle-label-content{padding:0;text-align:center}\n"] }]
        }], ctorParameters: function () { return []; } });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class DxcTabNavBarComponent {
    constructor(el) {
        this.el = el;
        this.showScrollButtons = true;
    }
    ngAfterViewInit() {
        this.labelContainer.nativeElement.querySelector('.mat-tab-links').style.display = 'flex';
    }
    ngDoCheck() {
        if (this.labelContainer) {
            if (this.labelContainer.nativeElement.clientWidth -
                this.labelContainer.nativeElement.firstElementChild.clientWidth
                > 0) {
                this.showScrollButtons = false;
            }
            else {
                this.showScrollButtons = true;
            }
        }
    }
    left() {
        const el = this.el.nativeElement.querySelector('.mat-tab-label-container');
        console.log(el.clientWidth);
        el.scrollLeft -= el.clientWidth;
    }
    right() {
        const el = this.el.nativeElement.querySelector('.mat-tab-label-container');
        el.scrollLeft += el.clientWidth;
    }
}
DxcTabNavBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcTabNavBarComponent, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
DxcTabNavBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcTabNavBarComponent, selector: "dxc-tab-nav-bar", viewQueries: [{ propertyName: "labelContainer", first: true, predicate: ["labelContainer"], descendants: true }], ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<div class=\"mat-tab-nav-bar-pagination\">\n    <div *ngIf=\"showScrollButtons\" (click)=\"left()\" aria-hidden=\"true\" class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-ripple\"\n        mat-ripple=\"\">\n        <div class=\"mat-tab-header-pagination-chevron\"></div>\n    </div>\n    <div class=\"mat-tab-label-container\" #labelContainer>\n        <ng-content></ng-content>\n        <div class=\"mat-tab-nav-bar mat-tab-header\" style=\"flex-grow: 1\"></div>\n    </div>\n    <div *ngIf=\"showScrollButtons\" (click)=\"right()\" aria-hidden=\"true\" class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-ripple\"\n        mat-ripple=\"\">\n        <div class=\"mat-tab-header-pagination-chevron\"></div>\n    </div>\n</div>", styles: ["@charset \"UTF-8\";:host{display:block}.mat-tab-nav-bar-pagination{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-header-pagination{position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2}.mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination{display:flex;border-bottom:2px solid #DDD}.mat-tab-header-pagination-chevron{border-color:#000000de}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}\n"], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2$2.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcTabNavBarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-tab-nav-bar', template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<div class=\"mat-tab-nav-bar-pagination\">\n    <div *ngIf=\"showScrollButtons\" (click)=\"left()\" aria-hidden=\"true\" class=\"mat-tab-header-pagination mat-tab-header-pagination-before mat-ripple\"\n        mat-ripple=\"\">\n        <div class=\"mat-tab-header-pagination-chevron\"></div>\n    </div>\n    <div class=\"mat-tab-label-container\" #labelContainer>\n        <ng-content></ng-content>\n        <div class=\"mat-tab-nav-bar mat-tab-header\" style=\"flex-grow: 1\"></div>\n    </div>\n    <div *ngIf=\"showScrollButtons\" (click)=\"right()\" aria-hidden=\"true\" class=\"mat-tab-header-pagination mat-tab-header-pagination-after mat-ripple\"\n        mat-ripple=\"\">\n        <div class=\"mat-tab-header-pagination-chevron\"></div>\n    </div>\n</div>", styles: ["@charset \"UTF-8\";:host{display:block}.mat-tab-nav-bar-pagination{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-header-pagination{position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2}.mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination{display:flex;border-bottom:2px solid #DDD}.mat-tab-header-pagination-chevron{border-color:#000000de}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { labelContainer: [{
                type: ViewChild,
                args: ['labelContainer']
            }] } });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
function overlayFactory() {
    return new AceOverlayContainer(document, null);
}
class MaterialModule {
}
MaterialModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MaterialModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MaterialModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MaterialModule, imports: [A11yModule,
        BidiModule,
        ScrollingModule,
        CdkStepperModule,
        CdkTableModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSortModule,
        MatDatepickerModule,
        MatChipsModule,
        MatRadioModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatExpansionModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatGridListModule,
        MatListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatStepperModule,
        MatTabsModule,
        FlexLayoutModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule], exports: [A11yModule,
        BidiModule,
        ScrollingModule,
        CdkStepperModule,
        CdkTableModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSortModule,
        MatDatepickerModule,
        MatChipsModule,
        MatRadioModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatExpansionModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatGridListModule,
        MatListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatStepperModule,
        MatTabsModule,
        FlexLayoutModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule] });
MaterialModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MaterialModule, providers: [
        { provide: OverlayContainer, useFactory: overlayFactory },
        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
    ], imports: [[
            A11yModule,
            BidiModule,
            ScrollingModule,
            CdkStepperModule,
            CdkTableModule,
            MatFormFieldModule,
            MatCheckboxModule,
            MatAutocompleteModule,
            MatSlideToggleModule,
            MatButtonModule,
            MatIconModule,
            MatInputModule,
            MatSelectModule,
            MatSortModule,
            MatDatepickerModule,
            MatChipsModule,
            MatRadioModule,
            MatNativeDateModule,
            MatButtonToggleModule,
            MatExpansionModule,
            MatDialogModule,
            MatTableModule,
            MatMenuModule,
            MatSidenavModule,
            MatToolbarModule,
            MatCardModule,
            MatPaginatorModule,
            MatTooltipModule,
            MatGridListModule,
            MatListModule,
            MatProgressBarModule,
            MatProgressSpinnerModule,
            MatRippleModule,
            MatSliderModule,
            MatSnackBarModule,
            MatStepperModule,
            MatTabsModule,
            FlexLayoutModule,
            ObserversModule,
            OverlayModule,
            PlatformModule,
            PortalModule,
        ], A11yModule,
        BidiModule,
        ScrollingModule,
        CdkStepperModule,
        CdkTableModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        MatSlideToggleModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatSortModule,
        MatDatepickerModule,
        MatChipsModule,
        MatRadioModule,
        MatNativeDateModule,
        MatButtonToggleModule,
        MatExpansionModule,
        MatDialogModule,
        MatTableModule,
        MatMenuModule,
        MatSidenavModule,
        MatToolbarModule,
        MatCardModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatGridListModule,
        MatListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatStepperModule,
        MatTabsModule,
        FlexLayoutModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: MaterialModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        A11yModule,
                        BidiModule,
                        ScrollingModule,
                        CdkStepperModule,
                        CdkTableModule,
                        MatFormFieldModule,
                        MatCheckboxModule,
                        MatAutocompleteModule,
                        MatSlideToggleModule,
                        MatButtonModule,
                        MatIconModule,
                        MatInputModule,
                        MatSelectModule,
                        MatSortModule,
                        MatDatepickerModule,
                        MatChipsModule,
                        MatRadioModule,
                        MatNativeDateModule,
                        MatButtonToggleModule,
                        MatExpansionModule,
                        MatDialogModule,
                        MatTableModule,
                        MatMenuModule,
                        MatSidenavModule,
                        MatToolbarModule,
                        MatCardModule,
                        MatPaginatorModule,
                        MatTooltipModule,
                        MatGridListModule,
                        MatListModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRippleModule,
                        MatSliderModule,
                        MatSnackBarModule,
                        MatStepperModule,
                        MatTabsModule,
                        FlexLayoutModule,
                        ObserversModule,
                        OverlayModule,
                        PlatformModule,
                        PortalModule,
                    ],
                    exports: [
                        A11yModule,
                        BidiModule,
                        ScrollingModule,
                        CdkStepperModule,
                        CdkTableModule,
                        MatFormFieldModule,
                        MatCheckboxModule,
                        MatAutocompleteModule,
                        MatSlideToggleModule,
                        MatButtonModule,
                        MatIconModule,
                        MatInputModule,
                        MatSelectModule,
                        MatSortModule,
                        MatDatepickerModule,
                        MatChipsModule,
                        MatRadioModule,
                        MatNativeDateModule,
                        MatButtonToggleModule,
                        MatExpansionModule,
                        MatDialogModule,
                        MatTableModule,
                        MatMenuModule,
                        MatSidenavModule,
                        MatToolbarModule,
                        MatCardModule,
                        MatPaginatorModule,
                        MatTooltipModule,
                        MatGridListModule,
                        MatListModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRippleModule,
                        MatSliderModule,
                        MatSnackBarModule,
                        MatStepperModule,
                        MatTabsModule,
                        FlexLayoutModule,
                        ObserversModule,
                        OverlayModule,
                        PlatformModule,
                        PortalModule,
                    ],
                    providers: [
                        { provide: OverlayContainer, useFactory: overlayFactory },
                        { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
                    ]
                }]
        }] });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class AngularModule {
}
AngularModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: AngularModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AngularModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: AngularModule, imports: [CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule], exports: [CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule] });
AngularModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: AngularModule, providers: [], imports: [[
            CommonModule,
            RouterModule,
            ReactiveFormsModule,
            FormsModule
        ], CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: AngularModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        RouterModule,
                        ReactiveFormsModule,
                        FormsModule
                    ],
                    exports: [
                        CommonModule,
                        RouterModule,
                        ReactiveFormsModule,
                        FormsModule
                    ],
                    providers: []
                }]
        }] });

class ObservablePipe {
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

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class RegExValidatorDirective {
    constructor() {
        this.regexMap = {
            '999': /^[0-9]{0,3}$/,
            '9999': /^[0-9]{0,4}$/,
            '999-': /^[0-9-]{0,7}$/,
            'decimalTwo': /^\d{0,6}\.?\d{0,2}$/,
            '9999.999': /^\d{0,7}\.?\d{0,3}$/,
            'alpha25': /^[a-zA-Z0-9]{0,25}$/,
            'number8Wild': /^[0-9*]{0,8}$/,
            'alpha10Wild': /^[a-zA-Z0-9*]{0,10}$/,
            'alpha9': /^[a-zA-Z0-9]{0,9}$/,
            'time': /^[0-9]{0,2}$/,
            'dateFormat_M/D/YYYY': /^\d{0,2}\/?\d{0,2}\/?\d{0,4}$/,
            'dateFormat_M-D-YYYY': /^\d{0,2}\-?\d{0,2}\-?\d{0,4}$/,
            'hours': /^[0-1]?[0-9]|2[0-3]$/,
            'minutes': /^[0-5]?[0-9]$/,
            '9comma': /^[0-9,]{0,10}$/
        };
    }
    validate(c) {
        this.pattern = this.regexMap[this.regExValidationPattern];
        const patternChange = c.value ? c.value.toString() : '';
        if (!patternChange.match(this.pattern)) {
            return { patternErrors: true, errorMsg: 'regex.pattern.error.' + this.regExValidationPattern };
        }
    }
}
RegExValidatorDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: RegExValidatorDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
RegExValidatorDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.2", type: RegExValidatorDirective, selector: "[regExValidationPattern]", inputs: { regExValidationPattern: "regExValidationPattern" }, providers: [
        { provide: NG_VALIDATORS, useExisting: RegExValidatorDirective, multi: true }
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: RegExValidatorDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[regExValidationPattern]',
                    providers: [
                        { provide: NG_VALIDATORS, useExisting: RegExValidatorDirective, multi: true }
                    ]
                }]
        }], propDecorators: { regExValidationPattern: [{
                type: Input,
                args: ['regExValidationPattern']
            }] } });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
const COMMA = 188;
const ENTER = 13;
// tslint:disable:no-forward-ref
class DxcChipsComponent {
    constructor(overlay) {
        this.overlay = overlay;
        this.isValid = true;
        this.inputPattern = '';
        this.forSave = new EventEmitter(); // to be removed
        // @HostListener('document:keydown', ['$event'])
        // onEscapePress(event: KeyboardEvent) {
        //     if (event.keyCode === 27) {
        //         this.closeAddCondition();
        //     }
        // }
        // public visible: boolean = true;
        this.chipListCtrl = new FormControl();
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.isShowMoreVisible = false;
        this.startIndex = 0;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.selectedChips = [];
        this.showChips = [];
        this.isDisabled = false;
        this.isPasted = false;
        this.pasteText = '';
        // tslint:disable:no-empty
        this.propagateChange = () => { };
    }
    ngOnInit() {
        this.ForEditControl(this.forEdit);
        this.placeholder = this.placeholder || '';
        this.inputValidationFormat = this.inputValidationFormat || '';
        this.maxChipsAllow = this.maxChipsAllow ? this.maxChipsAllow : 4;
        this.maxChipsShow = this.maxChipsAllow ? this.maxChipsAllow : 0;
    }
    writeValue(obj) {
        this.selectedChips = [];
        this.showChips = this.setShowChips(this.selectedChips);
        if (this.chipInput) {
            this.chipInput.nativeElement.value = '';
        }
        // console.log((this.chipInput.nativeElement as MatInput).empty);
        this.ForEditControl(obj);
        this.placeholder = this.placeholder || '';
        this.inputValidationFormat = this.inputValidationFormat || '';
        // this.chipListCtrl.setValue('');
        // this.chipListCtrl.reset();
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) { }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        if (isDisabled) {
            this.chipListCtrl.disable();
        }
        else {
            this.chipListCtrl.enable();
        }
    }
    onPaste(event) {
        if (!this.isDisabled) {
            const regexp = new RegExp(this.inputPattern);
            const pastedItems = event.clipboardData
                .getData('Text')
                .split(/[.]|[,]|[\s]|[\r]|[\n]/)
                .filter((value) => value.trim() !== '');
            let i = 0;
            for (const item of pastedItems) {
                if (this.selectedChips.filter((obj) => obj.value === item).length === 0) {
                    this.selectedChips.push({
                        value: item,
                        valid: regexp.test(item)
                    });
                    i++;
                }
                if (this.selectedChips.length >= this.maxChipsAllow) {
                    this.pasteText = i + ' of ' + pastedItems.length + ' items pasted. Max count reached';
                    console.log(this.pasteText);
                    break;
                }
            }
            this.isPasted = true;
            if (this.pasteText === '') {
                this.pasteText = i + ' of ' + pastedItems.length + ' items pasted.';
            }
            setTimeout(() => {
                this.isPasted = false;
                this.pasteText = '';
            }, 3000);
            this.showChips = this.setShowChips(this.selectedChips);
            this.returnData(this.selectedChips);
        }
        event.preventDefault();
    }
    add(event) {
        const regexp = new RegExp(this.inputPattern);
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            if (this.selectedChips.filter((s) => s.value === value).length <= 0) {
                this.selectedChips.push({
                    value: value.trim(),
                    valid: regexp.test(value.trim())
                });
            }
            // this.selectedChips.push(value.trim());
            // console.log('selectedChips:' + this.selectedChips);
            this.showChips = this.setShowChips(this.selectedChips);
            // input.focus();
            this.chipInput.nativeElement.focus();
            // console.log("focus");
        }
        if (input) {
            input.value = '';
        }
        this.returnData(this.selectedChips);
        this.forSave.emit(this.selectedChips);
    }
    setShowChips(chips) {
        if (this.maxChipsShow === 0) {
            return chips;
        }
        this.startIndex =
            chips.length > this.maxChipsShow ? chips.length - this.maxChipsShow : 0;
        this.isShowMoreVisible = this.startIndex > 0 ? true : false;
        // console.log('startIndex:' + this.startIndex + '||endIndex:' + chips.length);
        // console.log('selectedChips:' + this.selectedChips);
        return chips.slice(this.startIndex);
    }
    remove(chip, index, deleteType) {
        console.log("dxc chips remove call");
        // const index = this.selectedChips.indexOf(chip);
        if (!this.isDisabled) {
            if (deleteType === 'idel') {
                index = this.startIndex + index;
            }
            if (index >= 0) {
                this.selectedChips.splice(index, 1);
                // console.log('selectedChips:' + this.selectedChips);
                this.showChips = this.setShowChips(this.selectedChips);
                if (deleteType === 'idel') {
                    this.chipInput.nativeElement.focus();
                }
            }
            if (this.selectedChips.length === 0) {
                this.closeAllChips();
            }
            this.returnData(this.selectedChips);
            this.forSave.emit(this.selectedChips);
        }
    }
    returnData(value) {
        const output = [];
        for (const item of value) {
            output.push(item.value);
        }
        this.propagateChange(output);
    }
    ForEditControl(value) {
        const regexp = new RegExp(this.inputPattern);
        if (value &&
            value !== null &&
            value.length >= 1 &&
            (this.selectedChips === undefined || this.selectedChips.length < 1)) {
            for (const item of value) {
                this.selectedChips.push({
                    value: item.trim(),
                    valid: regexp.test(item.trim())
                });
                if (this.selectedChips.length >= this.maxChipsAllow) {
                    break;
                }
            }
            // this.selectedChips = value.length > this.maxChipsAllow ?  value.slice(0, this.maxChipsAllow) : value;
            this.showChips = this.setShowChips(this.selectedChips);
        }
    }
    showAllChips() {
        // console.log(this.chipParent.nativeElement);
        /*const strategy = this.overlay
            .position()
            .connectedTo(
                this.addConditionOrigin.elementRef,
                { originX: 'end', originY: 'bottom' },
                { overlayX: 'end', overlayY: 'top' }
            );*/
        /*const strategy = this.overlay.position()
        .flexibleConnectedTo(this.addConditionOrigin.elementRef)
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
        }]);*/
        const strategy = this.overlay.position()
            .flexibleConnectedTo(this.addConditionOrigin.elementRef)
            .withPositions([{
                originX: 'end',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
            }, {
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
            }]);
        const config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            positionStrategy: strategy,
            width: this.chipParent.nativeElement.getBoundingClientRect().width
        });
        this.overlayRef = this.overlay.create(config);
        this.overlayRef.attach(this.addConditionTemplate);
        this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
        this.overlayRef.keydownEvents().subscribe((event) => {
            if (event.keyCode === 27) {
                // this.overlayRef.detach();
                this.closeAllChips();
            }
        });
    }
    closeAllChips() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.chipInput.nativeElement.focus();
        }
    }
}
DxcChipsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcChipsComponent, deps: [{ token: i1$1.Overlay }], target: i0.ɵɵFactoryTarget.Component });
DxcChipsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcChipsComponent, selector: "dxc-chips", inputs: { forEdit: "forEdit", placeholder: "placeholder", inputValidationFormat: "inputValidationFormat", maxChipsAllow: "maxChipsAllow", maxChipsShow: "maxChipsShow", isValid: "isValid", inputPattern: "inputPattern" }, outputs: { forSave: "forSave" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DxcChipsComponent),
            multi: true
        }
    ], viewQueries: [{ propertyName: "addConditionOrigin", first: true, predicate: ["addConditionOrigin"], descendants: true }, { propertyName: "addConditionTemplate", first: true, predicate: ["addConditionTemplate"], descendants: true }, { propertyName: "chipParent", first: true, predicate: ["chipparent"], descendants: true, read: ElementRef }, { propertyName: "chipInput", first: true, predicate: ["chipinput"], descendants: true }], ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<form class=\"dxc-chips\" >\n    <mat-form-field [class.mat-chip-form-field-invalid]=\"!isValid && !isDisabled\" [class.dxc-chips-disabled]=\"isDisabled\" fxFlex=\"100%\" [floatLabel]=\"'auto'\" #chipparent>\n        <mat-label>{{placeholder}}</mat-label>\n        <mat-chip-list #chipList>\n            <mat-chip *ngFor=\"let chip of showChips;let i = index\" class=\" mat-standard-chip mat-chip-selected\" [selectable]=\"selectable\" [color]=\"chip.valid ? 'normal':'warn'\" [removable]=\"removable\" (removed)=\"remove(chip,i,'idel')\">\n                {{chip.value}}\n                <mat-icon matChipRemove *ngIf=\"removable && !isDisabled\">cancel</mat-icon>              \n            </mat-chip>\n            \n            <input #chipinput matInput regExValidationPattern=\"{{inputValidationFormat}}\" [style.display]=\"selectedChips.length >= maxChipsAllow ? 'none' : 'block' \"\n                [matChipInputFor]=\"chipList\" [formControl]=\"chipListCtrl\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\" (paste)=\"onPaste($event)\" />\n        </mat-chip-list>\n\n        <button cdk-overlay-origin #addConditionOrigin=\"cdkOverlayOrigin\" [style.display]=\"isShowMoreVisible?'block':'none'\" matSuffix\n            mat-icon-button color=\"primary\" (click)=\"showAllChips()\">\n            <mat-icon aria-label=\"show all\">more_horiz</mat-icon>\n        </button>\n        \n        <ng-template cdk-portal #addConditionTemplate=\"cdkPortal\">\n            <div class=\"dxc-chips mat-elevation-z8 dxc-more-chips\">\n                <mat-chip-list>\n                    <mat-chip *ngFor=\"let chip of selectedChips;let i = index\" class=\" mat-standard-chip mat-chip-selected\" [color]=\"chip.valid ? 'normal':'warn'\" [selectable]=\"false\" [removable]=\"removable\" (removed)=\"remove(chip,i,'alldel')\">\n                        {{chip.value}}\n                        <mat-icon matChipRemove *ngIf=\"removable && !isDisabled\">cancel</mat-icon>\n                    </mat-chip>\n                </mat-chip-list>\n            </div>\n        </ng-template>\n        <mat-hint *ngIf=\"isPasted\">{{pasteText}}</mat-hint>\n        <mat-hint *ngIf=\"maxChipsAllow > 0\" align=\"end\">{{selectedChips.length}}/{{maxChipsAllow}}</mat-hint>\n        <div *ngIf=\"!isValid && !isPasted &&!isDisabled\" class=\"mat-form-field-subscript-wrapper \" >\n            <ng-content select=\"mat-error\"></ng-content>\n        </div>\n    </mat-form-field>\n</form>", styles: ["@charset \"UTF-8\";.dxc-chips .mat-chip:not(.mat-basic-chip)+.mat-chip:not(.mat-basic-chip){margin:2px 4px 0 0}.dxc-chips .mat-chip:not(.mat-basic-chip){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);display:inline-flex;padding:1px 8px;border-radius:24px;align-items:center;cursor:default;margin-top:2px;margin-right:4px}.dxc-chips .mat-form-field-subscript-wrapper{margin-top:26px}.dxc-more-chips{border-radius:2px;margin-top:-2em;padding:8px;background-color:#fff;max-height:200px;overflow-y:auto}.dxc-chips-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.dxc-chips-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0%,rgba(0,0,0,.42) 33%,transparent 0%);background-size:4px 1px;background-repeat:repeat-x}\n"], components: [{ type: i2$3.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i3$1.MatChipList, selector: "mat-chip-list", inputs: ["errorStateMatcher", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "aria-orientation", "selectable", "tabIndex"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i2$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i2$4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$4.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i7.DefaultFlexDirective, selector: "  [fxFlex], [fxFlex.xs], [fxFlex.sm], [fxFlex.md],  [fxFlex.lg], [fxFlex.xl], [fxFlex.lt-sm], [fxFlex.lt-md],  [fxFlex.lt-lg], [fxFlex.lt-xl], [fxFlex.gt-xs], [fxFlex.gt-sm],  [fxFlex.gt-md], [fxFlex.gt-lg]", inputs: ["fxFlex", "fxFlex.xs", "fxFlex.sm", "fxFlex.md", "fxFlex.lg", "fxFlex.xl", "fxFlex.lt-sm", "fxFlex.lt-md", "fxFlex.lt-lg", "fxFlex.lt-xl", "fxFlex.gt-xs", "fxFlex.gt-sm", "fxFlex.gt-md", "fxFlex.gt-lg"] }, { type: i2$3.MatLabel, selector: "mat-label" }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatChipRemove, selector: "[matChipRemove]" }, { type: i9.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i3$1.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { type: i2$4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: RegExValidatorDirective, selector: "[regExValidationPattern]", inputs: ["regExValidationPattern"] }, { type: i2$4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i1$1.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { type: i2$3.MatSuffix, selector: "[matSuffix]" }, { type: i11.TemplatePortalDirective, selector: "[cdk-portal], [portal]", exportAs: ["cdkPortal"] }, { type: i2$3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcChipsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-chips', providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DxcChipsComponent),
                            multi: true
                        }
                    ], template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<form class=\"dxc-chips\" >\n    <mat-form-field [class.mat-chip-form-field-invalid]=\"!isValid && !isDisabled\" [class.dxc-chips-disabled]=\"isDisabled\" fxFlex=\"100%\" [floatLabel]=\"'auto'\" #chipparent>\n        <mat-label>{{placeholder}}</mat-label>\n        <mat-chip-list #chipList>\n            <mat-chip *ngFor=\"let chip of showChips;let i = index\" class=\" mat-standard-chip mat-chip-selected\" [selectable]=\"selectable\" [color]=\"chip.valid ? 'normal':'warn'\" [removable]=\"removable\" (removed)=\"remove(chip,i,'idel')\">\n                {{chip.value}}\n                <mat-icon matChipRemove *ngIf=\"removable && !isDisabled\">cancel</mat-icon>              \n            </mat-chip>\n            \n            <input #chipinput matInput regExValidationPattern=\"{{inputValidationFormat}}\" [style.display]=\"selectedChips.length >= maxChipsAllow ? 'none' : 'block' \"\n                [matChipInputFor]=\"chipList\" [formControl]=\"chipListCtrl\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\" (paste)=\"onPaste($event)\" />\n        </mat-chip-list>\n\n        <button cdk-overlay-origin #addConditionOrigin=\"cdkOverlayOrigin\" [style.display]=\"isShowMoreVisible?'block':'none'\" matSuffix\n            mat-icon-button color=\"primary\" (click)=\"showAllChips()\">\n            <mat-icon aria-label=\"show all\">more_horiz</mat-icon>\n        </button>\n        \n        <ng-template cdk-portal #addConditionTemplate=\"cdkPortal\">\n            <div class=\"dxc-chips mat-elevation-z8 dxc-more-chips\">\n                <mat-chip-list>\n                    <mat-chip *ngFor=\"let chip of selectedChips;let i = index\" class=\" mat-standard-chip mat-chip-selected\" [color]=\"chip.valid ? 'normal':'warn'\" [selectable]=\"false\" [removable]=\"removable\" (removed)=\"remove(chip,i,'alldel')\">\n                        {{chip.value}}\n                        <mat-icon matChipRemove *ngIf=\"removable && !isDisabled\">cancel</mat-icon>\n                    </mat-chip>\n                </mat-chip-list>\n            </div>\n        </ng-template>\n        <mat-hint *ngIf=\"isPasted\">{{pasteText}}</mat-hint>\n        <mat-hint *ngIf=\"maxChipsAllow > 0\" align=\"end\">{{selectedChips.length}}/{{maxChipsAllow}}</mat-hint>\n        <div *ngIf=\"!isValid && !isPasted &&!isDisabled\" class=\"mat-form-field-subscript-wrapper \" >\n            <ng-content select=\"mat-error\"></ng-content>\n        </div>\n    </mat-form-field>\n</form>", styles: ["@charset \"UTF-8\";.dxc-chips .mat-chip:not(.mat-basic-chip)+.mat-chip:not(.mat-basic-chip){margin:2px 4px 0 0}.dxc-chips .mat-chip:not(.mat-basic-chip){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);display:inline-flex;padding:1px 8px;border-radius:24px;align-items:center;cursor:default;margin-top:2px;margin-right:4px}.dxc-chips .mat-form-field-subscript-wrapper{margin-top:26px}.dxc-more-chips{border-radius:2px;margin-top:-2em;padding:8px;background-color:#fff;max-height:200px;overflow-y:auto}.dxc-chips-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.dxc-chips-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0%,rgba(0,0,0,.42) 33%,transparent 0%);background-size:4px 1px;background-repeat:repeat-x}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.Overlay }]; }, propDecorators: { forEdit: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], inputValidationFormat: [{
                type: Input
            }], maxChipsAllow: [{
                type: Input
            }], maxChipsShow: [{
                type: Input
            }], isValid: [{
                type: Input
            }], inputPattern: [{
                type: Input
            }], forSave: [{
                type: Output
            }], addConditionOrigin: [{
                type: ViewChild,
                args: ['addConditionOrigin']
            }], addConditionTemplate: [{
                type: ViewChild,
                args: ['addConditionTemplate']
            }], chipParent: [{
                type: ViewChild,
                args: ['chipparent', { read: ElementRef }]
            }], chipInput: [{
                type: ViewChild,
                args: ['chipinput']
            }] } });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
// tslint:disable:no-forward-ref
// tslint:disable:no-empty
class DxcChipAutocompleteComponent {
    constructor(elRef, overlay, _parentFormGroup) {
        this.elRef = elRef;
        this.overlay = overlay;
        this._parentFormGroup = _parentFormGroup;
        // chip-input form control
        this.autoCompleteChipList = new FormControl('');
        // mat-chip properties
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.isShowMoreVisible = false;
        this.disabled = false;
        // public filteredOptions: NgIterable<any>; //newcode
        this.chips = [];
        this.showChips = [];
        this.isInvalid = false;
        this.isError = false;
        this.errorMessage = '';
        this.isPasted = false;
        this.pasteText = '';
        this.dropdownValue = [];
        this.startIndex = 0;
        this._dropdownList = [];
        this._dropdownLimit = 0;
        this._searchLimit = 0;
        this._displayDropdownByDefault = false;
        this._maxChipsAllow = 0;
        this._maxChipsShow = 0;
        this._replaceStop = ['***'];
        this._required = false;
        this._readonly = false;
        this._searchBy = 'all';
        this.propagateChange = () => {
        };
    }
    set required(value) {
        this._required = coerceBooleanProperty(value);
    }
    get required() {
        return this._required;
    }
    set readonly(value) {
        this._readonly = coerceBooleanProperty(value);
    }
    get readonly() {
        return this._readonly;
    }
    set dropdownList(obs) {
        if (obs) { //newcode
            this.ddlSubscription = obs.subscribe((list) => {
                this._dropdownList = list;
                this.dropdownValue = this._dropdownList;
                const selectedChips = [];
                for (const chip of this.chips) {
                    selectedChips.push(chip.id);
                }
                this.writeValue(selectedChips);
            });
        }
    }
    set dropdownLimit(value) {
        this._dropdownLimit = value;
    }
    get dropdownLimit() {
        return this._dropdownLimit;
    }
    set searchLimit(value) {
        this._searchLimit = value;
    }
    get searchLimit() {
        return this._searchLimit;
    }
    set displayDropdownByDefault(value) {
        this._displayDropdownByDefault = coerceBooleanProperty(value);
    }
    get displayDropdownByDefault() {
        return this._displayDropdownByDefault;
    }
    set maxChipsAllow(value) {
        this._maxChipsAllow = value;
        if (value !== 0 && this._maxChipsShow > value) {
            throw new Error('maxChipsShow should be lesser than or equal to maxChipsAllow');
        }
    }
    get maxChipsAllow() {
        return this._maxChipsAllow;
    }
    set maxChipsShow(value) {
        this._maxChipsShow = value;
        if (this._maxChipsAllow !== 0 && value > this._maxChipsAllow) {
            throw new Error('maxChipsShow should be lesser than or equal to maxChipsAllow');
        }
    }
    get maxChipsShow() {
        return this._maxChipsShow;
    }
    set replaceStop(value) {
        if (typeof value === 'string') {
            this._replaceStop = [value];
        }
        else {
            this._replaceStop = value;
        }
    }
    set searchBy(value) {
        this._searchBy = value;
    }
    get searchBy() {
        return this._searchBy;
    }
    ngOnInit() {
        this.showDropdropdown(); // newcode
        this.controlSubscription = this.autoCompleteChipList.valueChanges.pipe(debounceTime(300)).subscribe((val) => {
            if (val) {
                this.updateDropdown(val);
            }
        });
    }
    ngOnChanges() {
        this.returnData(this.chips);
    }
    ngDoCheck() {
        this.returnData(this.chips);
    }
    ngOnDestroy() {
        this._dropdownList = [];
        this.dropdownValue = [];
        if (this.ddlSubscription) {
            this.ddlSubscription.unsubscribe();
        }
        if (this.controlSubscription) {
            this.controlSubscription.unsubscribe();
        }
    }
    registerOnValidatorChange(fn) {
    }
    validate(c) {
        const errors = [];
        if (this.isInvalid) {
            return ({ parseError: true });
        }
        return null;
    }
    writeValue(obj) {
        this.chips = [];
        this.showChips = this.setShowChips(this.chips);
        if (this.chipInput) { // newcode
            this.chipInput.nativeElement.value = '';
        }
        this.autoCompleteChipList.reset();
        this.dropdownValue = this._dropdownList;
        this.updateDropdown('');
        this.toggleInput('');
        this.ForEditControl(obj);
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        if (isDisabled) {
            this.autoCompleteChipList.disable();
            console.log('disabled');
        }
        else {
            this.autoCompleteChipList.enable();
            console.log('enabled');
        }
    }
    clearOnBlur() {
        // let chipValue = [];
        // if (this.autoCompleteChipList.value && (typeof this.autoCompleteChipList.value) === 'string' ) {
        //   // console.log(this.autoCompleteChipList.value);
        //   chipValue = this.dropdownValue.filter(
        //     (obj) => obj.id.toLowerCase() === this.autoCompleteChipList.value.trim().toLowerCase()
        //   );
        // }
        // if (chipValue.length > 0) {
        //   const selection = chipValue[0];
        //   if (selection.id === this._replaceStop) {
        //     this.chips = [];
        //   }
        //   if (this.chips.filter((obj) => obj.id === selection.id).length === 0) {
        //     this.chips.push(selection);
        //   }
        //   this.showChips = this.setShowChips(this.chips);
        //   this.dropdownValue = this.dropdownValue.filter((obj) => obj.id !== selection.id);
        //   this.returnData(this.chips);
        //   if (this.displayDropdownByDefault === true) {
        //     this.filteredOptions = this.dropdownValue.slice(0, 10);
        //   }
        //   this.toggleInput(selection.id);
        //   // this.updateDropdown('');
        //   (this.chipInput.nativeElement as HTMLInputElement).focus();
        // }
        this.chipInput.nativeElement.value = '';
        this.validateAllChips();
        // this.autoCompleteChipList.reset();
    }
    onPaste(event) {
        if (!this.disabled && !this.readonly) {
            const pastedItems = event.clipboardData.getData('Text').split(/[.]|[,]|[\s]|[\r]|[\n]/).filter((value) => value.trim() !== '');
            let i = 0;
            for (const item of pastedItems) {
                let chipValue = [];
                chipValue = this.dropdownValue.filter((obj) => obj.id.toLowerCase() === item.trim().toLowerCase());
                if (chipValue.length > 0) {
                    const selection = chipValue[0];
                    if (this._replaceStop.filter((m) => m === selection.id).length > 0) {
                        this.chips = [];
                        this.dropdownValue = this._dropdownList;
                    }
                    if (this.chips.filter((obj) => obj.id === selection.id).length === 0) {
                        this.chips.push(selection);
                        i++;
                    }
                    // this.dropdownValue = this.dropdownValue.filter((obj) => obj.id !== selection.id);
                    if (!this.toggleInput(selection.id)) {
                        this.pasteText = i + ' of ' + pastedItems.length + ' items pasted. Max count reached';
                        break;
                    }
                }
                else {
                    if (this.chips.filter((obj) => obj.id.toLowerCase() === item.trim().toLowerCase()).length <= 0) {
                        const selection = {
                            id: item.trim(),
                            displayText: '',
                            value: item.trim(),
                            isUnavaliable: true
                        };
                        i++;
                        this.chips.push(selection);
                        if (!this.toggleInput(item)) {
                            this.pasteText = i + ' of ' + pastedItems.length + ' items pasted. Max count reached';
                            break;
                        }
                    }
                }
            }
            // console.log(this.chips);
            if (this.pasteText === '') {
                this.pasteText = i + ' of ' + pastedItems.length + ' items pasted.';
            }
            this.isPasted = true;
            setTimeout(() => {
                this.isPasted = false;
                this.pasteText = '';
            }, 3000);
            this.showChips = this.setShowChips(this.chips);
            this.returnData(this.chips);
            this.showDropdropdown();
        }
        event.preventDefault();
    }
    ngAfterViewInit() {
    }
    updateDropdown(str) {
        const strLength = str.length;
        const searchLimit = this.searchLimit ? this.searchLimit : 1;
        const dropLimit = this.dropdownLimit ? this.dropdownLimit : 10;
        const selectedChipLength = this.chips.length;
        if (this._maxChipsAllow !== 0 && this._maxChipsAllow <= selectedChipLength) {
            this.filteredOptions = this.dropdownValue.slice(0, 0);
        }
        else if (strLength >= searchLimit) {
            let tempFilter;
            switch (this._searchBy) {
                case 'id':
                    tempFilter = this.dropdownValue.filter((e) => e.id.toLowerCase().indexOf(str.toString().toLowerCase()) === 0)
                        .filter((e) => this.chips.filter((s) => s.id === e.id).length <= 0);
                    break;
                case 'value':
                    tempFilter = this.dropdownValue.filter((e) => e.value.toLowerCase().indexOf(str.toString().toLowerCase()) !== -1)
                        .filter((e) => this.chips.filter((s) => s.id === e.id).length <= 0);
                    break;
                default:
                    tempFilter = this.dropdownValue
                        .filter((e) => {
                        return (e.id.toLowerCase().indexOf(str.toString().toLowerCase()) === 0) ||
                            (e.value.toLowerCase().indexOf(str.toString().toLowerCase()) !== -1);
                    }).filter((e) => this.chips.filter((s) => s.id === e.id).length <= 0);
            }
            this.filteredOptions = tempFilter.sort((a, b) => {
                return (a.id.toLowerCase().indexOf(str.toLowerCase()) === 0) ? -1 :
                    (b.id.toLowerCase().indexOf(str.toLowerCase()) === 0) ? 1 : 0;
            })
                .slice(0, dropLimit);
        }
        else if (this._displayDropdownByDefault === true && strLength === 0) {
            this.filteredOptions = this.dropdownValue.slice(0, dropLimit);
        }
        else {
            this.filteredOptions = this.dropdownValue.slice(0, 0);
        }
    }
    toggleInput(val) {
        if (this._replaceStop.filter((m) => m === val).length > 0 || (this._maxChipsAllow !== 0 && this.chips.length >= this._maxChipsAllow)) {
            this._readonly = true;
            return false;
        }
        else {
            this.readonly = false;
            return true;
        }
    }
    addChip(event, input) {
        const selection = event.option.value;
        if (this._replaceStop.filter((m) => m === selection.id).length > 0) {
            this.chips = [];
        }
        if (this.chips.filter((obj) => obj.id === selection.id).length === 0) {
            this.chips.push(selection);
        }
        this.showChips = this.setShowChips(this.chips);
        // (this.chipInput.nativeElement as HTMLInputElement).focus();
        // this.autoCompleteChipList.markAsPristine();
        // this.dropdownValue = this.dropdownValue.filter((obj) => obj.id !== selection.id);
        if (input) {
            input.value = '';
        }
        this.returnData(this.chips);
        this.showDropdropdown();
        this.toggleInput(selection.id);
    }
    setShowChips(chips) {
        if (this._maxChipsShow === 0) {
            return chips;
        }
        this.startIndex = (chips.length > this._maxChipsShow) ?
            (chips.length - this._maxChipsShow) : 0;
        this.isShowMoreVisible = this.startIndex > 0 ? true : false;
        return chips.slice(this.startIndex);
    }
    removeChip(chip, deleteType) {
        console.log("dxc auto remove call");
        const index = this.chips.indexOf(chip);
        if (!this.disabled) {
            if (index >= 0) {
                this.chips.splice(index, 1);
                // if (!chip.isUnavaliable) {
                //   this.dropdownValue.push(chip);
                // }
                this.showChips = this.setShowChips(this.chips);
                this.chipInput.nativeElement.focus();
            }
            this.returnData(this.chips);
            this.showDropdropdown();
            if (this.chips.length === 0) {
                this.closeAllChips();
            }
            this.toggleInput('');
        }
    }
    returnData(value) {
        const selectedChips = [];
        for (const chip of value) {
            selectedChips.push(chip.id);
        }
        this.validateAllChips();
        this.propagateChange(selectedChips);
    }
    ForEditControl(value) {
        if ((value && value !== null && value.length >= 1) &&
            (this.chips === undefined || this.chips.length < 1)) {
            for (const item of value) {
                if (this.dropdownValue.filter((obj) => obj.id === item).length > 0) {
                    const valChip = this.dropdownValue.filter((obj) => obj.id === item);
                    this.chips.push(valChip[0]);
                    // this.dropdownValue = this.dropdownValue.filter((obj) => obj.id !== item);
                    this.toggleInput(item);
                }
                else {
                    const valChip = {
                        id: item,
                        displayText: '',
                        value: item,
                        isUnavaliable: true
                    };
                    this.chips.push(valChip);
                    this.toggleInput(item);
                    // console.warn(item + ' missing in suggestion dropdown. Cannot be retrived if deleted');
                }
            }
            this.showChips = this.setShowChips(this.chips);
        }
        // this.returnData(this.chips);
    }
    validateAllChips() {
        this.autoCompleteChipList.setErrors(null);
        if (!this.disabled) {
            if (this._required && this.chips.length === 0) {
                this.isError = true;
                this.autoCompleteChipList.setErrors({ required: true });
                this.errorMessage = 'Required';
            }
            else {
                this.isError = false;
            }
            if (this.chips.filter((obj) => obj.isUnavaliable).length > 0) {
                this.isInvalid = true;
                this.autoCompleteChipList.setErrors({ invalid: true });
                this.errorMessage = 'Invalid Item(s)';
            }
            else {
                this.isInvalid = false;
            }
        }
        else {
            this.autoCompleteChipList.disable();
        }
    }
    showAllChips() {
        /* const strategy = this.overlay.position()
           .connectedTo(
             this.addConditionOrigin.elementRef,
             { originX: 'end', originY: 'bottom' },
             { overlayX: 'end', overlayY: 'top' });*/
        const strategy = this.overlay.position()
            .flexibleConnectedTo(this.addConditionOrigin.elementRef)
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
        /* const strategy = this.overlay.position()
           .flexibleConnectedTo(this.addConditionOrigin.elementRef)
           .withPositions([{
               originX: 'end',
               originY: 'bottom',
               overlayX: 'start',
               overlayY: 'top',
           }, {
               originX: 'start',
               originY: 'top',
               overlayX: 'end',
               overlayY: 'top',
           }]); */
        const config = new OverlayConfig({
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop',
            positionStrategy: strategy,
            width: this.chipParent.nativeElement.getBoundingClientRect().width
        });
        this.overlayRef = this.overlay.create(config);
        this.overlayRef.attach(this.addConditionTemplate);
        this.overlayRef.backdropClick().subscribe(() => this.overlayRef.detach());
        this.overlayRef.keydownEvents().subscribe((event) => {
            if (event.keyCode === 27) {
                // this.overlayRef.detach();
                this.closeAllChips();
            }
        });
    }
    closeAllChips() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.chipInput.nativeElement.focus();
        }
    }
    showDropdropdown() {
        if (this._displayDropdownByDefault && this._displayDropdownByDefault === true) {
            const dropLimit = this.dropdownLimit ? this.dropdownLimit : 10;
            this.filteredOptions = this.dropdownValue.slice(0, this._dropdownLimit);
            // (this.chipInput.nativeElement as HTMLInputElement).focus();
        }
    }
}
DxcChipAutocompleteComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcChipAutocompleteComponent, deps: [{ token: i0.ElementRef }, { token: i1$1.Overlay }, { token: i2$4.FormGroupDirective, optional: true }], target: i0.ɵɵFactoryTarget.Component });
DxcChipAutocompleteComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcChipAutocompleteComponent, selector: "dxc-chip-autocomplete", inputs: { placeholder: "placeholder", hint: "hint", required: "required", readonly: "readonly", dropdownList: "dropdownList", dropdownLimit: "dropdownLimit", searchLimit: "searchLimit", displayDropdownByDefault: "displayDropdownByDefault", maxChipsAllow: "maxChipsAllow", maxChipsShow: "maxChipsShow", replaceStop: "replaceStop", searchBy: "searchBy" }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DxcChipAutocompleteComponent),
            multi: true
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => DxcChipAutocompleteComponent),
            multi: true
        }
    ], viewQueries: [{ propertyName: "addConditionOrigin", first: true, predicate: ["addConditionOrigin"], descendants: true }, { propertyName: "addConditionTemplate", first: true, predicate: ["addConditionTemplate"], descendants: true }, { propertyName: "chipParent", first: true, predicate: ["chipparent"], descendants: true, read: ElementRef }, { propertyName: "chipInput", first: true, predicate: ["chipInput"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<form class=\"dxc-chip-autocomplete\">\n\t<mat-form-field #chipparent [class.mat-chip-form-field-invalid]=\"!!(autoCompleteChipList && autoCompleteChipList.invalid && (autoCompleteChipList.touched || (_parentFormGroup && _parentFormGroup.submitted)))\">\n\t\t<mat-label>{{placeholder}}</mat-label>\n\t\t<mat-chip-list #chipList class=\"dxc-chips\" >\n\t\t\t<mat-chip class=\" mat-standard-chip mat-chip-selected\" selected=\"true\" *ngFor=\"let chip of showChips\" [selectable]=\"selectable\" [color]=\"chip.isUnavaliable ? 'warn':'normal'\" [removable]=\"removable\" (removed)=\"removeChip(chip)\">\n\t\t\t\t{{chip.displayText || chip.id}} \n\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable && !disabled\">cancel</mat-icon>\t\t\t\t\n\t\t\t</mat-chip>\n\t\t\t<input matInput [readonly]=\"readonly\" #chipInput class=\"autoInput\" \n\t\t\t\t[matChipInputFor]=\"chipList\"\n\t\t\t\t[matAutocomplete]=\"auto\" \n\t\t\t\t[matChipInputAddOnBlur]=\"addOnBlur\" \n\t\t\t\t[formControl]=\"autoCompleteChipList\" \n\t\t\t\t(blur)=\"clearOnBlur()\" (focus)=\"updateDropdown('')\" (paste)=\"onPaste($event)\"/>\n\t\t</mat-chip-list>\n\t\t<mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"addChip($event, chipInput)\">\n\t\t\t<mat-option *ngFor=\"let option of filteredOptions\" [value]=\"option\">\n\t\t\t\t<span>{{option.value}}</span>\n\t\t\t</mat-option>\n\t\t</mat-autocomplete>\n\t\t<button cdk-overlay-origin #addConditionOrigin=\"cdkOverlayOrigin\" [style.display]=\"isShowMoreVisible?'block':'none'\" matSuffix\n\t\t    mat-icon-button color=\"primary\" (click)=\"showAllChips()\">\n\t\t\t<mat-icon aria-label=\"show all\">more_horiz</mat-icon>\n\t\t</button>\n\n\t\t<ng-template cdk-portal #addConditionTemplate=\"cdkPortal\">\n\t\t\t<div class=\"dxc-chip-autocomplete mat-elevation-z8 dxc-more-chips\">\n\t\t\t\t<mat-chip-list #chipList>\n\t\t\t\t\t<mat-chip class=\" mat-standard-chip mat-chip-selected\" selected=\"true\" *ngFor=\"let chip of chips;let i = index\" [selectable]=\"false\" [color]=\"chip.isUnavaliable ? 'warn':'normal'\" [removable]=\"removable\" (removed)=\"removeChip(chip)\">\n\t\t\t\t\t\t{{chip.displayText || chip.id}}\n\t\t\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable && !disabled\">cancel</mat-icon>\n\t\t\t\t\t</mat-chip>\n\t\t\t\t</mat-chip-list>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<mat-hint *ngIf=\"maxChipsAllow > 0\" align=\"end\">{{chips.length}}/{{maxChipsAllow}}</mat-hint>\n\t\t<mat-hint *ngIf=\"isPasted\">{{pasteText}}</mat-hint>\n\t\t<mat-hint *ngIf=\"hint && !isInvalid && !isError && !isPasted\">{{hint}}</mat-hint>\n\t\t<!-- <mat-hint *ngIf=\"tempHint && !isInvalid\" align=\"start\" class=\"errorhighlight\">{{errorMessage}}</mat-hint> -->\n\t\t<mat-hint class=\"mat-error\" *ngIf=\"!isPasted && !!(autoCompleteChipList && autoCompleteChipList.invalid && (autoCompleteChipList.touched || (_parentFormGroup && _parentFormGroup.submitted)))\">{{errorMessage}}</mat-hint>\n\t\t<!-- <mat-hint class=\"mat-error\" *ngIf=\"autoCompleteChipList.hasError('invalid')\">Invalid chip(s)</mat-hint> -->\n\t</mat-form-field>\n\t\n</form>", styles: ["@charset \"UTF-8\";.dxc-chip-autocomplete .mat-form-field{width:100%}.displayNone{display:none}.displayBlock{display:block}.mat-autocomplete-panel.mat-autocomplete-visible{min-width:400px!important}.dxc-chip-autocomplete .mat-chip:not(.mat-basic-chip)+.mat-chip:not(.mat-basic-chip){margin:2px 4px 0 0}.dxc-chip-autocomplete .mat-chip-list-wrapper{margin-top:-2px}.dxc-chip-autocomplete .mat-chip:not(.mat-basic-chip){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);display:inline-flex;padding:1px 8px;border-radius:24px;align-items:center;cursor:default;margin-top:2px;margin-right:4px}.error-underline .mat-input-underline{background-color:#dc3716}.error-underline .mat-form-field-label,.error-underline .errorhighlight,.errorhighlight{color:#dc3716}.dxc-more-chips{border-radius:2px;margin-top:-2em;padding:8px;background-color:#fff;max-height:200px;overflow-y:auto}\n"], components: [{ type: i2$3.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i3$1.MatChipList, selector: "mat-chip-list", inputs: ["errorStateMatcher", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "aria-orientation", "selectable", "tabIndex"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { type: i6.MatAutocomplete, selector: "mat-autocomplete", inputs: ["disableRipple"], exportAs: ["matAutocomplete"] }, { type: i2$2.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { type: i2$1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i2$4.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i2$4.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i2$4.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i2$3.MatLabel, selector: "mat-label" }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3$1.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i3$1.MatChipRemove, selector: "[matChipRemove]" }, { type: i9.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i3$1.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { type: i6.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", exportAs: ["matAutocompleteTrigger"] }, { type: i2$4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i2$4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i2$4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { type: i1$1.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { type: i2$3.MatSuffix, selector: "[matSuffix]" }, { type: i11.TemplatePortalDirective, selector: "[cdk-portal], [portal]", exportAs: ["cdkPortal"] }, { type: i2$3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcChipAutocompleteComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-chip-autocomplete', encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => DxcChipAutocompleteComponent),
                            multi: true
                        },
                        {
                            provide: NG_VALIDATORS,
                            useExisting: forwardRef(() => DxcChipAutocompleteComponent),
                            multi: true
                        }
                    ], template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<form class=\"dxc-chip-autocomplete\">\n\t<mat-form-field #chipparent [class.mat-chip-form-field-invalid]=\"!!(autoCompleteChipList && autoCompleteChipList.invalid && (autoCompleteChipList.touched || (_parentFormGroup && _parentFormGroup.submitted)))\">\n\t\t<mat-label>{{placeholder}}</mat-label>\n\t\t<mat-chip-list #chipList class=\"dxc-chips\" >\n\t\t\t<mat-chip class=\" mat-standard-chip mat-chip-selected\" selected=\"true\" *ngFor=\"let chip of showChips\" [selectable]=\"selectable\" [color]=\"chip.isUnavaliable ? 'warn':'normal'\" [removable]=\"removable\" (removed)=\"removeChip(chip)\">\n\t\t\t\t{{chip.displayText || chip.id}} \n\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable && !disabled\">cancel</mat-icon>\t\t\t\t\n\t\t\t</mat-chip>\n\t\t\t<input matInput [readonly]=\"readonly\" #chipInput class=\"autoInput\" \n\t\t\t\t[matChipInputFor]=\"chipList\"\n\t\t\t\t[matAutocomplete]=\"auto\" \n\t\t\t\t[matChipInputAddOnBlur]=\"addOnBlur\" \n\t\t\t\t[formControl]=\"autoCompleteChipList\" \n\t\t\t\t(blur)=\"clearOnBlur()\" (focus)=\"updateDropdown('')\" (paste)=\"onPaste($event)\"/>\n\t\t</mat-chip-list>\n\t\t<mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"addChip($event, chipInput)\">\n\t\t\t<mat-option *ngFor=\"let option of filteredOptions\" [value]=\"option\">\n\t\t\t\t<span>{{option.value}}</span>\n\t\t\t</mat-option>\n\t\t</mat-autocomplete>\n\t\t<button cdk-overlay-origin #addConditionOrigin=\"cdkOverlayOrigin\" [style.display]=\"isShowMoreVisible?'block':'none'\" matSuffix\n\t\t    mat-icon-button color=\"primary\" (click)=\"showAllChips()\">\n\t\t\t<mat-icon aria-label=\"show all\">more_horiz</mat-icon>\n\t\t</button>\n\n\t\t<ng-template cdk-portal #addConditionTemplate=\"cdkPortal\">\n\t\t\t<div class=\"dxc-chip-autocomplete mat-elevation-z8 dxc-more-chips\">\n\t\t\t\t<mat-chip-list #chipList>\n\t\t\t\t\t<mat-chip class=\" mat-standard-chip mat-chip-selected\" selected=\"true\" *ngFor=\"let chip of chips;let i = index\" [selectable]=\"false\" [color]=\"chip.isUnavaliable ? 'warn':'normal'\" [removable]=\"removable\" (removed)=\"removeChip(chip)\">\n\t\t\t\t\t\t{{chip.displayText || chip.id}}\n\t\t\t\t\t\t<mat-icon matChipRemove *ngIf=\"removable && !disabled\">cancel</mat-icon>\n\t\t\t\t\t</mat-chip>\n\t\t\t\t</mat-chip-list>\n\t\t\t</div>\n\t\t</ng-template>\n\t\t<mat-hint *ngIf=\"maxChipsAllow > 0\" align=\"end\">{{chips.length}}/{{maxChipsAllow}}</mat-hint>\n\t\t<mat-hint *ngIf=\"isPasted\">{{pasteText}}</mat-hint>\n\t\t<mat-hint *ngIf=\"hint && !isInvalid && !isError && !isPasted\">{{hint}}</mat-hint>\n\t\t<!-- <mat-hint *ngIf=\"tempHint && !isInvalid\" align=\"start\" class=\"errorhighlight\">{{errorMessage}}</mat-hint> -->\n\t\t<mat-hint class=\"mat-error\" *ngIf=\"!isPasted && !!(autoCompleteChipList && autoCompleteChipList.invalid && (autoCompleteChipList.touched || (_parentFormGroup && _parentFormGroup.submitted)))\">{{errorMessage}}</mat-hint>\n\t\t<!-- <mat-hint class=\"mat-error\" *ngIf=\"autoCompleteChipList.hasError('invalid')\">Invalid chip(s)</mat-hint> -->\n\t</mat-form-field>\n\t\n</form>", styles: ["@charset \"UTF-8\";.dxc-chip-autocomplete .mat-form-field{width:100%}.displayNone{display:none}.displayBlock{display:block}.mat-autocomplete-panel.mat-autocomplete-visible{min-width:400px!important}.dxc-chip-autocomplete .mat-chip:not(.mat-basic-chip)+.mat-chip:not(.mat-basic-chip){margin:2px 4px 0 0}.dxc-chip-autocomplete .mat-chip-list-wrapper{margin-top:-2px}.dxc-chip-autocomplete .mat-chip:not(.mat-basic-chip){transition:box-shadow .28s cubic-bezier(.4,0,.2,1);display:inline-flex;padding:1px 8px;border-radius:24px;align-items:center;cursor:default;margin-top:2px;margin-right:4px}.error-underline .mat-input-underline{background-color:#dc3716}.error-underline .mat-form-field-label,.error-underline .errorhighlight,.errorhighlight{color:#dc3716}.dxc-more-chips{border-radius:2px;margin-top:-2em;padding:8px;background-color:#fff;max-height:200px;overflow-y:auto}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1$1.Overlay }, { type: i2$4.FormGroupDirective, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { placeholder: [{
                type: Input
            }], hint: [{
                type: Input
            }], required: [{
                type: Input
            }], readonly: [{
                type: Input
            }], dropdownList: [{
                type: Input,
                args: ['dropdownList']
            }], dropdownLimit: [{
                type: Input,
                args: ['dropdownLimit']
            }], searchLimit: [{
                type: Input,
                args: ['searchLimit']
            }], displayDropdownByDefault: [{
                type: Input
            }], maxChipsAllow: [{
                type: Input,
                args: ['maxChipsAllow']
            }], maxChipsShow: [{
                type: Input,
                args: ['maxChipsShow']
            }], replaceStop: [{
                type: Input,
                args: ['replaceStop']
            }], searchBy: [{
                type: Input,
                args: ['searchBy']
            }], addConditionOrigin: [{
                type: ViewChild,
                args: ['addConditionOrigin']
            }], addConditionTemplate: [{
                type: ViewChild,
                args: ['addConditionTemplate']
            }], chipParent: [{
                type: ViewChild,
                args: ['chipparent', { read: ElementRef }]
            }], chipInput: [{
                type: ViewChild,
                args: ['chipInput']
            }] } });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class DxcChipErrorComponent {
}
DxcChipErrorComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcChipErrorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DxcChipErrorComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.2", type: DxcChipErrorComponent, selector: "dxc-chip-error", ngImport: i0, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<ng-container>\n    <mat-hint class=\"mat-error\">\n        <ng-content></ng-content>\n    </mat-hint>\n</ng-container>", directives: [{ type: i2$3.MatHint, selector: "mat-hint", inputs: ["align", "id"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcChipErrorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'dxc-chip-error', encapsulation: ViewEncapsulation.None, template: "<!--\n    Unpublished work \u00A9 2019 DXC Technology Company.\n    All rights reserved.\n    Use, duplication, and/or alteration is subject to license terms.\n-->\n\n<ng-container>\n    <mat-hint class=\"mat-error\">\n        <ng-content></ng-content>\n    </mat-hint>\n</ng-container>" }]
        }] });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
class ValidationFormatterDirective {
    constructor(el) {
        this.el = el;
        /*
        private regexMap = { // add your own
            '999': /^([0-9]){0,3}$/g,
            '9999': /^([0-9]){0,4}$/g,
            '999-': /^([0-9-]){0,7}$/g,
            'decimalTwo': /^\d{0,6}\.?\d{0,2}$/g,
            '9999.999': /^\d{0,7}\.?\d{0,3}$/g,
            'alpha25': /^([a-zA-Z0-9]){0,25}$/g,
            'number8Wild': /^([0-9*]){0,8}$/g,
            'alpha10Wild': /^([a-zA-Z0-9*]){0,10}$/g,
            'alpha9': /^([a-zA-Z0-9]){0,9}$/g,
            'time': /^([0-9]){0,2}$/g,
            'dateFormat': /^\d{0,2}\/?\d{0,2}\/?\d{0,4}$/g,
            'timeHour': /^([0-1]?[0-9]|2[0-3])$/g,
            'timeMin': /^([0-5]?[0-9])$/g,
            "9comma": /^([0-9,]){0,10}$/g
        };
        */
        this.regexMap = {
            '999': /^[0-9]{0,3}$/,
            '9999': /^[0-9]{0,4}$/,
            '999-': /^[0-9-]{0,7}$/,
            'decimalTwo': /^\d{0,6}\.?\d{0,2}$/,
            '9999.999': /^\d{0,7}\.?\d{0,3}$/,
            'alpha25': /^[a-zA-Z0-9]{0,25}$/,
            'number8Wild': /^[0-9*]{0,8}$/,
            'alpha10Wild': /^[a-zA-Z0-9*]{0,10}$/,
            'alpha9': /^[a-zA-Z0-9]{0,9}$/,
            'time': /^[0-9]{0,2}$/,
            'dateFormat_M/D/YYYY': /^\d{0,2}\/?\d{0,2}\/?\d{0,4}$/,
            'dateFormat_M-D-YYYY': /^\d{0,2}\-?\d{0,2}\-?\d{0,4}$/,
            'timeHour': /^[0-1]?[0-9]|2[0-3]$/,
            'timeMin': /^[0-5]?[0-9]$/,
            '9comma': /^[0-9,]{0,10}$/
        };
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home'];
    }
    nInput(event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        this.pattern = this.regexMap[this.validationFormat];
        const current = this.el.nativeElement.value;
        const next = current.concat(event.key);
        if (next && !String(next).match(this.pattern)) {
            event.preventDefault();
        }
    }
}
ValidationFormatterDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ValidationFormatterDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ValidationFormatterDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.3.2", type: ValidationFormatterDirective, selector: "[validationFormat]", inputs: { validationFormat: "validationFormat" }, host: { listeners: { "keypress": "nInput($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: ValidationFormatterDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[validationFormat]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { validationFormat: [{
                type: Input,
                args: ['validationFormat']
            }], nInput: [{
                type: HostListener,
                args: ['keypress', ['$event']]
            }] } });

/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
class DxcCoreModule {
}
DxcCoreModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcCoreModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DxcCoreModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcCoreModule, declarations: [DxcAlertMessageComponent,
        DxcAppLayoutComponent,
        DxcAppContentComponent,
        DxcAppLeftContentComponent,
        DxcAppRightContentComponent,
        DxcAppCenterContentComponent,
        DxcFixedTopContentComponent,
        DxcAppTopContentComponent,
        DxcHeaderComponent,
        DxcSessionComponent,
        DxcSessionControlsComponent,
        DxcSessionContentComponent,
        DxcNavigationComponent,
        DxcClassSelectorComponent,
        DxcChipsComponent,
        DxcChipAutocompleteComponent,
        DxcChipErrorComponent,
        DxcTabNavBarComponent,
        DxcConfirmDialogComponent,
        ValidationFormatterDirective,
        RegExValidatorDirective,
        ObservablePipe], imports: [AngularModule, MaterialModule], exports: [AngularModule,
        MaterialModule,
        DxcAlertMessageComponent,
        DxcAppLayoutComponent,
        DxcAppLeftContentComponent,
        DxcAppRightContentComponent,
        DxcAppCenterContentComponent,
        DxcFixedTopContentComponent,
        DxcAppTopContentComponent,
        DxcAppContentComponent,
        DxcHeaderComponent,
        DxcSessionComponent,
        DxcSessionControlsComponent,
        DxcSessionContentComponent,
        DxcNavigationComponent,
        DxcClassSelectorComponent,
        DxcChipsComponent,
        DxcChipAutocompleteComponent,
        DxcChipErrorComponent,
        DxcTabNavBarComponent,
        DxcConfirmDialogComponent,
        ValidationFormatterDirective,
        RegExValidatorDirective,
        ObservablePipe] });
DxcCoreModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcCoreModule, providers: [], imports: [[AngularModule, MaterialModule], AngularModule,
        MaterialModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.2", ngImport: i0, type: DxcCoreModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [AngularModule, MaterialModule],
                    declarations: [
                        DxcAlertMessageComponent,
                        DxcAppLayoutComponent,
                        DxcAppContentComponent,
                        DxcAppLeftContentComponent,
                        DxcAppRightContentComponent,
                        DxcAppCenterContentComponent,
                        DxcFixedTopContentComponent,
                        DxcAppTopContentComponent,
                        DxcHeaderComponent,
                        DxcSessionComponent,
                        DxcSessionControlsComponent,
                        DxcSessionContentComponent,
                        DxcNavigationComponent,
                        DxcClassSelectorComponent,
                        DxcChipsComponent,
                        DxcChipAutocompleteComponent,
                        DxcChipErrorComponent,
                        DxcTabNavBarComponent,
                        DxcConfirmDialogComponent,
                        ValidationFormatterDirective,
                        RegExValidatorDirective,
                        ObservablePipe
                    ],
                    exports: [
                        AngularModule,
                        MaterialModule,
                        DxcAlertMessageComponent,
                        DxcAppLayoutComponent,
                        DxcAppLeftContentComponent,
                        DxcAppRightContentComponent,
                        DxcAppCenterContentComponent,
                        DxcFixedTopContentComponent,
                        DxcAppTopContentComponent,
                        DxcAppContentComponent,
                        DxcHeaderComponent,
                        DxcSessionComponent,
                        DxcSessionControlsComponent,
                        DxcSessionContentComponent,
                        DxcNavigationComponent,
                        DxcClassSelectorComponent,
                        DxcChipsComponent,
                        DxcChipAutocompleteComponent,
                        DxcChipErrorComponent,
                        DxcTabNavBarComponent,
                        DxcConfirmDialogComponent,
                        ValidationFormatterDirective,
                        RegExValidatorDirective,
                        ObservablePipe
                    ],
                    providers: [],
                    entryComponents: [DxcConfirmDialogComponent]
                    //schemas: [CUSTOM_ELEMENTS_SCHEMA]
                }]
        }] });

/*
 * Public API Surface of core-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AceOverlayContainer, AngularModule, DialogsService, DxcAlertMessageComponent, DxcAppCenterContentComponent, DxcAppContentComponent, DxcAppLayoutComponent, DxcAppLeftContentComponent, DxcAppRightContentComponent, DxcAppTopContentComponent, DxcChipAutocompleteComponent, DxcChipErrorComponent, DxcChipsComponent, DxcClassSelectorComponent, DxcConfirmDialogComponent, DxcCoreModule, DxcFixedTopContentComponent, DxcHeaderComponent, DxcNavigationComponent, DxcSessionComponent, DxcSessionContentComponent, DxcSessionControlsComponent, DxcTabNavBarComponent, MaterialModule, Message, MessageService, MessageType, ObservablePipe, RegExValidatorDirective, User, ValidationFormatterDirective, overlayFactory };
//# sourceMappingURL=core-lib.mjs.map
