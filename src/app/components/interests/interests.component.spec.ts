import { TestBed } from '@angular/core/testing';
import { InterestsComponent } from './interests.component';
import { SITE_CONTENT } from '../../../data/content';

describe('InterestsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestsComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(InterestsComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the interests section with correct id', () => {
    const fixture = TestBed.createComponent(InterestsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section#interests')).toBeTruthy();
  });

  it('should render the correct number of interest cards', () => {
    const fixture = TestBed.createComponent(InterestsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const articles = compiled.querySelectorAll('article');
    expect(articles.length).toBe(SITE_CONTENT.interests.length);
  });

  it('should display interest titles', () => {
    const fixture = TestBed.createComponent(InterestsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const firstInterest = SITE_CONTENT.interests[0];
    expect(compiled.textContent).toContain(firstInterest.title);
  });

  it('should display interest tags', () => {
    const fixture = TestBed.createComponent(InterestsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const firstTag = SITE_CONTENT.interests[0].tags[0];
    expect(compiled.textContent).toContain(firstTag);
  });
});
