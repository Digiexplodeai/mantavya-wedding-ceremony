/**
 * Centralized Royal Wedding Configuration
 * Source of Truth: Original Wedding Invitation Card of Mantavya & Nitika
 *
 * To replace gallery placeholder illustrations with real couple photographs later:
 * Simply update the `imageUrl` property inside `weddingConfig.gallery.items`
 * with your photo path (e.g. "/photos/couple-1.jpg").
 */

export interface CeremonySubEvent {
  title: string;
  time: string;
  description: string;
}

export interface WeddingEventConfig {
  id: 'wedding' | 'reception';
  badge: string;
  title: string;
  subtitle: string;
  dateDisplay: string;
  dayOfWeek: string;
  dayNumber: string;
  monthYear: string;
  timeSummary: string;
  isoStart: string;
  isoEnd: string;
  subEvents: CeremonySubEvent[];
  venue: {
    name: string;
    addressLine: string;
    cityState: string;
    landmark?: string;
    googleMapsQuery: string;
    googleMapsUrl: string;
  };
  theme: 'burgundy-palace' | 'royal-evening';
  dressCodeNote: string;
  highlights: string[];
}

export interface GalleryItemConfig {
  id: string;
  title: string;
  caption: string;
  category: string;
  aspect: 'portrait' | 'arch' | 'landscape';
  /**
   * Replace `imageUrl` with a real photograph URL or local asset path (e.g. "/assets/photos/1.jpg")
   * when couple photographs are ready. When `isPlaceholder` is true, an bespoke Royal Rajasthani
   * miniature & architectural editorial illustration is displayed.
   */
  imageUrl?: string;
  isPlaceholder: boolean;
  illustrationVariant: 'jharokha-couple' | 'palace-corridor' | 'mandap-diya' | 'royal-barat' | 'starlit-garden' | 'henna-hands';
}

export const weddingConfig = {
  meta: {
    themeName: 'The Royal Wedding — A Celebration of Forever',
    sanskritInvocation: '॥ श्री गणेशाय नमः ॥',
    fullSanskritShloka: [
      '।। ॐ श्री गणेशाय नमः ।।',
      'वक्रतुण्ड महाकाय, सूर्यकोटि समप्रभः ।।',
      'निर्विघ्नं कुरु मे देव, सर्वकार्येषु सर्वदा ।।',
    ],
    originalInvitationCardImage: '/assets/aistudio/M_40f8041b.jpeg',
  },

  couple: {
    groom: {
      name: 'Mantavya',
      fullName: 'Mantavya Goyal',
      lineagePrefix: 'Their Beloved Son',
      parentage: 'S/o Smt. Simmi Goyal & Sh. Sanjiv Goyal',
    },
    bride: {
      name: 'Nitika',
      fullName: 'Nitika Singla',
      lineagePrefix: 'Together With',
      parentage: 'D/o Smt. Seema Singla & Sh. Davinder Singla',
    },
    combinedTitle: 'Mantavya & Nitika',
    monogram: 'M & N',
    weddingDatesShort: '12th November 2026',
    hashtag: '#MantavyaWedsNitika',
  },

  openingCover: {
    topLine: 'Together With Our Families',
    coupleNames: 'Mantavya & Nitika',
    subLine: 'An Invitation to Celebrate Love',
    ctaLabel: 'Open Our Invitation',
  },

  hero: {
    invocation: '॥ श्री गणेशाय नमः ॥',
    poeticLead: 'Two Hearts. One Beautiful Journey.',
    groomName: 'Mantavya',
    brideName: 'Nitika',
    tagline: 'Forever Begins Here',
    datesLine: '12th November 2026',
    scrollPrompt: 'Discover Our Celebration',
  },

  families: {
    grandparentsHeading: 'With the Blessings of Our Grandparents',
    grandparentsNames: ['Sh. Sham Lal Goyal', 'Late Smt. Laj Goyal'],
    parentsHeading: 'With Love and Blessings From',
    groomParentsNames: ['Smt. Simmi Goyal', 'Sh. Sanjiv Goyal'],
    invitationProse:
      'Solicit your gracious presence and heartfelt blessings on the auspicious occasion of the wedding celebrations of their beloved son',
    brideParentsNames: ['Smt. Seema Singla', 'Sh. Davinder Singla'],
  },

  countdown: {
    heading: 'Counting Down to Forever',
    subheading: 'Until the Auspicious Sehra Bandi & Wedding Ceremony · 12 November 2026, 5:00 PM IST',
    targetIsoIST: '2026-11-12T17:00:00+05:30',
    timezoneLabel: 'Asia/Kolkata (IST)',
  },

  storytelling: {
    chapters: [
      {
        id: 'corridor',
        romanIndex: 'I',
        motifTitle: 'The Royal Courtyard Awakens',
        quote: 'Every Beautiful Beginning Deserves a Celebration.',
        subtext: 'Under carved sandstone arches and the warm glow of brass diyas, two families gather in gratitude and joy.',
      },
      {
        id: 'arch',
        romanIndex: 'II',
        motifTitle: 'Sacred Promises & Marigold Blooms',
        quote: 'Two Traditions, One Eternal Rhythm.',
        subtext: 'As sacred hymns echo through the jharokha corridors, every petal carries a prayer for lifelong harmony.',
      },
      {
        id: 'mandap',
        romanIndex: 'III',
        motifTitle: 'Beneath the Starlit Mandap',
        quote: 'And So, Our Forever Begins.',
        subtext: 'Guided by the blessings of our elders and the warmth of your presence, a new chapter unfolds.',
      },
    ],
  },

  events: [
    {
      id: 'wedding',
      badge: 'Auspicious Ceremony · Day One',
      title: 'Wedding Ceremony',
      subtitle: 'Soliciting your gracious presence at the sacred nuptials',
      dateDisplay: 'Thursday, 12 November 2026',
      dayOfWeek: 'THURSDAY',
      dayNumber: '12',
      monthYear: 'NOVEMBER 2026',
      timeSummary: '5:00 PM Onwards',
      isoStart: '2026-11-12T17:00:00+05:30',
      isoEnd: '2026-11-12T23:59:00+05:30',
      subEvents: [
        {
          title: 'Sehra Bandi',
          time: '5:00 PM',
          description: 'Traditional ceremonial crowning of the groom surrounded by family blessings and auspicious songs.',
        },
        {
          title: 'Departure of Barat',
          time: '6:00 PM',
          description: 'The royal wedding procession departs with joyous music, dhol, and festive celebration.',
        },
      ],
      venue: {
        name: 'WEDLOCK MANOR',
        addressLine: 'On the Chandigarh–Ambala Expressway',
        cityState: 'Zirakpur, Punjab',
        googleMapsQuery: 'Wedlock Manor Chandigarh Ambala Expressway Zirakpur Punjab',
        googleMapsUrl:
          'https://www.google.com/maps/search/?api=1&query=Wedlock+Manor+Chandigarh+Ambala+Expressway+Zirakpur+Punjab',
      },
      theme: 'burgundy-palace',
      dressCodeNote: 'Traditional Indian Royal Attire · Shades of Ivory, Gold & Jewel Tones Welcome',
      highlights: [
        'Sehra Bandi at 5:00 PM sharp',
        'Royal Barat Procession at 6:00 PM',
        'Milni, Jaimala & Sacred Pheras at Wedlock Manor',
      ],
    },
  ] as WeddingEventConfig[],

  gallery: {
    heading: 'Moments to Cherish',
    subheading:
      'Curated royal frames awaiting our cherished memories — tap any frame to inspect in fullscreen or view how to swap in couple photographs.',
    items: [
      {
        id: 'frame-1',
        title: 'The Jharokha Silhouette',
        caption: 'Mantavya & Nitika · Royal Wedding Portrait',
        category: 'Pre-Wedding Portrait',
        aspect: 'arch',
        isPlaceholder: false,
        imageUrl: '/assets/aistudio/Joyful_South_Asian_Wedding_Portrait_4e371fa2.png',
        illustrationVariant: 'jharokha-couple',
      },
      {
        id: 'frame-2',
        title: 'Palace Courtyard Glow',
        caption: 'Reserved for Couple Editorial II · Golden Hour Promenade',
        category: 'Editorial Frame',
        aspect: 'portrait',
        isPlaceholder: true,
        illustrationVariant: 'palace-corridor',
      },
      {
        id: 'frame-3',
        title: 'Sacred Mehendi & Shagun',
        caption: 'Reserved for Intimate Details III · Heritage Adornments',
        category: 'Ceremonial Detail',
        aspect: 'arch',
        isPlaceholder: true,
        illustrationVariant: 'henna-hands',
      },
      {
        id: 'frame-4',
        title: 'The Royal Procession',
        caption: 'Reserved for Sehra Bandi & Barat · 12 November 2026',
        category: 'Wedding Day',
        aspect: 'landscape',
        isPlaceholder: true,
        illustrationVariant: 'royal-barat',
      },
      {
        id: 'frame-5',
        title: 'Beneath the Floral Mandap',
        caption: 'Reserved for Sacred Vows · Wedlock Manor, Zirakpur',
        category: 'Sacred Vows',
        aspect: 'arch',
        isPlaceholder: true,
        illustrationVariant: 'mandap-diya',
      },
      {
        id: 'frame-6',
        title: 'Starlit Reception Soirée',
        caption: 'Reserved for Reception Evening · KS Grand, Rupnagar',
        category: 'Reception Gala',
        aspect: 'portrait',
        isPlaceholder: true,
        illustrationVariant: 'starlit-garden',
      },
    ] as GalleryItemConfig[],
  },

  regards: {
    heading: 'With Love & Warm Regards',
    primaryFamilyTitle: 'Goyal Family',
    couplesList: [
      'Kirna & Bhushan Goyal',
      'Meena & Barinder Goyal',
      'Anita & Anand Gupta',
      'Mona & Yogesh Gupta',
      'Sarla & Dev Raj Garg',
      'Anu & Mahesh Garg',
    ],
    residenceAddress: '#178, Giani Zail Singh Nagar, Ropar (Pb.)',
    residenceMapsUrl:
      'https://www.google.com/maps/search/?api=1&query=178+Giani+Zail+Singh+Nagar+Ropar+Rupnagar+Punjab',
    contacts: [
      {
        display: '9417154380',
        href: 'tel:+919417154380',
        whatsappHref: 'https://wa.me/919417154380',
        label: 'Primary Family Contact',
      },
      {
        display: '9876118860',
        href: 'tel:+919876118860',
        whatsappHref: 'https://wa.me/919876118860',
        label: 'Secondary Family Contact',
      },
    ],
  },

  closing: {
    names: 'Mantavya & Nitika',
    line1: 'Together Is a Beautiful Place to Be.',
    line2: "We Can't Wait to Celebrate With You.",
    signoff: 'With Love, Goyal Family',
  },
};
