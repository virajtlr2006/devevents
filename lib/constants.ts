export type EventItems =  {
    title:string
    image:string
    slug:string,
    location:string,
    date:string,
    time:string,
}

export const events:EventItems[] = [
  {
    image: '/images/event1.png',
    title: 'JSConf Asia 2025',
    slug: 'jsconf-asia-2025',
    location: 'Singapore',
    date: '2025-02-15',
    time: '09:00',
  },
  {
    image: '/images/event2.png',
    title: 'React Rally',
    slug: 'react-rally-2025',
    location: 'Salt Lake City, USA',
    date: '2025-03-10',
    time: '10:30',
  },
  {
    image: '/images/event3.png',
    title: 'Hack the Verse',
    slug: 'hack-the-verse-2025',
    location: 'Remote + Local Hubs',
    date: '2025-04-05',
    time: '00:00', // midnight kickoff for global hackathon
  },
  {
    image: '/images/event4.png',
    title: 'DevFest India',
    slug: 'devfest-india-2025',
    location: 'Mumbai, India',
    date: '2025-05-20',
    time: '11:00',
  },
  {
    image: '/images/event5.png',
    title: 'Next.js Summit',
    slug: 'nextjs-summit-2025',
    location: 'San Francisco, USA',
    date: '2025-06-12',
    time: '09:30',
  },
]