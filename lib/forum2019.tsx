import { profiles } from "@/lib/profiles";

import cisco from "@/assets/images/sponsors/cisco.svg";
import google from "@/assets/images/sponsors/google.svg";
import uulala from "@/assets/images/sponsors/uulala.png";
import dignityHealth from "@/assets/images/sponsors/dignity-health.jpg";
import crownSterling from "@/assets/images/sponsors/crown-sterling.png";
import burstIq from "@/assets/images/sponsors/burst-iq.png";
import pledgecamp from "@/assets/images/sponsors/pledgecamp.jpg";
import falkonVentures from "@/assets/images/sponsors/falkon-ventures.png";

import image1 from "@/assets/images/forum/2019/_RCS0035.jpg";
import image2 from "@/assets/images/forum/2019/_RCS0093.jpg";
import image3 from "@/assets/images/forum/2019/_RCS0103.jpg";
import image4 from "@/assets/images/forum/2019/_RCS0128.jpg";
import image5 from "@/assets/images/forum/2019/_RCS0278.jpg";
import image6 from "@/assets/images/forum/2019/_RCS9348.jpg";
import image7 from "@/assets/images/forum/2019/_RCS9365.jpg";
import image8 from "@/assets/images/forum/2019/_RCS9630.jpg";

import venueImage from "@/assets/images/venues/vatican-city.jpg";

const eventDetails = {
  title: "2019 Forum",
  description:
    "The Humanity 2.0 Forum is a broad spectrum gathering of luminaries and stakeholders at the Vatican to explore specific impediments to human flourishing and to discuss courses of action aimed at overcoming them.",
  descriptionLogo: undefined,
  venue: {
    name: "Vatican City",
    image: venueImage,
  },
  dates: "May 10, 2019",
};

const videos = {
  playlistId: "PL8rJDNiqYPUn-dZrrIcGv1CGjrlNkzG7q",
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

const albumUrl = "https://photos.app.goo.gl/w3QG2PGRck8ymFgs6";

const openingAddress = {
  title: "Opening Address",
  audio: {
    url: `https://res.cloudinary.com/kevinang/video/upload/v1681469670/humanity2-0/forum-2019-opening-speech_mzscix.mp3`,
  },
  speakers: [profiles.matthewSanders],
};

const topics = [
  [
    {
      title: "Humanity 2.0 Lab",
      description: (
        <p>
          The purpose of the Humanity 2.0 Lab, put simply, is to build healthier
          humans. The Humanity 2.0 Lab’s mission is to contribute to the
          maximization of human potential through optimizing one’s environment
          to enhance human health and wellness, focused particularly on key
          developmental periods in a human’s life.
        </p>
      ),
      sessions: [
        {
          title: "Presentation",
          speakers: [
            profiles.michelleWilliams,
            profiles.rickRidgeway,
            profiles.lizKeith,
            profiles.olesyaStruk,
            profiles.anaLanger,
            profiles.jieZhao,
            profiles.moradFareed,
            profiles.emmanuelaGakidou,
            profiles.jennieJoseph,
            profiles.williamHeisel,
          ],
          media: [
            {
              type: "audio",
              title: "Speech",
              authors: [profiles.michelleWilliams],
              url: "https://res.cloudinary.com/kevinang/video/upload/v1681504334/humanity2-0/MichelleWilliams-Opening_Address-Forum2019_1_rceyuk.mp3",
            },
            {
              type: "audio",
              title: "Speech",
              authors: [profiles.moradFareed],
              url: "https://res.cloudinary.com/kevinang/video/upload/v1681504376/humanity2-0/MoradFareed-OpeningAddress-Forum2019_txbpvi.mp3",
            },
            {
              type: "audio",
              title: "Speech",
              authors: [
                {
                  name: "H.E. Marie-Louise Coleiro Preca",
                  title: "KUOM GCMG, 9th President of Malta",
                },
              ],
              url: "https://res.cloudinary.com/kevinang/video/upload/v1681504380/humanity2-0/Marie-LouiseColeiroPreca-Speech-Forum2019_gytrgb.mp3",
            },
            {
              type: "audio",
              title: "Presentation",
              authors: [
                {
                  name: "Humanity 2.0 Lab",
                },
              ],
              url: "https://res.cloudinary.com/kevinang/video/upload/v1681504391/humanity2-0/Humanity2.0LabPresentation-Forum2019_udfktq.mp3",
            },
            {
              type: "audio",
              title: "Panel",
              authors: [
                {
                  name: "Healthier Humans Panel",
                },
              ],
              url: "https://res.cloudinary.com/kevinang/video/upload/v1681504402/humanity2-0/HealthierHumansPanel-Forum2019_bjzdbb.mp3",
            },
          ],
        },
      ],
    },
  ],
  [
    {
      title: "Project Vision",
      description: (
        <>
          <p>
            Project Vision is a Humanity 2.0 effort specifically designed to
            provide the roadmap needed in order to accelerate human progress.
          </p>
          <p>Project Vision has three objectives.</p>
          <p>
            First, to formulate a common vision for humanity that communicates
            the kind of human civilization we should be striving to build.
            Second, to identify the most significant impediments to realizing
            this vision. Three, to triage them in order to provide a roadmap for
            action.
          </p>
        </>
      ),
      sessions: [
        {
          title: "Panel",
          speakers: [
            profiles.tylerVanderweele,
            profiles.sarahSpiekermannHoff,
            profiles.johnHavens,
            profiles.steveFuller,
            profiles.frEzraSullivan,
            profiles.johnMurdock,
          ],
        },
      ],
      media: [
        {
          type: "audio",
          title: "Presentation",
          authors: [{ name: "Project Vision" }],
          url: "https://res.cloudinary.com/kevinang/video/upload/v1681507521/humanity2-0/ProjectVisionPresentation-Forum2019_pciohy.mp3",
        },
      ],
    },
  ],
  [
    {
      title: "School of Business Ethics",
      description: (
        <>
          <p>
            The mission of the School of Business Ethics is to provide all
            businesses with the education and expertise required to operate
            ethically.
          </p>
          <p>
            The School will train a new generation of leaders on how to run
            their businesses in an ethically responsible manner and provide
            consultation services so they have access to the support and
            expertise required to do so.
          </p>
        </>
      ),
      sessions: [
        {
          title: "Panel",
          speakers: [
            profiles.jamesLedbetter,
            profiles.carloDasaroBiondo,
            profiles.taeYoo,
            profiles.davidDempsey,
            profiles.lynnPaine,
            profiles.mariarosariaTaddeo,
            profiles.nicholasHaan,
            profiles.frPhilipLarrey,
            profiles.lettyGarcia,
            profiles.brendanDoherty,
            profiles.azaRaskin,
            profiles.michaelUseem,
            profiles.aliHessami,
            profiles.gregMedcraft,
            profiles.johnEdelman,
            profiles.frEzraSullivan,
            profiles.matthewSanders,
            profiles.jeanOelwang,
            profiles.timNixon,
            profiles.simonHenzellThomas,
            profiles.robertGrant,
            profiles.matthewLoughran,
            profiles.eddieLee,
            profiles.frankRicotta,
            profiles.louisKoch,
          ],
        },
      ],
      media: [
        {
          type: "audio",
          title: "Panel",
          authors: [{ name: "Ethical Transformations" }],
          url: "https://res.cloudinary.com/kevinang/video/upload/v1681507520/humanity2-0/EthicalTransformationsPanel-Forum_2019vs2_bxewfg.mp3",
        },
        {
          type: "audio",
          title: "Panel",
          authors: [{ name: "Impacts of Emerging Technology" }],
          url: "https://res.cloudinary.com/kevinang/video/upload/v1681507534/humanity2-0/EmergingTechnologiesPanel-Forum2019_wo106y.mp3",
        },
      ],
    },
  ],
];

const sponsors = [
  {
    level: "gold",
    sponsors: [
      { image: cisco, name: "Cisco" },
      { image: google, name: "Google" },
      { image: uulala, name: "Uulala" },
      { image: dignityHealth, name: "Dignity Health" },
      { image: crownSterling, name: "Crown Sterling" },
      { image: burstIq, name: "Burst IQ" },
      { image: pledgecamp, name: "Pledgecamp" },
      { image: falkonVentures, name: "Falkon Ventures" },
    ],
  },
];

const organizations = [
  [
    "OECD",
    "Google",
    "World Economic Forum",
    "The Coca-Cola Company",
    "Repubic of Malta",
    "Salesforce",
    "Cisco",
    "Dell",
    "HP",
    "University of Oxford",
    "Volkswagen AG",
    "Singularity University",
    "Forbes Impact",
    "Enel",
    "Patagonia",
    "IDEO",
    "Ford Foundation",
    "TIM",
    "Wind",
    "Edelman",
    "ING",
    "Novo Nordisk",
    "JLL",
    "Pontifical University of the Holy Cross",
    "Rutberg & Company LLC",
    "Secretariat for Communication, Holy See",
    "Dicastery for Promoting Integral Human Development (IHD)",
    "International Union Superiors General (UISG)",
    "Harvard T.H. Chan School of Public Health",
    "Wells Fargo",
    "University of Notre Dame",
    "Rocco Forte Hotels",
    "Institute of Electrical and Electronics Engineers (IEEE)",
    "John Templeton Foundation",
    "University of Ottawa",
    "NEXUS",
    "Order of Malta",
    "Center for Humane Technology",
    "Jesuits",
    "Pledgecamp",
    "Symmitree Ltd.",
    "Acton Institute",
    "Fincross International",
    "Dr. Sam Bunting",
    "LEO Pharma",
    "International Catholic Migration Commission",
    "Catholic Health Association",
    "MIT",
    "Crux",
    "National Catholic Reporter",
  ],
  [
    "Philips",
    "Virgin",
    "IKEA Group",
    "Accenture",
    "KPMG",
    "The B Team",
    "The Wharton School, The University of Pennsylvania",
    "Harvard Business School",
    "HSBC",
    "CNN",
    "Union Bank of Switzerland (UBS)",
    "Barclays",
    "Inc. magazine and Inc.com",
    "The Wall Street Journal",
    "U.S. Embassy to the Holy See",
    "Delos",
    "Secfi",
    "Envision Healthcare",
    "Galaxy Digital",
    "Pontifical Oriental Institute",
    "Gregorian University Foundation",
    "LUISS University",
    "BurstIQ",
    "World Alliance of YMCAs",
    "Pontifical Council for Interreligious Dialogue",
    "Ordo Fratrum Minorum",
    "Wayne State University",
    "Infinitum Humanitarian Systems",
    "MDA",
    "Infinitum Humanitarian Systems",
    "Bandwidth Inc.",
    "Global Catholic Climate Movement",
    "University of Warwick",
    "Rembrandt Collective",
    "Getch Foundation",
    "Hult Prize Foundation",
    "Caritas Internationalis",
    "Expanded Reason Awards",
    "Valis Bioscience",
    "Strathspey Crown",
    "A Bit More LTD",
    "Dignity Health",
    "ProjectXGlobal",
    "Pontificio Ateneo S. Anselmo",
    "Pure Land",
    "Saint Louis University",
    "EWTN Vatican",
    "National Catholic Register",
    "McBride & Company",
    "Unreasonable Group",
  ],
];

const schedule = [
  {
    title: "Welcome Addresses",
    time: "9:00 - 9:15",
    speakers: [
      {
        name: "Rev. Philip Larrey",
        title: "Chairman, Humanity 2.0",
      },
      { name: "Matthew Sanders", title: "CEO, Humanity 2.0" },
    ],
  },
  { separator: true },
  {
    title: "Humanity 2.0 Lab",
    time: "9:30 - 11:30",
    speakers: [
      { name: "Morad Fareed", title: "CEO, Humanity 2.0 Lab" },
      {
        name: "H.E. Marie-Louise Coleiro Preca, KUOM GCMG",
      },
      {
        name: "Michelle Williams",
        title: "Dean, Harvard T. H. Chan School of Public Health",
      },
    ],
  },
  {
    title: "Presentation - Lab",
    speakers: [
      { name: "Morad Fareed", title: "CEO, Humanity 2.0 Lab" },
      {
        name: "Dr. Jie Zhao",
        title: "Executive Vice President, Head of Delos Labs, Delos",
      },
      {
        name: "Jennie Joseph",
        title: "Executive Director, Commonsense Childbirth",
      },
      {
        name: "William Heisel",
        title: "Director of Global Services, IHME Client Services, IHME",
      },
      {
        name: "Prof. Ana Langer",
        title:
          "Coordinator, Dean's Special Initiative on Women and Health, Harvard T. H. Chan School of Public Health",
      },
    ],
  },
  {
    title: "Coffee Break",
    secondary: true,
  },
  {
    title: "Panel - Building Healthier Humans",
    speakers: [
      {
        name: "Prof. Ana Langer",
        title:
          "Coordinator, Dean's Special Initiative on Women and Health, Harvard T. H. Chan School of Public Health",
        role: "Moderator",
      },
      {
        name: "Emmanuela Gakidou",
        title:
          "Professor of Health Metrics Sciences and Senior Director of Organizational Development and Training, IHME",
      },
      {
        name: "Olesya Struk",
        title: "Senior Director Sustainability, Philips",
      },
      {
        name: "Rick Ridgeway",
        title: "Vice President of Public Engagement, Patagonia",
      },
      {
        name: "Liz Keith",
        title:
          "Executive Vice President of Sponsorship & Mission Integration, Dignity Health",
      },
    ],
  },
  { separator: true },
  {
    title: "Project Vision",
    time: "11:30 - 12:30",
  },
  {
    title: "Presentation - Project Vision",
    speakers: [
      {
        name: "Rev. Ezra Sullivan, O.P.",
        title: "Director of Project Vision, Humanity 2.0",
      },
    ],
  },
  {
    title: "Panel - Maximizing Human Flourishing",
    speakers: [
      {
        name: "Matthew Sanders",
        title: "CEO, Humanity 2.0",
        role: "Moderator",
      },
      {
        name: "Rev. Ezra Sullivan, O.P.",
        title: "Director of Project Vision, Humanity 2.0",
      },
      {
        name: "Prof. Tyler VanderWeele",
        title:
          "Director, Human Flourishing Program, Harvard's Institute for Quantitative Social Science",
      },
      {
        name: "Prof. Steve Fuller",
        title: "Chair in Social Epistemology, University of Warwick",
      },
      {
        name: "John Havens",
        title:
          "Executive Director, The IEEE Global Initiative on Ethics of Autonomous and Intelligent Systems, IEEE",
      },
      {
        name: "Prof. Sarah Spiekermann-Hoff",
        title:
          "Head of Institute for Management Information Systems, Vienna University of Economics and Business",
      },
      { name: "John Murdock", title: "President, Bandwidth Inc." },
    ],
  },
  { title: "Lunch", time: "12:30 - 13:45", secondary: true },
  { separator: true },
  {
    title: "School of Business Ethics",
    time: "13:45 - 17:00",
  },
  {
    title: "Presentation - School of Business Ethics",
    speakers: [
      {
        name: "Rev. Philip Larrey",
        title: "Chair of Logic, Pontifical Lateran University",
      },
      {
        name: "Letty Garcia",
        title:
          "Associate Director, Leadership Initiative, Harvard Business School",
      },
      {
        name: "Prof. Michael Useem",
        title:
          "Director, Center for Leadership and Change Management, The Wharton School, University of Pennsylvania",
      },
      {
        name: "Rev. Ezra Sullivan, O.P.",
        title:
          "Associate Professor, Pontifical University of St Thomas Aquinas",
      },
    ],
  },
  {
    title: "Panel - Ethical Transformations in Business",
    speakers: [
      {
        name: "Brendan Doherty",
        title: "Director, Forbes Impact",
        role: "Moderator",
      },
      {
        name: "Greg Medcraft",
        title:
          "Director, Directorate for Financial and Enterprise Affairs, OECD",
      },
      {
        name: "Prof. Lynn S. Paine",
        title: "Professor of Business Administration, Harvard Business School",
      },
      {
        name: "Rick Ridgeway",
        title: "Vice President of Public Engagement, Patagonia",
      },
      {
        name: "John Edelman",
        title:
          "Managing Director, Global Engagement and Corporate Responsibility, Edelman",
      },
      { name: "Prof. Ali Hessami", title: "Chair & Technical Editor, IEEE" },
      { name: "Aza Raskin", title: "Co-Founder, Center for Humane Technology" },
    ],
  },
  {
    title: "Coffee Break",
    secondary: true,
  },
  {
    title: "Panel - Business Leaders and Ethics",
    speakers: [
      {
        name: "James Ledbetter",
        title: "Editor, Inc. magazine and Inc.com",
        role: "Moderator",
      },
      {
        name: "Jean Oelwang",
        title:
          "President & Trustee Virgin Unite & B Team Senior Partner, Virgin",
      },
      {
        name: "Carlo D'Asaro Biondo",
        title: "President - EMEA Partnerships, Google",
      },
      {
        name: "Tae Yoo",
        title:
          "Senior Vice President, Corporate Affairs and Corporate Social Responsibility, Cisco Systems",
      },
      {
        name: "Louise Koch",
        title:
          "Corporate Sustainability Director, for Europe, Middle East & Africa, Dell EMC",
      },
      {
        name: "Tim Nixon",
        title:
          "Head Sustainability Thought Leadership, Managing Editor, Sustainability, Thomson Reuters",
      },
      {
        name: "David Dempsey",
        title:
          "Senior Vice President of Corporate Relations - EMEA, Salesforce",
      },
      {
        name: "Simon Henzell-Thomas",
        title: "Global Head of Public Affairs, IKEA Group",
      },
    ],
  },
  {
    title: "Panel - Emerging Tech for Good",
    speakers: [
      {
        name: "Matthew Sanders",
        title: "CEO, Humanity 2.0",
        role: "Moderator",
      },
      {
        name: "Nicholas Haan",
        title: "Vice President of Impact, Singularity University",
      },
      {
        name: "Mariarosaria Taddeo",
        title: "Deputy Director, Digital Ethics Lab, University of Oxford",
      },
      {
        name: "Robert Grant",
        title: "Chairman & Managing Partner, Strathspey Crown",
      },
      { name: "Frank Ricotta", title: "CEO & Founder, BurstIQ" },
      { name: "Matthew Loughran", title: "Chief Marketing Officer, Uulala" },
      { name: "Eddie Lee", title: "President, Pledgecamp" },
    ],
  },
  { separator: true },
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
