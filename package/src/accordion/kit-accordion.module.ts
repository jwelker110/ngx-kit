import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StylerModule } from '@ngx-kit/styler';
import { KitCoreModule } from '../core/kit-core.module';
import { KitAccordionPanelComponent } from './kit-accordion-panel.component';
import { KitAccordionComponent } from './kit-accordion.component';

const exported = [
  KitAccordionComponent,
  KitAccordionPanelComponent,
];

@NgModule({
  imports: [
    CommonModule,
    StylerModule,
    KitCoreModule,
  ],
  exports: [
    ...exported,
  ],
  declarations: [
    ...exported,
  ],
  providers: [],
})
export class KitAccordionModule {
}