import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordianComponent } from './accordian/accordian.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AccordianComponent],
  exports: [AccordianComponent],
})
export class FaqsSharedUiModule {}
