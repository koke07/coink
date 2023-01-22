import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinkTestModule } from './coink-test/coink-test.module';

const routes: Routes = [
  {  path:'',loadChildren: () =>  CoinkTestModule },
  {path: 'coink-test', loadChildren: () =>  CoinkTestModule },
  {path: '**',  loadChildren: () =>  CoinkTestModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
