import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Nba24RoutingModule } from './nba24-routing.module';
import { Nba24Component } from './nba24.component';
import { ComponentImportModule } from '../shared/component.import.module';


@NgModule({
  declarations: [Nba24Component],
  imports: [
    CommonModule,
    Nba24RoutingModule,
    ComponentImportModule
  ]
})
export class Nba24Module { }
