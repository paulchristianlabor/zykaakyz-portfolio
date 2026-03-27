import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SITE_CONTENT } from '../../../data/content';
import type { InterestCard } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-interests',
  imports: [ScrollRevealDirective],
  templateUrl: './interests.component.html',
})
export class InterestsComponent {
  readonly interests: InterestCard[] = SITE_CONTENT.interests;
}
