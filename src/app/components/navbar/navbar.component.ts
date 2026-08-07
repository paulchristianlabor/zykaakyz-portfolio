import { Component, HostListener, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { SITE_CONTENT } from '../../../data/content';
import type { NavLink } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-navbar',
  imports: [FaIconComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  private readonly platformId = inject(PLATFORM_ID);

  readonly faBars = faBars;
  readonly faXmark = faXmark;
  readonly isScrolled = signal(false);
  readonly isMenuOpen = signal(false);

  readonly siteName = SITE_CONTENT.name;
  readonly navLinks: NavLink[] = SITE_CONTENT.navLinks;

  @HostListener('window:scroll')
  onScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled.set(window.scrollY > 64);
    }
  }

  toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
