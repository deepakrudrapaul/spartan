import { RouteMeta } from '@analogjs/router';
import { metaWith } from '~/app/shared/meta/meta.util';
import { Component } from '@angular/core';
import { hlmMuted } from '@spartan-ng/ui-typography-helm';
import { MainSectionDirective } from '~/app/shared/layout/main-section.directive';

export const routeMeta: RouteMeta = {
  data: { breadcrumb: 'Not Found' },
  meta: metaWith('spartan/stack - Page not found', 'Seems like you got lost browsing the spartan/stack.'),
  title: 'spartan/stack - Page not found',
};

@Component({
  selector: 'spartan-stack-not-found',
  standalone: true,
  imports: [MainSectionDirective],
  template: `
    <section spartanMainSection class="flex flex-col items-center justify-center">
      <div class="-mt-[25%] flex items-center mb-8">
        <p class="${hlmMuted}">Coming soon...</p>
      </div>
    </section>
  `,
})
export default class ComponentsNotFoundPageComponent {}
