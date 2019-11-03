import { JiraCreateProjectPageComponent } from './jira-create-project-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: JiraCreateProjectPageComponent,
        data: { shouldReuse: true, key: 'jira-create-project' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class JiraCreateProjectPageRoutingModule {}
