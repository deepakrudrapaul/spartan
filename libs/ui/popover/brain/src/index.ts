import { NgModule } from '@angular/core';

import { BrnPopoverComponent } from './lib/brn-popover.component';
import { BrnPopoverTriggerDirective } from './lib/brn-popover-trigger.directive';
import { BrnPopoverCloseDirective } from './lib/brn-popover-close.directive';
import { BrnPopoverContentDirective } from './lib/brn-popover-content.directive';

export * from './lib/brn-popover.component';
export * from './lib/brn-popover-trigger.directive';
export * from './lib/brn-popover-close.directive';
export * from './lib/brn-popover-content.directive';

export const BrnPopoverImports = [
  BrnPopoverComponent,
  BrnPopoverTriggerDirective,
  BrnPopoverCloseDirective,
  BrnPopoverContentDirective,
] as const;

@NgModule({
  imports: [...BrnPopoverImports],
  exports: [...BrnPopoverImports],
})
export class BrnPopoverModule {}
