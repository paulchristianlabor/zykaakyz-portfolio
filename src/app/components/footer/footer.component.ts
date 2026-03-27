import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../../data/content';
import type { NavLink, SocialLink } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly siteName = SITE_CONTENT.name;
  readonly tagline = SITE_CONTENT.footerTagline;
  readonly navLinks: NavLink[] = SITE_CONTENT.navLinks;
  readonly socials: SocialLink[] = SITE_CONTENT.contact.socials;
  readonly currentYear = new Date().getFullYear();
}
