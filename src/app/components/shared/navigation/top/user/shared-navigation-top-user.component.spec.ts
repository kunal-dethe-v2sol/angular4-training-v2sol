import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedNavigationTopUserComponent} from './shared-navigation-top-user.component';

describe('SharedNavigationTopUserComponent', () => {
    let component: SharedNavigationTopUserComponent;
    let fixture: ComponentFixture<SharedNavigationTopUserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedNavigationTopUserComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedNavigationTopUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
