import { TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { SITE_CONTENT } from '../../../data/content';

describe('AboutComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the about section with correct id', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section#about')).toBeTruthy();
  });

  it('should render a heading', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')).toBeTruthy();
  });

  it('should render initials', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(SITE_CONTENT.initials);
  });

  it('should render highlight stats', () => {
    const fixture = TestBed.createComponent(AboutComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    expect(component.highlights.length).toBeGreaterThan(0);
  });
});
