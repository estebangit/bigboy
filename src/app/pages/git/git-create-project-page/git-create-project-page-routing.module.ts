import { GitCreateProjectPageComponent } from './git-create-project-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: GitCreateProjectPageComponent,
        data: { shouldReuse: true, key: 'git-create-project' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GitCreateProjectPageRoutingModule {}
