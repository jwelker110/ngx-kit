import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KitOverlayModule } from '@ngx-kit/ngx-kit';
import { KitTooltipViewComponent } from './kit-tooltip-view/kit-tooltip-view.component';
import { KitTooltipDirective } from './kit-tooltip/kit-tooltip.directive';

const exp = [
  KitTooltipDirective,
];
const entries = [
  KitTooltipViewComponent,
];

@NgModule({
  imports: [
    CommonModule,
    KitOverlayModule,
  ],
  exports: [
    ...exp,
  ],
  declarations: [
    ...exp,
    ...entries,
  ],
  providers: [],
  entryComponents: entries,
})
export class KitTooltipModule {
}
