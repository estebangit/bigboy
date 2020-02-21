import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { GitCreateProjectPageRoutingModule } from './git-create-project-page-routing.module';
import { GitCreateProjectPageComponent } from './git-create-project-page.component';
import { GitCreateProjectPageDialogComponent } from './git-create-project-page.component';
import { MaterialModule } from '../../../material.module';

@NgModule({
    declarations: [
        GitCreateProjectPageComponent,
        GitCreateProjectPageDialogComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        GitCreateProjectPageRoutingModule,
        FlexLayoutModule,
        FormsModule
    ],
})
export class GitCreateProjectPageModule {}
