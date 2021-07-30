import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

const materialComps = [
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatMenuModule,
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...materialComps,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    ...materialComps,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
