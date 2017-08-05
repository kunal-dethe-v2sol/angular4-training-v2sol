import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedHeaderUserComponent} from './shared-header-user.component';

describe('SharedHeaderUserComponent', () => {
    let component: SharedHeaderUserComponent;
    let fixture: ComponentFixture<SharedHeaderUserComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedHeaderUserComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedHeaderUserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
