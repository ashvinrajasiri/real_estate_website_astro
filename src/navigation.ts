import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Properties',
      links: [
        {
          text: 'All Properties',
          href: getPermalink('/properties'),
        },
        {
          text: 'Buy',
          href: getPermalink('/properties?type=buy'),
        },
        {
          text: 'Rent',
          href: getPermalink('/properties?type=rent'),
        },
      ],
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Services',
      href: getPermalink('/services'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Schedule Consultation', href: getPermalink('/contact'), variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Properties',
      links: [
        { text: 'All Properties', href: getPermalink('/properties') },
        { text: 'Homes for Sale', href: getPermalink('/properties?type=buy') },
        { text: 'Homes for Rent', href: getPermalink('/properties?type=rent') },
        { text: 'Featured Listings', href: getPermalink('/#featured') },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Buyer Representation', href: getPermalink('/services#buyers') },
        { text: 'Seller Services', href: getPermalink('/services#sellers') },
        { text: 'Property Management', href: getPermalink('/services#rentals') },
        { text: 'Market Analysis', href: getPermalink('/services#analysis') },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Market Updates', href: getPermalink('/blog') },
        { text: 'Buyer Guide', href: getPermalink('/blog') },
        { text: 'Seller Tips', href: getPermalink('/blog') },
      ],
    },
    {
      title: 'About',
      links: [
        { text: 'About Me', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Schedule Consultation', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
  ],
  footNote: `
    <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm"></span>
    Your Real Estate Agent · All rights reserved.
  `,
};
