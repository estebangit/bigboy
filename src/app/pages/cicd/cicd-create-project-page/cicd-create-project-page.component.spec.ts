import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CicdCreateProjectPageComponent } from './cicd-create-project-page.component';

describe('CicdCreateProjectPageComponent', () => {
    let component: CicdCreateProjectPageComponent;
    let fixture: ComponentFixture<CicdCreateProjectPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CicdCreateProjectPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CicdCreateProjectPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
