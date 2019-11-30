import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JiraCreateProjectPageRoutingModule } from './jira-create-project-page-routing.module';
import { JiraCreateProjectPageComponent } from './jira-create-project-page.component';

import { MaterialModule } from '../../../material.module';

@NgModule({
    declarations: [JiraCreateProjectPageComponent],
    imports: [
        CommonModule,
        JiraCreateProjectPageRoutingModule,
        MaterialModule
    ],
})
export class JiraCreateProjectPageModule {}
