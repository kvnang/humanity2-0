import { profiles } from "@/lib/profiles";

import singularityNet from "@/assets/images/sponsors/singularity-net.png";

import image1 from "@/assets/images/forum/2024/PXL_20221103_065034228.jpg";
import image2 from "@/assets/images/forum/2024/9H6A1836.jpg";
import image3 from "@/assets/images/forum/2024/9H6A1545.jpg";
import image4 from "@/assets/images/forum/2024/9H6A1586.jpg";
import image5 from "@/assets/images/forum/2024/9H6A0781.jpg";
import image6 from "@/assets/images/forum/2024/1719199611950.jpeg";
import image7 from "@/assets/images/forum/2024/9H6A0695.jpg";
import image8 from "@/assets/images/forum/2024/PAS_0355.jpg";

import venueImage from "@/assets/images/venues/pontifical-academy-of-sciences.jpg";
import harvardHumanFlourishing from "@/assets/images/harvard-human-flourishing-program.png";
import pennPositivePsychology from "@/assets/images/penn-positive-psychology-center.png";
import unigre from "@/assets/images/unigre.png";

const eventDetails = {
  title: "2024 Human Flourishing Forum",
  description:
    "The Human Flourishing Forum consists of a two day program and involves leaders and luminaries from around the world exploring what constitutes and inhibits human flourishing. We are grateful to be partnering with The Human Flourishing Program at Harvard University, The Positive Psychology Center at the University of Pennsylvania, and the Pontifical Gregorian University in hosting this Forum.",
  descriptionLogos: [
    {
      src: harvardHumanFlourishing,
      alt: "The Human Flourishing Program at the Harvard University",
    },
    {
      src: pennPositivePsychology,
      alt: "The Positive Psychology Center at the University of Pennsylvania",
    },
    {
      src: unigre,
      alt: "Pontifical Gregorian University",
    },
  ],
  venue: {
    name: "Pontifical Academy of Sciences",
    image: venueImage,
  },
  dates: "May 23-24, 2024",
};

const videos = {
  playlistId: null,
};

const photos = [
  { src: image2 },
  { src: image6, objectPosition: "center 60%" },
  { src: image5 },
  { src: image1 },
  { src: image3, objectPosition: "center 40%" },
  { src: image4, objectPosition: "center 40%" },
  { src: image7 },
  { src: image8 },
];

const albumUrl = "https://photos.app.goo.gl/jYnRHu8gvFHmaNjZA";

const openingAddress = {
  title: "Opening Address",
  // video: {
  //   url: null,
  // },
  speakers: [profiles.peterTurkson],
};

const topics = [
  [
    {
      title: "Emerging Technology: Perils and Opportunities for Humanity",
      sessions: [
        {
          title: "Presentation",
          // video: {
          //   url: null,
          // },
          speakers: [profiles.frPhilipLarrey],
        },
      ],
    },
    {
      title: "Tech Frontiers - Beyond the Doom and Boom Binary",
      sessions: [
        {
          title: "Panel",
          // video: {
          //   url: null,
          // },
          speakers: [
            profiles.frPhilipLarrey,
            profiles.matthewSanders,
            profiles.josePacheco,
            profiles.renateNyborg,
            profiles.keyunRuan,
            profiles.michaelBaggot,
            profiles.janetAdams,
          ],
        },
      ],
    },
  ],
  [
    {
      title:
        "Presentation: Human Flourishing Framework 2.0 - A Blueprint for Flourishing",
      sessions: [
        {
          title: "Presentation",
          // video: {
          //   url: null,
          // },
          speakers: [profiles.ronIvey],
        },
      ],
    },
    {
      title:
        "Human Flourishing Foundations: The Case for a Collaborative Approach",
      sessions: [
        {
          title: "Panel",
          // video: {
          //   url: null,
          // },
          speakers: [
            profiles.ronIvey,
            profiles.jamesPawelski,
            profiles.timLomas,
            profiles.dennisSnower,
            profiles.julianneHoltLunstad,
            profiles.elisabethKincaid,
            profiles.lindsayOades,
          ],
        },
      ],
    },
  ],
  [
    {
      title:
        "Project Vision - Phase 2 Identifying, Triaging, and Indexing Impediments to Flourishing",
      sessions: [
        {
          title: "Presentation",
          // video: {
          //   url: null,
          // },
          speakers: [profiles.matthewSanders],
        },
      ],
    },
    {
      title:
        "Project Vision - Cross-Cultural Perspectives & Local Participation",
      sessions: [
        {
          title: "Panel",
          // video: {
          //   url: null,
          // },
          speakers: [
            profiles.timLomas,
            profiles.milaAliana,
            profiles.brandonVaidyanathan,
            profiles.michaelMuthukrishna,
            profiles.victorCounted,
            profiles.monicaAleman,
            profiles.tomasBjorkman,
          ],
        },
      ],
    },
  ],
  [
    {
      title:
        "Economics & Flourishing - Solidarity & Agency in the Age of AI & Robotics",
      sessions: [
        {
          title: "Presentation",
          // video: {
          //   url: null,
          // },
          speakers: [profiles.dennisSnower],
        },
      ],
    },
    {
      title: "Flourishing Together in the Future of Work and Money",
      sessions: [
        {
          title: "Panel",
          // video: {
          //   url: null,
          // },
          speakers: [
            profiles.isabelCane,
            profiles.adrianPabst,
            profiles.dennisSnower,
            profiles.lettyGarcia,
            profiles.johnLevy,
            profiles.johnHavens,
            profiles.andreLaborde,
          ],
        },
      ],
    },
  ],
];

const sponsors = [
  {
    level: "platinum",
    sponsors: [
      { image: singularityNet, name: "SingularityNET" },
      {
        image: harvardHumanFlourishing,
        name: "The Human Flourishing Program at Harvard University",
      },
      {
        image: pennPositivePsychology,
        name: "The Positive Psychology Center at the University of Pennsylvania",
      },
      { image: unigre, name: "Pontifical Gregorian University" },
    ],
  },
];

const organizations = [
  [
    "Ateneo Pontificio Regina Apostolorum",
    "Ateneo Regina Apostolorum",
    "Archdiocese of Malta",
    "Bena Capital, LLC",
    "Brigham Young University",
    "Cane Advisory",
    "Catholic News Service",
    "Cisco Systems, Inc.",
    "Dicastery for Promoting Integral Human Development",
    "Equipe Legale",
    "ESG News",
    "ESG News Corp.",
    "EWTN",
    "Ekskäret Foundation",
    "FlockX",
    "Fondazione Mario Diana Onlus",
    "Force for Good",
    "Forrest & Company Ltd.",
    "Ford Foundation",
    "Franklin Templeton Investments",
    "Georgetown University",
    "Gideon",
    "Global Solutions Initiative",
    "Guild.xyz",
    "HAIA",
    "Hallow",
    "Happiness Foundation",
    "Harvard Business School",
    "Harvard University",
    "Regent University",
    "National Research Foundation (NRF) of South Africa",
    "Holy See",
    "Humanity 2.0",
    "Humanity 2.0 Foundation",
  ],
  [
    "Institute of Electrical and Electronics Engineers (IEEE)",
    "IsaiX Technologies Inc.",
    "LAWCONSULT LTD",
    "Lifespan Extension Advocacy Foundation",
    "London School of Economics",
    "Loyola University New Orleans",
    "Massachusetts Institute of Technology",
    "Meeno",
    "Methuselah Foundation",
    "Movement Architects",
    "National Institute of Economic and Social Research",
    "NeuralFabric Corp.",
    "Order of Preachers",
    "Pontifical Gregorian University",
    "Pontifical Lateran University",
    "Pontifical Oriental Institute",
    "Pontifical University of Santa Croce",
    "Pontifical University of St. Thomas Aquinas",
    "ProSocial & Global Solutions Initiative",
    "Presencing Institute",
    "Rome Reports",
    "Saint Mary’s University of Minnesota",
    "SHINE",
    "SingularityNET",
    "Stealth Mode",
    "The Catholic University of America",
    "TranzactCard LLC",
    "UNESCO",
    "University College London",
    "University of Melbourne",
    "University of Pennsylvania",
    "Unite for Italy",
  ],
];

const schedule = [
  {
    title: "Welcoming Remarks",
    time: "9:00 - 9:15",
    speakers: [{ name: "Matthew Sanders" }, { name: "Ron Ivey" }],
  },
  {
    title: "Opening Address",
    time: "9:15 - 9:30",
    speakers: [{ name: "Cardinal Peter Turkson" }],
  },
  { separator: true },
  {
    title: "Emerging Technology: Perils and Opportunities for Humanity",
    time: "9:30 - 10:00",
    speakers: [{ name: "Fr. Philip Larrey" }],
  },
  {
    title: "Panel: Tech Frontiers - Beyond the Doom and Boom Binary",
    time: "10:00 - 10:45",
    speakers: [{ name: "Matthew Sanders", role: "Moderator" }],
  },
  {
    title: "Coffee Break",
    time: "10:45 - 11:15",
    secondary: true,
  },
  { separator: true },
  {
    title: "Human Flourishing Framework 2.0 - A Blueprint for Flourishing",
    time: "11:15 - 11:45",
    speakers: [{ name: "Ron Ivey" }],
  },
  {
    title:
      "Human Flourishing Foundations: The Case for a Collaborative Approach",
    time: "11:45 - 12:30",
    speakers: [{ name: "Ron Ivey" }],
  },
  { title: "Lunch", time: "12:30 - 13:30", secondary: true },
  { separator: true },
  {
    title:
      "Project Vision - Phase 2 Identifying, Triaging, and Indexing Impediments to Flourishing",
    time: "13:30 - 14:00",
    speakers: [{ name: "Matthew Sanders" }],
  },
  {
    title: "Project Vision - Cross-Cultural Perspectives & Local Participation",
    time: "14:00 - 14:45",
    speakers: [{ name: "Tim Lomas", role: "Moderator" }],
  },
  {
    title: "Coffee Break",
    time: "14:45 - 15:15",
    secondary: true,
  },
  { separator: true },
  {
    title:
      "Economics & Flourishing - Solidarity & Agency in the Age of AI & Robotics",
    time: "15:15 - 15:45",
    speakers: [{ name: "Dennis Snower" }],
  },
  {
    title: "Flourishing Together in the Future of Work and Money",
    time: "15:45 - 16:15",
    speakers: [{ name: "Isabel Cane", role: "Moderator" }],
  },
  {
    title: "Workshop overview presentations from leaders",
    time: "16:15 - 16:30",
  },
  {
    title: "Closing remarks",
    time: "16:30 - 16:45",
    speakers: [{ name: "Cardinal Peter Turkson" }],
  },
  { separator: true },
  {
    title: "Optional pre-dinner program",
    time: "16:45 - 17:00",
    secondary: true,
  },
  { title: "Reception", time: "18:30", secondary: true },
  { title: "Dinner", time: "19:00", secondary: true },
];

export {
  openingAddress,
  topics,
  sponsors,
  organizations,
  schedule,
  photos,
  albumUrl,
  videos,
  eventDetails,
};

// const eventDetails = {
//   title: "Human Flourishing Forum 2024",
//   description: (
//     <>
//       <p>
//         A gathering of luminaries and stakeholders at the Vatican to explore
//         recent insights and foster new partnerships aimed at accelerating human
//         flourishing globally.
//       </p>
//       <ul>
//         <li>Forum: Presentations, Panels, and Workshops</li>
//         <li>Private Tour</li>
//         <li>Exclusive Dinners</li>
//       </ul>
//     </>
//   ),
//   venue: {
//     name: "Pontifical Academy of Sciences",
//     city: "Vatican City",
//   },
//   dates: "May 23-24, 2024",
// };

// const upcoming = true;

// export { upcoming, eventDetails };
