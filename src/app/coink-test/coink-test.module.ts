import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinkTestLayoutComponent } from './coink-test-layout/coink-test-layout.component';
import { CoinkTestRouterModule } from './router/coink-test-router.module';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from
    '@angular/platform-browser/animations';
import { CoinkTestAdminComponent } from './coink-test-admin/coink-test-admin.component';

const matModules = [
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule
]

@NgModule({
  declarations: [
    CoinkTestLayoutComponent,
    CoinkTestAdminComponent
  ],
  imports: [
    CommonModule,
    CoinkTestRouterModule,
    ...matModules,
    FormsModule,

  ]
})
export class CoinkTestModule { }
