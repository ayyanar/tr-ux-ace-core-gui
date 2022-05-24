/*
 * Unpublished work © 2019 DXC Technology Company.
 * All rights reserved.
 * Use, duplication, and/or alteration is subject to license terms.
 */
import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import * as i0 from "@angular/core";
export class AceOverlayContainer extends OverlayContainer {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNlLW92ZXJsYXktY29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpYi9zZXJ2aWNlcy9hY2Utb3ZlcmxheS1jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUVILE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBR3hELE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7SUFHdkMsZ0JBQWdCO1FBQzlCLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUVqRCxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7SUFDckMsQ0FBQzs7Z0hBVFUsbUJBQW1CO29IQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBVbnB1Ymxpc2hlZCB3b3JrIMKpIDIwMTkgRFhDIFRlY2hub2xvZ3kgQ29tcGFueS5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBVc2UsIGR1cGxpY2F0aW9uLCBhbmQvb3IgYWx0ZXJhdGlvbiBpcyBzdWJqZWN0IHRvIGxpY2Vuc2UgdGVybXMuXG4gKi9cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPdmVybGF5Q29udGFpbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQWNlT3ZlcmxheUNvbnRhaW5lciBleHRlbmRzIE92ZXJsYXlDb250YWluZXIge1xuXG4gIFxuICBwdWJsaWMgb3ZlcnJpZGUgX2NyZWF0ZUNvbnRhaW5lcigpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY2RrLW92ZXJsYXktY29udGFpbmVyJyk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNlLWFwcC1jb250YWluZXInKS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHRoaXMuX2NvbnRhaW5lckVsZW1lbnQgPSBjb250YWluZXI7XG4gIH1cbn1cbiJdfQ==