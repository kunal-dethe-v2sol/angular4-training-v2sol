import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedNavigationTopGuestComponent} from './shared-navigation-top-guest.component';

describe('SharedNavigationTopGuestComponent', () => {
    let component: SharedNavigationTopGuestComponent;
    let fixture: ComponentFixture<SharedNavigationTopGuestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedNavigationTopGuestComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedNavigationTopGuestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
