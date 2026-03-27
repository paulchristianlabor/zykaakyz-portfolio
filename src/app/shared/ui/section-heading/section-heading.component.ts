import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  template: `
    <div [class]="alignClass">
      @if (label) {
        <p class="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-3">
          {{ label }}
        </p>
      }
      <h2 class="text-4xl font-bold text-slate-900 tracking-tight">{{ title }}</h2>
      @if (subtitle) {
        <p class="text-slate-500 mt-4 max-w-xl leading-relaxed" [class.mx-auto]="align === 'center'">
          {{ subtitle }}
        </p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  @Input({ required: true }) title = '';
  @Input() label = '';
  @Input() subtitle = '';
  @Input() align: 'left' | 'center' = 'center';

  get alignClass(): string {
    return this.align === 'center' ? 'text-center' : 'text-left';
  }
}
