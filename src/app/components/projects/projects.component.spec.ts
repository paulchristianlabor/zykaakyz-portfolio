import { TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { SITE_CONTENT } from '../../../data/content';

describe('ProjectsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the projects section with correct id', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('section#projects')).toBeTruthy();
  });

  it('should render the correct number of project cards', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const articles = compiled.querySelectorAll('article');
    expect(articles.length).toBe(SITE_CONTENT.projects.length);
  });

  it('should display project titles', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    SITE_CONTENT.projects.forEach((project) => {
      expect(compiled.textContent).toContain(project.title);
    });
  });

  it('should render external links safely with noopener', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const externalLinks = compiled.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach((link) => {
      expect(link.getAttribute('rel')).toContain('noopener');
    });
  });

  it('should display getInitial correctly', () => {
    const fixture = TestBed.createComponent(ProjectsComponent);
    const component = fixture.componentInstance;
    expect(component.getInitial('Portfolio')).toBe('P');
    expect(component.getInitial('CLI Toolkit')).toBe('C');
  });
});
