import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedNavigationTopComponent} from './shared-navigation-top.component';

describe('SharedNavigationTopComponent', () => {
    let component: SharedNavigationTopComponent;
    let fixture: ComponentFixture<SharedNavigationTopComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedNavigationTopComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedNavigationTopComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
