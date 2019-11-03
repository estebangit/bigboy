import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-git-create-project-page',
    templateUrl: './git-create-project-page.component.html',
    styleUrls: ['./git-create-project-page.component.scss'],
})
export class GitCreateProjectPageComponent implements OnInit {
    name: string;
    errorMessage: string;

    constructor(private snackBar: MatSnackBar) {}

    ngOnInit() {
        this.errorMessage = '';
    }

    public onSubmit(name: string) {
        try {
            console.warn('Project to save: ' + name);
            this.snackBar.open('Project saved', '', { duration: 2000 });
        } catch (e) {
            this.errorMessage = 'Wrong Credentials!';
            console.error('Unable to Login!\n', e);
        }
    }
}
