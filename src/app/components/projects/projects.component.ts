import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SITE_CONTENT } from '../../../data/content';
import type { Project } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-projects',
  imports: [ScrollRevealDirective, FaIconComponent],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  readonly faGithub = faGithub;
  readonly projects: Project[] = SITE_CONTENT.projects;

  /** Returns the first character of a string for display use */
  getInitial(title: string): string {
    return title.charAt(0).toUpperCase();
  }
}
