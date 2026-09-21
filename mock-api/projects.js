// Seed data for the mock API. Projects are fictional.
// `baseScore` is internal to the mock and is never sent to the client;
// it determines the starting rank (higher score = better rank).
export const SEED_PROJECTS = [
  {
    id: '3f9a1c7e',
    name: 'Tidewatch',
    descriptionShort: 'Early warnings for coastal flooding, block by block.',
    descriptionLong:
      'Tidewatch combines NOAA tide forecasts with readings from low-cost water-level sensors the team soldered during the hackathon. When a neighborhood is about to flood, residents get a text with the expected water height and the nearest high-ground route. The team calibrated their model against five years of historical flood reports from Long Beach and caught 9 of the 11 major events.',
    thumbnail: '/thumbnails/3f9a1c7e.svg',
    baseScore: 50,
  },
  {
    id: '8b2d4e61',
    name: 'SignBridge',
    descriptionShort: 'Real-time ASL fingerspelling to text in the browser.',
    descriptionLong:
      'SignBridge runs a hand-landmark model entirely in the browser, so no video ever leaves your laptop. It recognizes the 26 fingerspelled letters of American Sign Language and assembles them into words with a small language model that fixes likely misreads. The team tested it with members of the USC ASL club, who helped them record over 4,000 labeled samples overnight.',
    thumbnail: '/thumbnails/8b2d4e61.svg',
    baseScore: 49,
  },
  {
    id: 'c47e09b3',
    name: 'Plate Pal',
    descriptionShort: 'Routes leftover dining hall food to students who need it.',
    descriptionLong:
      'Dining halls throw away trays of untouched food every night. Plate Pal lets staff post surplus in under ten seconds from a tablet, then notifies students who opted in, with a pickup window and a map. A pilot during the hackathon weekend with one campus café moved 37 meals that would otherwise have been discarded.',
    thumbnail: '/thumbnails/c47e09b3.svg',
    baseScore: 48,
  },
  {
    id: '1d6f8a24',
    name: 'GreenRoute',
    descriptionShort: 'The lowest-emission way to get across LA today.',
    descriptionLong:
      'GreenRoute compares driving, transit, biking, scooters and combinations of them, and ranks routes by estimated CO2 instead of by time alone. It pulls live Metro arrival data and shows you exactly how many minutes the greener option costs. The judges liked that it never hides the fastest route; it just makes the tradeoff visible.',
    thumbnail: '/thumbnails/1d6f8a24.svg',
    baseScore: 47,
  },
  {
    id: 'e5a3b7d9',
    name: 'Rent Radar',
    descriptionShort: 'Flags risky clauses in your lease before you sign.',
    descriptionLong:
      'Upload a PDF lease and Rent Radar highlights clauses that are unusual, one-sided, or possibly unenforceable under California law: automatic renewals, excessive late fees, and illegal waivers of habitability. Each flag links to a plain-English explanation and a question to ask your landlord. The team wrote the clause rules with help from a law student mentor.',
    thumbnail: '/thumbnails/e5a3b7d9.svg',
    baseScore: 46,
  },
  {
    id: '72c1f05e',
    name: 'Echo Garden',
    descriptionShort: 'An AR garden that grows when you slow down and breathe.',
    descriptionLong:
      'Echo Garden is a phone-based augmented reality space for short mindfulness breaks. It listens to your breathing through the microphone, and slower, steadier breaths make the plants around you grow and bloom. Nothing is recorded or uploaded. The team designed it after surveying 60 students about what stops them from taking breaks during finals.',
    thumbnail: '/thumbnails/72c1f05e.svg',
    baseScore: 45,
  },
  {
    id: '9e0b3a6c',
    name: 'ShelterSync',
    descriptionShort: 'Live shelter bed availability for outreach workers.',
    descriptionLong:
      'Outreach workers often call shelter after shelter to find an open bed. ShelterSync gives shelters a one-tap way to update their availability and gives outreach teams a live map filtered by requirements like pets, families, or accessibility. The team built the shelter-side app to work over SMS so it runs on any phone.',
    thumbnail: '/thumbnails/9e0b3a6c.svg',
    baseScore: 44,
  },
  {
    id: 'b8d52f17',
    name: 'StudyBuddy Live',
    descriptionShort: 'Find people in your lecture who are studying right now.',
    descriptionLong:
      'StudyBuddy Live matches students enrolled in the same course who are free at the same time, then books an open study room nearby. You only share your course list and a rough availability window, never your exact location. It also includes a shared whiteboard, which the team built from scratch in 30 hours.',
    thumbnail: '/thumbnails/b8d52f17.svg',
    baseScore: 43,
  },
];
