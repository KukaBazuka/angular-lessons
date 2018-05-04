import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UserStatusWidgetComponent} from './user-status-widget.component';

describe('UserStatusWidgetComponent', () => {
    let component: UserStatusWidgetComponent;
    let fixture: ComponentFixture<UserStatusWidgetComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserStatusWidgetComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserStatusWidgetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
