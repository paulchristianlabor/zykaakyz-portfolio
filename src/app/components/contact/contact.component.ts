import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { SITE_CONTENT } from '../../../data/content';
import type { ContactInfo } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  private readonly fb = inject(FormBuilder);

  readonly contactInfo: ContactInfo = SITE_CONTENT.contact;

  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  readonly submitted = signal(false);
  readonly submitSuccess = signal(false);

  get nameError(): string | null {
    const c = this.form.get('name');
    if (c?.invalid && (c.dirty || c.touched || this.submitted())) {
      if (c.errors?.['required']) return 'Name is required.';
      if (c.errors?.['minlength']) return 'Name must be at least 2 characters.';
    }
    return null;
  }

  get emailError(): string | null {
    const c = this.form.get('email');
    if (c?.invalid && (c.dirty || c.touched || this.submitted())) {
      if (c.errors?.['required']) return 'Email address is required.';
      if (c.errors?.['email']) return 'Please enter a valid email address.';
    }
    return null;
  }

  get messageError(): string | null {
    const c = this.form.get('message');
    if (c?.invalid && (c.dirty || c.touched || this.submitted())) {
      if (c.errors?.['required']) return 'Message is required.';
      if (c.errors?.['minlength']) return 'Message must be at least 10 characters.';
    }
    return null;
  }

  onSubmit(): void {
    this.submitted.set(true);
    if (this.form.valid) {
      /**
       * NOTE: This is a static frontend-only contact form.
       * To send emails, integrate a service such as:
       * - Netlify Forms (add netlify attribute to <form>)
       * - EmailJS (emailjs.com)
       * - FormSubmit (formsubmit.co)
       * Never hardcode API keys or credentials here.
       */
      this.form.reset();
      this.submitted.set(false);
      this.submitSuccess.set(true);
      setTimeout(() => this.submitSuccess.set(false), 5000);
    }
  }
}
