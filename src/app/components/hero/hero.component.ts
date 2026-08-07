import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { SITE_CONTENT } from '../../../data/content';

@Component({
  selector: 'app-hero',
  imports: [FaIconComponent],
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly faChevronDown = faChevronDown;
  readonly name = SITE_CONTENT.name;
  readonly role = SITE_CONTENT.role;
  readonly tagline = SITE_CONTENT.tagline;
}
