import type { SiteContent } from '../app/core/models/portfolio.models';

/**
 * Placeholder site content. Replace these values with your real information.
 * Avoid storing private data (API keys, personal addresses, private links) here.
 */
export const SITE_CONTENT: SiteContent = {
  name: 'Alex Rivera',
  initials: 'AR',
  role: 'Developer · Designer · Creator',
  tagline:
    'Building thoughtful digital experiences that connect, inspire, and endure.',

  bio: [
    "I'm Alex, a developer and designer with a passion for crafting elegant digital experiences. I believe in thoughtful design, clean code, and the power of creativity to solve real problems.",
    'Currently exploring the intersection of technology, design, and human experience — one project at a time.',
  ],

  highlights: [
    { label: 'Projects Built', value: '20+' },
    { label: 'Years of Experience', value: '5+' },
    { label: 'Open Source Contributions', value: '50+' },
  ],

  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Interests', href: '#interests' },
    { label: 'Projects', href: '#projects' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Writing', href: '#writing' },
    { label: 'Contact', href: '#contact' },
  ],

  interests: [
    {
      id: 'photography',
      emoji: '📷',
      title: 'Photography',
      description:
        'Capturing light, life, and perspective through a lens. Photography grounds me in the present moment.',
      tags: ['Landscape', 'Street', 'Portrait'],
    },
    {
      id: 'web-development',
      emoji: '💻',
      title: 'Web Development',
      description:
        'Crafting fast, beautiful, and accessible digital products. Code is both a craft and a creative medium.',
      tags: ['Angular', 'TypeScript', 'Performance'],
    },
    {
      id: 'music',
      emoji: '🎵',
      title: 'Music',
      description:
        'From classical piano to electronic production, music shapes how I think about rhythm, structure, and flow.',
      tags: ['Piano', 'Electronic', 'Production'],
    },
    {
      id: 'travel',
      emoji: '🗺️',
      title: 'Travel',
      description:
        'Each place teaches something new. The world is the best classroom, and every trip expands the horizon.',
      tags: ['Adventure', 'Culture', 'Photography'],
    },
    {
      id: 'reading',
      emoji: '📚',
      title: 'Reading',
      description:
        'Books, essays, and papers keep the mind sharp and curious. A good idea from anywhere can change everything.',
      tags: ['Non-fiction', 'Design', 'Philosophy'],
    },
    {
      id: 'design',
      emoji: '✏️',
      title: 'Design',
      description:
        'Making things that are both beautiful and deeply functional. Great design is invisible until you miss it.',
      tags: ['UI/UX', 'Typography', 'Systems'],
    },
  ],

  projects: [
    {
      id: 'portfolio',
      title: 'Portfolio Website',
      description:
        'This portfolio site, built with Angular 21 and Tailwind CSS v4. A clean, static personal website optimised for speed and accessibility.',
      imageAlt: 'Portfolio website preview',
      gradient: 'linear-gradient(135deg, #818cf8 0%, #a78bfa 100%)',
      tags: ['Angular', 'Tailwind CSS', 'TypeScript'],
      liveUrl: '#',
      featured: true,
    },
    {
      id: 'cli-toolkit',
      title: 'CLI Toolkit',
      description:
        'A developer productivity tool for automating common workflow tasks. Saves time and reduces repetitive setup across projects.',
      imageAlt: 'CLI Toolkit terminal preview',
      gradient: 'linear-gradient(135deg, #34d399 0%, #14b8a6 100%)',
      tags: ['Node.js', 'CLI', 'Automation'],
      repoUrl: '#',
    },
    {
      id: 'creative-canvas',
      title: 'Creative Canvas',
      description:
        'An experimental browser-based creative coding environment for generative art and interactive visual experiences.',
      imageAlt: 'Creative Canvas app preview',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #fb7185 100%)',
      tags: ['Canvas API', 'WebGL', 'Creative Code'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 'design-system',
      title: 'Design System',
      description:
        'A component library and design system built for consistency and scalability across web products.',
      imageAlt: 'Design system component library preview',
      gradient: 'linear-gradient(135deg, #fb923c 0%, #f59e0b 100%)',
      tags: ['Design Tokens', 'Storybook', 'CSS'],
      repoUrl: '#',
    },
  ],

  gallery: [
    {
      id: 'g1',
      title: 'Morning Light',
      category: 'Photography',
      description: 'Golden hour captured by the coast at sunrise.',
      gradient: 'linear-gradient(135deg, #fcd34d 0%, #f97316 100%)',
    },
    {
      id: 'g2',
      title: 'Urban Geometry',
      category: 'Photography',
      description: 'Repeating patterns found in city architecture.',
      gradient: 'linear-gradient(135deg, #94a3b8 0%, #475569 100%)',
    },
    {
      id: 'g3',
      title: 'Type Exploration',
      category: 'Design',
      description: 'Experimental typography as expressive visual art.',
      gradient: 'linear-gradient(135deg, #c084fc 0%, #7c3aed 100%)',
    },
    {
      id: 'g4',
      title: 'Abstract Flow',
      category: 'Art',
      description: 'Generative artwork created with code and algorithms.',
      gradient: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%)',
    },
    {
      id: 'g5',
      title: 'Quiet Forest',
      category: 'Photography',
      description: 'The stillness of a forest in early morning mist.',
      gradient: 'linear-gradient(135deg, #4ade80 0%, #059669 100%)',
    },
    {
      id: 'g6',
      title: 'Interface Study',
      category: 'Design',
      description: 'Exploring UI patterns and interaction models.',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #e11d48 100%)',
    },
  ],

  writing: [
    {
      id: 'design-constraints',
      title: 'The Art of Constraints in Design',
      excerpt:
        "Constraints are often seen as limitations, but the best design work emerges from boundaries. Here's what I've learned from working within tight constraints.",
      date: 'March 15, 2026',
      category: 'Design',
      readTime: '5 min read',
    },
    {
      id: 'angular-signals',
      title: 'Getting Started with Angular Signals',
      excerpt:
        'Angular Signals represent a fundamental shift in how we handle reactivity in the framework. A practical guide to adopting signals in your Angular projects.',
      date: 'February 8, 2026',
      category: 'Development',
      readTime: '8 min read',
    },
    {
      id: 'travel-lessons',
      title: 'Travel Notes: Lessons from the Road',
      excerpt:
        'Some of the most important lessons I have learned did not come from books or courses. They came from being somewhere unfamiliar with no map and no plan.',
      date: 'January 22, 2026',
      category: 'Travel',
      readTime: '4 min read',
    },
  ],

  contact: {
    email: 'hello@yoursite.com',
    location: 'Available for remote work worldwide',
    availability: 'Open to freelance and full-time opportunities',
    socials: [
      {
        platform: 'GitHub',
        url: 'https://github.com',
        ariaLabel: 'GitHub profile (opens in new tab)',
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com',
        ariaLabel: 'LinkedIn profile (opens in new tab)',
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com',
        ariaLabel: 'Twitter profile (opens in new tab)',
      },
    ],
  },

  footerTagline: 'Designed and built with Angular & Tailwind CSS.',
};
