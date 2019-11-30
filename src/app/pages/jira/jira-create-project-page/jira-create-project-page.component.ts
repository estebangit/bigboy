import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {MatTable, MatTableDataSource, MatSort, MatPaginator} from '@angular/material';

import {SampleService} from '../../../sample/sample.service';
import {Owner} from '../../../sample/owner.model';

@Component({
    selector: 'app-jira-create-project-page',
    templateUrl: './jira-create-project-page.component.html',
    styleUrls: ['./jira-create-project-page.component.scss'],
})
export class JiraCreateProjectPageComponent implements OnInit, AfterViewInit {

    public displayedColumns = ['name', 'dateOfBirth', 'email', 'id'];
    public dataSource = new MatTableDataSource<Owner>();

    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(private sampleService: SampleService) {}

    ngOnInit() {
        this.dataSource.data = this.sampleService.getOwners() as Owner[];
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

}
