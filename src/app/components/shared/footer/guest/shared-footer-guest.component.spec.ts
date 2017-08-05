import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedFooterGuestComponent} from './shared-footer-guest.component';

describe('SharedFooterGuestComponent', () => {
    let component: SharedFooterGuestComponent;
    let fixture: ComponentFixture<SharedFooterGuestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedFooterGuestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedFooterGuestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
