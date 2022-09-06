import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpendingRoutingModule } from './spending-routing.module';
import { HomeComponent } from './home/home.component';
import { MucctlonComponent } from './mucchitieu/mucctlon/mucctlon.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HomeComponent,
    MucctlonComponent
  ],
    imports: [
        CommonModule,
        SpendingRoutingModule,
        ReactiveFormsModule
    ]
})
export class SpendingModule { }
