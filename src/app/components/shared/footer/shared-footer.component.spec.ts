import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SharedFooterComponent} from './shared-footer.component';

describe('SharedFooterComponent', () => {
    let component: SharedFooterComponent;
    let fixture: ComponentFixture<SharedFooterComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SharedFooterComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SharedFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
