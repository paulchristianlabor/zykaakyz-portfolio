import {
  Directive,
  ElementRef,
  OnInit,
  OnDestroy,
  inject,
  PLATFORM_ID,
  Input,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollReveal]',
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  /** Optional CSS class added for transition-delay staggering (e.g. 'reveal-delay-1') */
  @Input() appScrollReveal = '';

  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (typeof IntersectionObserver === 'undefined') {
      // Degrade gracefully when IntersectionObserver is unavailable (e.g. test environments, older browsers).
      // Elements are visible immediately without animation.
      const el = this.el.nativeElement as HTMLElement;
      el.classList.add('reveal', 'visible');
      if (this.appScrollReveal) el.classList.add(this.appScrollReveal);
      return;
    }

    const element = this.el.nativeElement as HTMLElement;
    element.classList.add('reveal');
    if (this.appScrollReveal) {
      element.classList.add(this.appScrollReveal);
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add('visible');
            this.observer?.unobserve(element);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
