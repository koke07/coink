import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoinkTestLayoutComponent } from './coink-test-layout/coink-test-layout.component';
import { CoinkTestRouterModule } from './router/coink-test-router.module';
import { CoinkTestAdminComponent } from './coink-test-admin/coink-test-admin.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatDividerModule} from '@angular/material/divider';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import {MatTableModule} from '@angular/material/table';

const matModules = [
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatCheckboxModule,
  CdkAccordionModule,
  MatDividerModule,
  MatTableModule
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
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,

  ]
})
export class CoinkTestModule { }
