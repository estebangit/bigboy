import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CicdCreateProjectPageRoutingModule } from './cicd-create-project-page-routing.module';
import { CicdCreateProjectPageComponent } from './cicd-create-project-page.component';

import { MaterialModule } from '../../../material.module';

@NgModule({
    declarations: [CicdCreateProjectPageComponent],
    imports: [
        CommonModule,
        CicdCreateProjectPageRoutingModule,
        MaterialModule
    ],
})
export class CicdCreateProjectPageModule {}
