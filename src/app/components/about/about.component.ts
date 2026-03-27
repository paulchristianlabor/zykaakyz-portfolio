import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SITE_CONTENT } from '../../../data/content';
import type { Highlight } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-about',
  imports: [ScrollRevealDirective],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly initials = SITE_CONTENT.initials;
  readonly bio = SITE_CONTENT.bio;
  readonly highlights: Highlight[] = SITE_CONTENT.highlights;
}
