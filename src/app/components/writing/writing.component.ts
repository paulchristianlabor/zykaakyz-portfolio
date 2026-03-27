import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SITE_CONTENT } from '../../../data/content';
import type { WritingEntry } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-writing',
  imports: [ScrollRevealDirective],
  templateUrl: './writing.component.html',
})
export class WritingComponent {
  readonly writing: WritingEntry[] = SITE_CONTENT.writing;
}
