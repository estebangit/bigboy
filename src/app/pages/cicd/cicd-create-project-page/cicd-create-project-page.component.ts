import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { SampleService } from '../../../sample/sample.service';
import { ProjectStatus } from '../../../sample/projectstatus.model';

@Component({
    selector: 'app-cicd-create-project-page',
    templateUrl: './cicd-create-project-page.component.html',
    styleUrls: ['./cicd-create-project-page.component.scss'],
})
export class CicdCreateProjectPageComponent implements OnInit, AfterViewInit {

    public displayedColumns = ['id', 'name', 'step1', 'step2', 'step3'];
    public dataSource = new MatTableDataSource<ProjectStatus>();

    @ViewChild(MatSort, {static: true}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(private sampleService: SampleService) {}

    ngOnInit() {
        this.dataSource.data = this.sampleService.getProjectsStatus() as ProjectStatus[];
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

}
