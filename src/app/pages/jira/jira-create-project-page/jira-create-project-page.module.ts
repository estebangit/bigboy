import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JiraCreateProjectPageRoutingModule } from './jira-create-project-page-routing.module';
import { JiraCreateProjectPageComponent } from './jira-create-project-page.component';

@NgModule({
    declarations: [JiraCreateProjectPageComponent],
    imports: [CommonModule, JiraCreateProjectPageRoutingModule],
})
export class JiraCreateProjectPageModule {}
