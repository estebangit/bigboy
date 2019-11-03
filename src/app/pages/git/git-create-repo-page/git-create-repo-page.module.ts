import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { GitCreateRepoPageRoutingModule } from './git-create-repo-page-routing.module';
import { GitCreateRepoPageComponent } from './git-create-repo-page.component';
import { MaterialModule } from '../../../material.module';

@NgModule({
    declarations: [GitCreateRepoPageComponent],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
        GitCreateRepoPageRoutingModule,
    ],
})
export class GitCreateRepoPageModule {}
