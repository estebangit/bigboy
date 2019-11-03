import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { GitCreateRepoPageComponent } from './git-create-repo-page.component';
import { MaterialModule } from '../../../material.module';

describe('GitCreateRepoPageComponent', () => {
    let component: GitCreateRepoPageComponent;
    let fixture: ComponentFixture<GitCreateRepoPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [GitCreateRepoPageComponent],
            imports: [MaterialModule, BrowserAnimationsModule, FormsModule],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GitCreateRepoPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
