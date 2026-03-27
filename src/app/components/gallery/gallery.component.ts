import { Component } from '@angular/core';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SITE_CONTENT } from '../../../data/content';
import type { GalleryItem } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-gallery',
  imports: [ScrollRevealDirective],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent {
  readonly gallery: GalleryItem[] = SITE_CONTENT.gallery;
}
