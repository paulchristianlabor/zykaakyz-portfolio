import { Component, Input } from '@angular/core';

type BadgeColor = 'indigo' | 'violet' | 'emerald' | 'amber' | 'rose' | 'slate' | 'sky';

const COLOR_CLASSES: Record<BadgeColor, string> = {
  indigo: 'bg-indigo-50 text-indigo-700 ring-indigo-100',
  violet: 'bg-violet-50 text-violet-700 ring-violet-100',
  emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  amber: 'bg-amber-50 text-amber-700 ring-amber-100',
  rose: 'bg-rose-50 text-rose-700 ring-rose-100',
  slate: 'bg-slate-100 text-slate-600 ring-slate-200',
  sky: 'bg-sky-50 text-sky-700 ring-sky-100',
};

@Component({
  selector: 'app-badge',
  template: `
    <span
      class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset"
      [class]="colorClasses"
    >
      {{ label }}
    </span>
  `,
})
export class BadgeComponent {
  @Input({ required: true }) label = '';
  @Input() color: BadgeColor = 'slate';

  get colorClasses(): string {
    return COLOR_CLASSES[this.color] ?? COLOR_CLASSES['slate'];
  }
}
