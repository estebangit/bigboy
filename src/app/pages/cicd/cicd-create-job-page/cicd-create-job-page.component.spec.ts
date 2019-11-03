import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicdCreateJobPageComponent } from './cicd-create-job-page.component';

describe('CicdCreateJobPageComponent', () => {
    let component: CicdCreateJobPageComponent;
    let fixture: ComponentFixture<CicdCreateJobPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CicdCreateJobPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CicdCreateJobPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
