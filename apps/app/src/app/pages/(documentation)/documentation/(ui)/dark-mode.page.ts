import { RouteMeta } from '@analogjs/router';
import { metaWith } from '~/app/shared/meta/meta.util';
import { Component } from '@angular/core';
import { MainSectionDirective } from '~/app/shared/layout/main-section.directive';
import { SectionIntroComponent } from '~/app/shared/layout/section-intro.component';
import { PageNavComponent } from '~/app/shared/layout/page-nav/page-nav.component';
import { PageBottomNavLinkComponent } from '~/app/shared/layout/page-bottom-nav/page-bottom-nav-link.component';
import { PageBottomNavComponent } from '~/app/shared/layout/page-bottom-nav/page-bottom-nav.component';
import { SectionSubHeadingComponent } from '~/app/shared/layout/section-sub-heading.component';
import { hlmCode, hlmP } from '@spartan-ng/ui-typography-helm';
import { CodeComponent } from '~/app/shared/code/code.component';

export const routeMeta: RouteMeta = {
  data: { breadcrumb: 'Dark Mode' },
  meta: metaWith('spartan - Dark Mode', 'Adding dark mode to your site.'),
  title: 'spartan - Dark Mode',
};

@Component({
  selector: 'spartan-dark-mode',
  standalone: true,
  imports: [
    MainSectionDirective,
    SectionIntroComponent,
    PageBottomNavComponent,
    PageBottomNavLinkComponent,
    PageNavComponent,
    SectionSubHeadingComponent,
    CodeComponent,
  ],
  template: `
    <section spartanMainSection>
      <spartan-section-intro name="Dark Mode" lead="Adding dark mode to your site." />
      <section>
        <p class="${hlmP}">
          <code class="${hlmCode}">spartan/ui</code> is built on TailwindCSS with custom CSS variables. These variables
          change based on whether or not a <code class="${hlmCode}">dark</code> class is applied to the root element of
          your page.
        </p>
        <p class="${hlmP}">
          Here is a comprehensive guide on how to toggle that class with Angular:
          <a
            class="underline font-medium"
            target="_blank"
            href="https://dev.to/this-is-angular/dark-mode-with-analog-tailwind-4049"
            >Dark mode with Analog & Tailwind</a
          >
        </p>
      </section>
      <spartan-page-bottom-nav>
        <spartan-page-bottom-nav-link href="typography" label="Typography" />
        <spartan-page-bottom-nav-link direction="previous" href="theming" label="Theming" />
      </spartan-page-bottom-nav>
    </section>
  `,
})
export default class DarkModePageComponent {}
