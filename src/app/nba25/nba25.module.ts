import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Nba25RoutingModule } from './nba25-routing.module';
import { Nba25Component } from './nba25.component';
import { ComponentImportModule } from '../shared/component.import.module';


@NgModule({
  declarations: [Nba25Component],
  imports: [
    CommonModule,
    Nba25RoutingModule,
    ComponentImportModule
  ]
})
export class Nba25Module { }
