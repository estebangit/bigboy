import { CicdCreateProjectPageComponent } from './cicd-create-project-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: CicdCreateProjectPageComponent,
        data: { shouldReuse: true, key: 'cicd-create-project' },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CicdCreateProjectPageRoutingModule {}
