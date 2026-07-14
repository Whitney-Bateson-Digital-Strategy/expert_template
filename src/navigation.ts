import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Journal',
      href: getPermalink('/blog'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Book a Call', href: getPermalink('/booking') }],
};

export const footerData = {
  links: [
    {
      title: 'Explore',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Services', href: getPermalink('/services') },
        { text: 'Journal', href: getPermalink('/blog') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Book a Call', href: getPermalink('/booking') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy-policy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
        { text: 'Disclaimer', href: getPermalink('/disclaimer') },
      ],
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
  ],
  footNote: `© <span id="footer-year">${new Date().getFullYear()}</span> Meridian. All rights reserved.`,
};
