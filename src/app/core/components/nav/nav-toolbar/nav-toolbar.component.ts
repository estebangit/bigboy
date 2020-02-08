import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Page } from '../../../services/navigation/navigation.service';

@Component({
    selector: 'app-nav-toolbar',
    templateUrl: './nav-toolbar.component.html',
    styleUrls: ['./nav-toolbar.component.scss'],
})
export class NavToolbarComponent implements OnInit {
    @Input() activePage: Page;
    @Input() previousUrl: string[];
    @Output() toggleSideNav = new EventEmitter();
    @Output() logout = new EventEmitter();

    constructor(private snackBar: MatSnackBar) {}

    ngOnInit() {}

    public onToggleSideNav() {
        this.toggleSideNav.emit();
    }

    public onLogout() {
        this.logout.emit();
    }

    public onInfo() {
        this.snackBar.open('BigBoy V1.0', '', { duration: 5000 });
    }
}
