import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from '../header/header.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, HeaderModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
