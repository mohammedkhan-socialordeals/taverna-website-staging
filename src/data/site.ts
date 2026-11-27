// ─────────────────────────────────────────────────────────────
//  TAVERNA — everything that changes often lives in this file.
//  Edit hours, links, phone and address here; every page updates.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Taverna',
  fullName: 'Taverna Italian Kitchen + Bar',
  since: 1969,
  url: 'https://www.tavernaitaliankitchen.com',
  tagline: 'Italian-American steaks, pasta and a little theatre. Downtown Saskatoon since 1969.',

  phone: '306.652.6366',
  phoneHref: 'tel:+13066526366',
  email: 'tasos@tavernaitaliankitchen.com',

  address: {
    street: '219 21st St E',
    city: 'Saskatoon',
    region: 'SK',
    postal: 'S7K 0B7',
  },

  links: {
    // OpenTable restaurant id 117244 (same one the old site used)
    reserve: 'https://www.opentable.ca/restref/client/?rid=117244',
    // Toast online ordering
    order: 'https://order.toasttab.com/online/taverna-italian-kitchen-219-21st-st-e',
    // Toast e-gift cards — confirm this is switched on in Toast before launch
    giftCards: 'https://order.toasttab.com/egiftcards/taverna-italian-kitchen-219-21st-st-e',
    delivery: 'https://www.skipthedishes.com/taverna-italian-kitchen-and-bar',
    instagram: 'https://www.instagram.com/tavernaitaliankitchen/',
    facebook: 'https://www.facebook.com/Tavernayxe/',
    tripadvisor:
      'https://www.tripadvisor.ca/Restaurant_Review-g155043-d3666941-Reviews-Taverna_Italian_Kitchen-Saskatoon_Saskatchewan.html',
    maps: 'https://www.google.com/maps/search/?api=1&query=Taverna+Italian+Kitchen+219+21st+St+E+Saskatoon',
    menuPdf: '/menus/taverna-menu.pdf',
  },

  openTableId: '117244',

  // Sunday first, to match JavaScript's getDay()
  hours: [
    { day: 'Sunday', open: '4:00 pm', close: '10:00 pm' },
    { day: 'Monday', open: '4:00 pm', close: '10:00 pm' },
    { day: 'Tuesday', open: '4:00 pm', close: '10:00 pm' },
    { day: 'Wednesday', open: '4:00 pm', close: '10:00 pm' },
    { day: 'Thursday', open: '4:00 pm', close: '10:00 pm' },
    { day: 'Friday', open: '4:00 pm', close: '11:00 pm' },
    { day: 'Saturday', open: '4:00 pm', close: '11:00 pm' },
  ],
};

export const nav = [
  { label: 'Menus', href: '/menu/' },
  { label: 'Our Story', href: '/story/' },
  { label: 'Private Dining', href: '/private-dining/' },
  { label: 'Gift Cards', href: '/gift-cards/' },
  { label: 'Visit', href: '/visit/' },
];
