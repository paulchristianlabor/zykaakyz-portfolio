# Testing

## Testing Stack

This project uses **Vitest** for unit testing via the Angular CLI's built-in test runner (`@angular/build:unit-test`). Vitest is the default test runner for Angular 21 projects and integrates cleanly with the Angular build system.

Tests use the Angular `TestBed` utility for component setup and standard Vitest matchers for assertions.

## Running Tests

```
# Run all tests once
pnpm test

# Run with verbose output
npx ng test --watch=false --reporters=verbose
```

## Test Files

Each test file lives alongside the component it covers:

```
src/app/app.spec.ts
src/app/components/navbar/navbar.component.spec.ts
src/app/components/hero/hero.component.spec.ts
src/app/components/about/about.component.spec.ts
src/app/components/interests/interests.component.spec.ts
src/app/components/projects/projects.component.spec.ts
src/app/components/contact/contact.component.spec.ts
src/app/pages/home/home.component.spec.ts
```

## What Is Covered

| Area               | Tests                                                               |
| ------------------ | ------------------------------------------------------------------- |
| Root App component | Creates, renders router-outlet                                      |
| Navbar             | Creates, renders links, toggles mobile menu, aria attributes        |
| Hero               | Creates, renders name/role, CTA links, h1 heading, section ID       |
| About              | Creates, renders section ID, heading, initials, highlights          |
| Interests          | Creates, renders section ID, correct number of cards, tags          |
| Projects           | Creates, renders section ID, project titles, safe external links    |
| Contact            | Creates, renders form, input fields, labels, validation, submission |
| Home page          | Creates, renders all section components, main element               |

**Total: 60 tests across 8 test files**

## Vitest Matchers

Angular 21 uses Vitest matchers (not Jasmine). Key differences:

- Use `toBe(true)` instead of `toBeTrue()`
- Use `toBe(false)` instead of `toBeFalse()`
- Use `toBeTruthy()` and `toBeFalsy()` as usual
- Async tests use standard `async/await`

## Adding New Tests

1. Create a `component-name.component.spec.ts` file next to the component
2. Import `TestBed` from `@angular/core/testing`
3. Import the component under test
4. Use `TestBed.configureTestingModule({ imports: [ComponentName] })`
5. Add `it()` blocks with descriptive names

Example:

```typescript
import { TestBed } from '@angular/core/testing';
import { MyComponent } from './my.component';

describe('MyComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComponent],
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(MyComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
```

## Notes on IntersectionObserver

The `ScrollRevealDirective` uses `IntersectionObserver` for scroll animations. In the jsdom test environment this API is not available. The directive guards against this by assigning the `visible` class immediately when `IntersectionObserver` is undefined, so components render correctly in tests.
