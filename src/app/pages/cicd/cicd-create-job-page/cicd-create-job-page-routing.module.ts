import { CicdCreateJobPageComponent } from './cicd-create-job-page.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ {path:'',component:CicdCreateJobPageComponent,data:{shouldReuse:true,key:'cicd-create-job'}},  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CicdCreateJobPageRoutingModule { }
