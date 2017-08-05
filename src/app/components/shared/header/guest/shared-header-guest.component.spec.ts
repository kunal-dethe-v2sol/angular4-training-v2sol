import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedHeaderGuestComponent} from './shared-header-guest.component';

describe('SharedHeaderGuestComponent', () => {
    let component: SharedHeaderGuestComponent;
    let fixture: ComponentFixture<SharedHeaderGuestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedHeaderGuestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedHeaderGuestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
