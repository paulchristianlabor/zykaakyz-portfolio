import { TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { SITE_CONTENT } from '../../../data/content';

describe('HeroComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();
  });

  it('should create the hero component', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the site name in the heading', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(SITE_CONTENT.name);
  });

  it('should render the role / tagline', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(SITE_CONTENT.role);
  });

  it('should render a View My Work link pointing to #projects', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a[href="#projects"]');
    expect(link).toBeTruthy();
  });

  it('should render a Get in Touch link pointing to #contact', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const link = compiled.querySelector('a[href="#contact"]');
    expect(link).toBeTruthy();
  });

  it('should render an h1 heading', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')).toBeTruthy();
  });

  it('should have the home section id', () => {
    const fixture = TestBed.createComponent(HeroComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section#home')).toBeTruthy();
  });
});
