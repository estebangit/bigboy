import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-git-create-repo-page',
    templateUrl: './git-create-repo-page.component.html',
    styleUrls: ['./git-create-repo-page.component.scss'],
})
export class GitCreateRepoPageComponent implements OnInit {
    name: string;
    errorMessage: string;

    constructor(private snackBar: MatSnackBar) {}

    ngOnInit() {
        this.errorMessage = '';
    }

    public onSubmit(name: string) {
        try {
            console.warn('Repository to save: ' + name);
            this.snackBar.open('Repository sucessfuly created', '', {
                duration: 2000,
            });
        } catch (e) {
            this.errorMessage = 'Wrong Credentials!';
            console.error('Unable to Login!\n', e);
        }
    }
}
