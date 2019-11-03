import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraCreateProjectPageComponent } from './jira-create-project-page.component';

describe('JiraCreateProjectPageComponent', () => {
    let component: JiraCreateProjectPageComponent;
    let fixture: ComponentFixture<JiraCreateProjectPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [JiraCreateProjectPageComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(JiraCreateProjectPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
