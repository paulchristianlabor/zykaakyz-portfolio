import { TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the contact section with correct id', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section#contact')).toBeTruthy();
  });

  it('should render a contact form', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')).toBeTruthy();
  });

  it('should render name, email, and message inputs', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('#contact-name')).toBeTruthy();
    expect(compiled.querySelector('#contact-email')).toBeTruthy();
    expect(compiled.querySelector('#contact-message')).toBeTruthy();
  });

  it('should render labels for all inputs', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('label[for="contact-name"]')).toBeTruthy();
    expect(compiled.querySelector('label[for="contact-email"]')).toBeTruthy();
    expect(compiled.querySelector('label[for="contact-message"]')).toBeTruthy();
  });

  it('should render a submit button', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const submitButton = compiled.querySelector('button[type="submit"]');
    expect(submitButton).toBeTruthy();
  });

  it('should start with an invalid form (required fields empty)', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    expect(component.form.invalid).toBe(true);
  });

  it('should validate the name field as required', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    component.form.get('name')?.setValue('');
    component.form.get('name')?.markAsTouched();
    expect(component.form.get('name')?.invalid).toBe(true);
  });

  it('should validate the email field format', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    component.form.get('email')?.setValue('not-an-email');
    component.form.get('email')?.markAsTouched();
    expect(component.form.get('email')?.invalid).toBe(true);
  });

  it('should be valid with correct data', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    component.form.patchValue({
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message that is long enough.',
    });
    expect(component.form.valid).toBe(true);
  });

  it('should show success message after valid submission', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    component.form.patchValue({
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message that is long enough.',
    });
    component.onSubmit();
    expect(component.submitSuccess()).toBe(true);
  });

  it('should not show success for invalid form submission', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    // form is empty / invalid
    component.onSubmit();
    expect(component.submitSuccess()).toBe(false);
  });

  it('should not be in submitted state initially', () => {
    const fixture = TestBed.createComponent(ContactComponent);
    const component = fixture.componentInstance;
    expect(component.submitted()).toBe(false);
  });
});
