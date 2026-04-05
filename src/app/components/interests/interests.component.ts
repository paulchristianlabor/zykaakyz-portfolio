import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SITE_CONTENT } from '../../../data/content';
import type { InterestCard } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-interests',
  imports: [ScrollRevealDirective, FaIconComponent],
  templateUrl: './interests.component.html',
})
export class InterestsComponent {
  readonly interests: InterestCard[] = SITE_CONTENT.interests;
}
