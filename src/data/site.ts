// Business details used across the site. Edit here, not in the components.
export const business = {
  name: 'Completely Dogcare',
  url: 'https://www.completelydogcare.com.au',
  phone: '0408 111 046',
  phoneHref: 'tel:0408111046',
  email: 'woof@completelydogcare.com.au',
  address: '10/12 Cheney Pl, Mitchell ACT 2911',
  hours: 'Tue – Thu: 7:30am – 6pm',
  area: 'Canberra',
  facebook: 'https://www.facebook.com/profile.php?id=61556005276770',
  instagram: 'https://www.instagram.com/completelydogcare/',
  instagramHandle: '@completelydogcare',
  rescue: 'https://www.completelyrescued.com.au/',
  map: 'https://maps.app.goo.gl/z4i6Th3xE2vTgvW26',
};

// Booking currently runs on the old Wix site (Wix Bookings).
// [Important] These Wix links stop working once the domain points at the new site,
// so swap them for the new booking system before switching the domain over.
export const wix = {
  casualSession: 'https://www.completelydogcare.com.au/booking-calendar/doggy-daycare-sessions',
  sessionPacks: 'https://www.completelydogcare.com.au/pricing-plans/list',
};

export const links = {
  book: '/book',
  bookDaycare: '/book',
  bookGrooming: '/book#grooming',
  tour: '/#contact',
  firstTimers: '/first-timers',
  faq: '/faq',
};

export type NavItem = { label: string; href: string };
export type NavGroup = { label: string; children: NavItem[] };

export const nav: (NavItem | NavGroup)[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    children: [
      { label: 'Daycare', href: '/daycare' },
      { label: 'Grooming', href: '/grooming' },
      { label: 'First Timers', href: '/first-timers' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Events', href: '/#events' },
  { label: 'Rescue', href: '/#rescue' },
  { label: 'Contact', href: '/#contact' },
];

// Every link in one flat list (used by the footer).
export const navLinks: NavItem[] = nav.flatMap((i) => ('children' in i ? i.children : [i]));

// Daycare pricing, from the current Wix site.
// [Confirm] the Wix page says "Save $55" / "Save $144", which don't match each other,
// so the savings are left off until the single-session price is confirmed.
export const pricing = {
  casual: '[Casual session price]',
  packs: [
    { name: '5 Session Pack', price: '$275', note: 'Valid for 12 months' },
    { name: '10 Session Pack', price: '$450', note: 'Valid for 12 months' },
  ],
};

export const daycareIncludes = [
  { title: 'Attentive supervision', text: 'Your dog’s safety and wellbeing come first, with vigilant supervision all day.' },
  { title: 'Play & social time', text: 'A lively, engaging space where dogs play, interact and make friends.' },
  { title: 'Exercise & outings', text: 'Regular exercise and outings to keep your pup active and healthy.' },
  { title: 'Feeding & medication', text: 'We look after meals and any medication your dog needs.' },
  { title: 'Professional play area', text: 'A well-equipped play space that keeps minds and bodies busy.' },
  { title: 'Comfortable rest spaces', text: 'Cosy spots for tired pups to recharge between play sessions.' },
];
