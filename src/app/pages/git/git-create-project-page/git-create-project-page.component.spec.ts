import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { GitCreateProjectPageComponent } from './git-create-project-page.component';
import { MaterialModule } from '../../../material.module';

describe('GitCreateProjectPageComponent', () => {
    let component: GitCreateProjectPageComponent;
    let fixture: ComponentFixture<GitCreateProjectPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GitCreateProjectPageComponent],
            imports: [MaterialModule, BrowserAnimationsModule, FormsModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GitCreateProjectPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
