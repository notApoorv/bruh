import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Nba23RoutingModule } from './nba23-routing.module';
import { Nba23Component } from './nba23.component';
import { ComponentImportModule } from '../shared/component.import.module';


@NgModule({
  declarations: [Nba23Component],
  imports: [
    CommonModule,
    Nba23RoutingModule,
    ComponentImportModule
  ]
})
export class Nba23Module { }
