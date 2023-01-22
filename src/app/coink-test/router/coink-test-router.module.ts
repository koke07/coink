import { CoinkTestLayoutComponent } from './../coink-test-layout/coink-test-layout.component';
//import { StepByStepComponent } from './../components/step-by-step/step-by-step.component';
//import { OnBoardingLayoutComponent } from './../screens/on-boarding-layout/on-boarding-layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CoinkTestAdminComponent } from '../coink-test-admin/coink-test-admin.component';

const routes: Routes = [
  {path: '',
   component:CoinkTestLayoutComponent,

  },
  {path: 'login',
   component:CoinkTestLayoutComponent,

  },
  {path: 'admin',
  component:CoinkTestAdminComponent,

 }
];


@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoinkTestRouterModule {
}
