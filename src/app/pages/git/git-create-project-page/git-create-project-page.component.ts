import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { Router } from '@angular/router';

export interface DialogData {
  name: string;
  status: string;
}

@Component({
  selector: 'app-git-create-project-page-dialog',
  templateUrl: './git-create-project-page-dialog.component.html',
})
export class GitCreateProjectPageDialogComponent {
    constructor(
        private dialogRef: MatDialogRef<GitCreateProjectPageDialogComponent>,
        private router: Router,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    }

    public viewStatus() {
        this.router.navigate(['nav/cicd-create-project']);
        this.dialogRef.close();
    }

}

@Component({
    selector: 'app-git-create-project-page',
    templateUrl: './git-create-project-page.component.html',
    styleUrls: ['./git-create-project-page.component.scss'],
})
export class GitCreateProjectPageComponent implements OnInit {
    name: string;
    errorMessage: string;

    constructor(private snackBar: MatSnackBar, public dialog: MatDialog) {}

    ngOnInit() {
        this.errorMessage = '';
    }

    public onSubmit(name: string) {
        try {
            console.warn('Project to save: ' + name);
        } catch (e) {
            this.errorMessage = 'Wrong Credentials!';
            console.error('Unable to Login!\n', e);
        }

        this.dialog.open(GitCreateProjectPageDialogComponent, {
              data: {
                name,
                status: 'Project created.'
              }
            });
    }

}
