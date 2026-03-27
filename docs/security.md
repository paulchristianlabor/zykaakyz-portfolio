# Security Notes

This document describes security practices applied to this static personal website.

## Static Frontend Only

This is a client-side only application. There is no backend, no server-side code execution, no database, and no authentication. The attack surface is limited to what any static website exposes.

## Secrets and Credentials

**Never commit secrets to this repository.**

- Do NOT store API keys, tokens, passwords, or private endpoints in any source file
- Do NOT store them in `src/data/content.ts`, component files, or environment files
- This project does NOT use environment variables at runtime (static build)
- If you integrate a third-party service (e.g. EmailJS, analytics), use only their **public client-side keys**, and document what you added

If a secret is accidentally committed:
1. Rotate the secret immediately on the service provider
2. Remove it from the repository history (e.g. git filter-repo)
3. Do not rely on "deleting the commit" — Git history is public once pushed

## Path Privacy

All paths in source code, documentation, and configuration must be **project-relative**. Examples:

- Allowed: `./src/app/components/navbar/`
- Allowed: `src/assets/images/photo.webp`
- Forbidden: `/Users/yourname/projects/...`
- Forbidden: `C:/Users/yourname/...`
- Forbidden: `/home/yourname/...`

Personal filesystem paths must never appear in:
- Source code or comments
- Configuration files
- Markdown documentation
- Test files or fixture data
- Commit messages

## Angular Security Protections

This project does NOT disable any Angular security features:

- Angular's default HTML sanitization is active — `DomSanitizer` is not bypassed
- `bypassSecurityTrust*` methods are not used
- No `innerHTML` bindings with untrusted content
- Content Security Policy headers should be configured on the hosting platform

## External Links

All external links use `target="_blank" rel="noopener noreferrer"` to prevent:

- Tab-napping attacks (the opened page cannot access `window.opener`)
- Referrer leakage to external sites

## Contact Form

The contact form is frontend-only. It validates input client-side using Angular Reactive Forms but does not send data anywhere by default.

If you add a third-party form service:
- Use only official client-side integration methods
- Do NOT pass email content through a custom backend unless you control and secure it
- Review the service's privacy policy before collecting user data

## Dependencies

Keep dependencies up to date:

```
npm audit          Check for known vulnerabilities
npm outdated       List packages with available updates
npm update         Update packages within semver ranges
```

Note: Some audit warnings may appear in devDependencies (ESLint, Angular CLI). These tools are not included in the deployed static site and do not affect end-user security. Review each finding to determine if it is in a runtime or dev-only dependency.

## Recommended Hosting Security Headers

Configure these headers on your hosting platform for defence-in-depth:

```
Content-Security-Policy: default-src 'self'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; script-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

Adjust the CSP as needed if you add third-party integrations.

## Files That Must Not Be Committed

The `.gitignore` already blocks:

- `.env` and `.env.*`
- `node_modules/`
- `dist/`
- `.angular/` (build cache)
- Log files, temp files, OS metadata

Never add exceptions to these rules without a clear and safe reason.
