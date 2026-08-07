import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SITE_CONTENT } from '../../../data/content';
import type { WritingEntry } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-writing',
  imports: [ScrollRevealDirective, FaIconComponent],
  templateUrl: './writing.component.html',
})
export class WritingComponent {
  readonly faChevronRight = faChevronRight;
  readonly writing: WritingEntry[] = SITE_CONTENT.writing;
}
