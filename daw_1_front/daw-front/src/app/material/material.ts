import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatFormField, MatInputModule, MatCardModule,
     MatIconModule, MatTableModule,MatDialogModule, MatSidenavModule,
      MatListModule, MatToolbarModule, MatOptionModule, MatSelectModule, 
      MatAutocompleteModule,MatTabsModule } from '@angular/material'

const MATERIAL_MODULES = [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatTabsModule,
    //MatGridList
    
  ]
  
  @NgModule({
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES
  })
  export class Material { }