import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatBadgeModule, MatTooltipModule, MatCardModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {DataTableModule} from "@vrushalisoft/datatable";
import { Ng2GoogleChartModule } from '@vrushalisoft/googlechart';


@NgModule({
  declarations: [
   
  ],
  entryComponents: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatBadgeModule,
    MatTooltipModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    DataTableModule,
    Ng2GoogleChartModule

  ],
  exports: [
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [
  ]
})
export class ComponentImportModule { }
