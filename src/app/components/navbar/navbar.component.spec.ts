import { TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
    }).compileComponents();
  });

  it('should create the navbar component', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render site name in the navigation', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const logoLink = compiled.querySelector('a[href="#home"]');
    expect(logoLink).toBeTruthy();
    expect(logoLink?.textContent?.trim()).toBeTruthy();
  });

  it('should render navigation links', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    const compiled = fixture.nativeElement as HTMLElement;
    const navLinks = compiled.querySelectorAll('nav ul a');
    expect(navLinks.length).toBeGreaterThan(0);
    expect(navLinks.length).toBe(component.navLinks.length);
  });

  it('should render a mobile menu toggle button', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button[aria-controls="mobile-menu"]');
    expect(button).toBeTruthy();
  });

  it('should default to menu closed', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    expect(component.isMenuOpen()).toBe(false);
  });

  it('should open mobile menu when toggle button is clicked', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    component.toggleMenu();
    expect(component.isMenuOpen()).toBe(true);
  });

  it('should close mobile menu when closeMenu is called', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    component.toggleMenu(); // open
    component.closeMenu(); // close
    expect(component.isMenuOpen()).toBe(false);
  });

  it('should show mobile menu in DOM when open', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    component.toggleMenu();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const mobileMenu = compiled.querySelector('#mobile-menu');
    expect(mobileMenu).toBeTruthy();
  });

  it('should hide mobile menu in DOM when closed', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const mobileMenu = compiled.querySelector('#mobile-menu');
    expect(mobileMenu).toBeNull();
  });

  it('should default to not scrolled state', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    const component = fixture.componentInstance;
    expect(component.isScrolled()).toBe(false);
  });

  it('should have correct aria-expanded on toggle button', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button[aria-controls="mobile-menu"]');
    // Initially closed
    expect(button?.getAttribute('aria-expanded')).toBe('false');
  });
});
