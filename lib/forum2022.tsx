import { profiles } from "@/lib/profiles";

import ftxEu from "@/assets/images/sponsors/ftx-eu.svg";
import fordFoundation from "@/assets/images/sponsors/ford-foundation.svg";
import esgNews from "@/assets/images/sponsors/esg-news.svg";
import laudatoSiChallenge from "@/assets/images/sponsors/laudato-si-challenge.svg";

import image1 from "@/assets/images/forum/2022/9H6A7989.jpg";
import image2 from "@/assets/images/forum/2022/9H6A8052.jpg";
import image3 from "@/assets/images/forum/2022/9H6A8166.jpg";
import image4 from "@/assets/images/forum/2022/9H6A8299.jpg";
import image5 from "@/assets/images/forum/2022/PXL_20221103_065034228.jpg";
import image6 from "@/assets/images/forum/2022/PXL_20221104_154455597.jpg";
import image7 from "@/assets/images/forum/2022/9H6A8371-Edit.jpg";
import image8 from "@/assets/images/forum/2022/PXL_20221103_204438180.MP.jpg";

import venueImage from "@/assets/images/venues/pontifical-academy-of-sciences.jpg";
import harvardHumanFlourishing from "@/assets/images/harvard-human-flourishing-program.png";

const eventDetails = {
  title: "2022 Human Flourishing Forum",
  description:
    "The Human Flourishing Forum consists of a two day program and involves leaders and luminaries from around the world exploring what constitutes and inhibits human flourishing. We are grateful to be partnering with The Human Flourishing Program at Harvard University in hosting this Forum.",
  descriptionLogos: [
    {
      src: harvardHumanFlourishing,
      alt: "The Human Flourishing Program at the Harvard University",
    },
  ],
  venue: {
    name: "Casina Pio IV, Vatican City",
    image: venueImage,
  },
  dates: "Nov 3-4, 2022",
};

const videos = {
  playlistId: "PL8rJDNiqYPUkoEmbZwXDzp1NyeVZg87Fl",
};

const photos = [
  { src: image2 },
  { src: image6, objectPosition: "center 70%" },
  { src: image5 },
  { src: image1, objectPosition: "center 40%" },
  { src: image3, objectPosition: "center 70%" },
  { src: image4, objectPosition: "center 30%" },
  { src: image7 },
  { src: image8 },
];

const albumUrl = "https://photos.app.goo.gl/yTztxb2Sqf5AfacY9";

const openingAddress = {
  title: "Opening Address",
  video: {
    url: `https://www.youtube.com/watch?v=A3pwfsi8jII&list=PL8rJDNiqYPUkoEmbZwXDzp1NyeVZg87Fl`,
  },
  speakers: [profiles.peterTurkson],
};

const topics = [
  [
    {
      title: "Defining human flourishing: is there an established definition?",
      sessions: [
        {
          title: "Presentation",
          video: {
            url: "https://www.youtube.com/watch?v=exOOUaWlMO0",
          },
          speakers: [profiles.matthewLee, profiles.brianWellinghoff],
        },
      ],
    },
    {
      title: "Why does defining human flourishing matter?",
      sessions: [
        {
          title: "Panel",
          video: {
            url: "https://www.youtube.com/watch?v=o35ugmiHhv4",
          },
          speakers: [
            profiles.matthewLee,
            profiles.lauraTaylor,
            profiles.frRobertGahl,
            profiles.julianChapman,
            profiles.katyGranvilleChapman,
          ],
        },
      ],
    },
  ],
  [
    {
      title: "Human flourishing frameworks: an overview of progress to date",
      sessions: [
        {
          title: "Presentation",
          video: {
            url: "https://www.youtube.com/watch?v=L3-yH-ugl9k",
          },
          speakers: [profiles.frEzraSullivan],
        },
      ],
    },
    {
      title:
        "Working towards a common human flourishing framework: what would this look like and why does it matter?",
      sessions: [
        {
          title: "Panel",
          video: {
            url: "https://www.youtube.com/watch?v=VvYKGJyYIEs",
          },
          speakers: [
            profiles.matthewSanders,
            profiles.johnHavens,
            profiles.steveFuller,
            profiles.revCarmenLansdowne,
            profiles.frEzraSullivan,
            profiles.joeDaly,
          ],
        },
      ],
    },
  ],
  [
    {
      title:
        "Why should advancing human flourishing be the purpose of an economy?",
      sessions: [
        {
          title: "Presentation",
          video: {
            url: "https://www.youtube.com/watch?v=L3-yH-ugl9k",
          },
          speakers: [profiles.jimRitchieDunham],
        },
      ],
    },
    {
      title:
        "How a common human flourishing framework could benefit business and impact investors",
      sessions: [
        {
          title: "Panel",
          video: {
            url: "https://www.youtube.com/watch?v=VvYKGJyYIEs",
          },
          speakers: [
            profiles.taeYoo,
            profiles.erikaKarp,
            profiles.danielShakhani,
            profiles.evanBaehr,
            profiles.marcelLotscher,
          ],
        },
      ],
    },
  ],
  [
    {
      title:
        "How would a human flourishing framework transform the stewardship of philanthropy?",
      sessions: [
        {
          title: "Presentation",
          video: {
            url: "https://www.youtube.com/watch?v=L3-yH-ugl9k",
          },
          speakers: [profiles.bobBoisture],
        },
      ],
    },
    {
      title:
        "How effective is philanthropy at addressing impediments to human flourishing and how can a human flourishing framework address these issues?",
      sessions: [
        {
          title: "Panel",
          video: {
            url: "https://www.youtube.com/watch?v=VvYKGJyYIEs",
          },
          speakers: [
            profiles.ronIvey,
            profiles.bobBoisture,
            profiles.patriciaShmorhunHawrylyshyn,
            profiles.crengutaLeaua,
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
      { image: ftxEu, name: "FTX EU" },
      { image: fordFoundation, name: "Ford Foundation" },
    ],
  },
  {
    level: "gold",
    sponsors: [
      { image: esgNews, name: "ESG News" },
      { image: laudatoSiChallenge, name: "The Laudato Si Challenge" },
    ],
  },
];

const organizations = [
  [
    "Holy See (Vatican)",
    "Harvard T.H. Chan School of Public Health",
    "Harvard Business School",
    "Harvard Medical School",
    "University of Oxford",
    "Massachusetts Institute of Technology (MIT)",
    "University of Pennsylvania",
    "Baylor University",
    "Australian Catholic University",
    "Loyola University New Orleans",
    "University of Warwick",
    "Villanova University",
    "Templeton World Charity Foundation",
    "Pontifical Lateran University",
    "The Catholic University of America",
    "Pontifical Oriental Institute",
    "Pontifical University of the Holy Cross",
    "Venerable English College",
    "Pontifical University of St. Thomas Aquinas",
    "Ateneo Regina Apostolorum",
    "Expanded Reason Institute (Francisco de Victoria University)",
    "Institute for Strategic Clarity",
    "The United Church of Canada",
    "Sports Media Challenge",
    "Filo Sofi Arts",
    "MoveUkraine",
    "Laudato Si' Challenge",
    "Core Values",
    "FTX Europe",
  ],
  [
    "Google",
    "Cisco",
    "Pathstone",
    "Gallup",
    "Learn Capital",
    "Fetzer Institute",
    "National Renewable Energy Laboratory (NREL)",
    "Institute of Electrical and Electronics Engineers (IEEE)",
    "Noovle (TIM Italia)",
    "RAI",
    "Kluz Ventures",
    "Chapman & Co. Leadership Institute",
    "Mind Foundry",
    "Salary Finance",
    "Swiss Institute for Alternative Thinking",
    "Commpro Worldwide",
    "ebo",
    "Forrest & Company",
    "CM-Equity AG",
    "Flerish",
    "Colonize Mars",
    "Rembrandt Collective",
    "Acton Institute - Rome",
    "Rome Reports",
    "Corsi e Pampanelli",
    "Morichi Atelier LLC",
    "Uniti Networks",
  ],
];

const schedule = [
  {
    title: "Welcoming Remarks",
    time: "9:00 - 9:15",
    speakers: [
      {
        name: "Rev. Philip Larrey",
        title: "Chairman, Humanity 2.0",
      },
      { name: "Matthew Sanders", title: "CEO, Humanity 2.0" },
    ],
  },
  {
    title: "Opening Address",
    time: "9:15 - 9:30",
    speakers: [{ name: "Archbishop Vincenzo Paglia" }],
  },
  { separator: true },
  {
    title: "Defining human flourishing: is there an established definition?",
    time: "9:30 - 10:00",
    speakers: [{ name: "Matthew Lee & Brian Wellinghoff" }],
  },
  {
    title: "Why does defining human flourishing matter?",
    time: "10:00 - 10:45",
    speakers: [{ name: "Fr. Bob Gahl", role: "Moderator" }],
  },
  {
    title: "Coffee Break",
    time: "10:45 - 11:15",
    secondary: true,
  },
  { separator: true },
  {
    title: "Human flourishing frameworks: an overview of progress to date",
    time: "11:15 - 11:45",
    speakers: [{ name: "Fr. Ezra Sullivan, OP" }],
  },
  {
    title:
      "Working towards a common human flourishing framework: what would this look like and why does it matter?",
    time: "11:45 - 12:30",
    speakers: [{ name: "Matthew Sanders", role: "Moderator" }],
  },
  { title: "Lunch", time: "12:30 - 13:30", secondary: true },
  { separator: true },
  {
    title:
      "Why should advancing human flourishing be the purpose of an economy?",
    time: "13:30 - 14:00",
    speakers: [{ name: "Jim Ritchie-Dunham" }],
  },
  {
    title:
      "How a common human flourishing framework could benefit business and impact investors",
    time: "14:00 - 14:45",
    speakers: [{ name: "Tae Yoo", role: "Moderator" }],
  },
  {
    title: "Coffee Break",
    time: "14:45 - 15:15",
    secondary: true,
  },
  { separator: true },
  {
    title:
      "How would a human flourishing framework transform the stewardship of philanthropy?",
    time: "15:15 - 15:45",
    speakers: [{ name: "Bob Boisture" }],
  },
  {
    title:
      "How effective is philanthropy at addressing impediments to human flourishing and how can a human flourishing framework address these issues?",
    time: "15:45 - 16:15",
    speakers: [{ name: "Ron Ivey", role: "Moderator" }],
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
    title: "Tour: St. Peter's Basilica",
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
