import { Component } from '@angular/core';
import { SITE_CONTENT } from '../../../data/content';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  readonly name = SITE_CONTENT.name;
  readonly role = SITE_CONTENT.role;
  readonly tagline = SITE_CONTENT.tagline;
}
