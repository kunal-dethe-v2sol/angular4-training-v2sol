import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedFooterUserComponent} from './shared-footer-user.component';

describe('SharedFooterUserComponent', () => {
    let component: SharedFooterUserComponent;
    let fixture: ComponentFixture<SharedFooterUserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedFooterUserComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedFooterUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
