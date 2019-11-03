import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CicdCreateProjectPageRoutingModule } from './cicd-create-project-page-routing.module';
import { CicdCreateProjectPageComponent } from './cicd-create-project-page.component';

@NgModule({
    declarations: [CicdCreateProjectPageComponent],
    imports: [CommonModule, CicdCreateProjectPageRoutingModule],
})
export class CicdCreateProjectPageModule {}
