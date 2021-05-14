import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StatsComponent } from './stats.component';

@NgModule({
  declarations: [StatsComponent],
  imports: [CommonModule],
  exports: [StatsComponent],
})
export class StatsModule {}
