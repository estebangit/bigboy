import { GitCreateRepoPageComponent } from './git-create-repo-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: GitCreateRepoPageComponent,
        data: { shouldReuse: true, key: 'git-create-repo' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GitCreateRepoPageRoutingModule {}
