import { Component, OnInit, AfterViewInit, ViewChild, Output, Input, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Subscription, Observable, timer } from 'rxjs';
import * as moment from 'moment';

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

    private subscription: Subscription;
    @Output() TimerExpired: EventEmitter<any> = new EventEmitter<any>();
    @Input() SearchDate: moment.Moment = moment();
    @Input() ElapsTime: number = 1;

    searchEndDate: moment.Moment;
    remainingTime: number;
    minutes: number;
    seconds: number;

    everySecond: Observable<number> = timer(0, 1000);

    constructor(private sampleService: SampleService, private ref: ChangeDetectorRef) {
        this.searchEndDate = this.SearchDate.add(this.ElapsTime, "minutes");
    }

    ngOnInit() {
        this.refreshTable();
        this.refreshPage();
    }

    ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    refreshTable() {
        this.dataSource.data = this.sampleService.getProjectsStatus() as ProjectStatus[];
    }

    refreshPage() {
        this.subscription = this.everySecond.subscribe((seconds) => {
            var currentTime: moment.Moment = moment();
            this.remainingTime = this.searchEndDate.diff(currentTime)
            this.remainingTime = this.remainingTime / 1000;

            if (this.remainingTime <= 0) {
                this.refreshTable();
                this.SearchDate = moment();
                this.searchEndDate = this.SearchDate.add(this.ElapsTime, "minutes");

                this.TimerExpired.emit();
            }
            else {
                this.minutes = Math.floor(this.remainingTime / 60);
                this.seconds = Math.floor(this.remainingTime - this.minutes * 60);
            }
            this.ref.markForCheck()
        })
    }

}
