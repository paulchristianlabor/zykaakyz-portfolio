import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { SITE_CONTENT } from '../../../data/content';
import type { NavLink, SocialLink } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-footer',
  imports: [FaIconComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  readonly siteName = SITE_CONTENT.name;
  readonly tagline = SITE_CONTENT.footerTagline;
  readonly navLinks: NavLink[] = SITE_CONTENT.navLinks;
  readonly socials: SocialLink[] = SITE_CONTENT.contact.socials;
  readonly currentYear = new Date().getFullYear();
}
