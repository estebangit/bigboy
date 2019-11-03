import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CicdCreateJobPageRoutingModule } from './cicd-create-job-page-routing.module';
import { CicdCreateJobPageComponent } from './cicd-create-job-page.component';

@NgModule({
    declarations: [CicdCreateJobPageComponent],
    imports: [CommonModule, CicdCreateJobPageRoutingModule],
})
export class CicdCreateJobPageModule {}
