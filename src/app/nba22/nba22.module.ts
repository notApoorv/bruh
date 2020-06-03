import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Nba22RoutingModule } from './nba22-routing.module';
import { Nba22Component } from './nba22.component';
import { ComponentImportModule } from '../shared/component.import.module';


@NgModule({
  declarations: [Nba22Component],
  imports: [
    CommonModule,
    Nba22RoutingModule,
    ComponentImportModule
  ]
})
export class Nba22Module { }
