import { profiles } from "@/lib/profiles";

import prayDotCom from "@/assets/images/sponsors/pray-dot-com.svg";
import revSustainability from "@/assets/images/sponsors/rev-sustainability.png";
import falkonVentures from "@/assets/images/sponsors/falkon-ventures.png";
import laudatoSiChallenge from "@/assets/images/sponsors/laudato-si-challenge.svg";

import image1 from "@/assets/images/forum/2018/Capture94.jpg";
import image2 from "@/assets/images/forum/2018/Capture181.jpg";
import image3 from "@/assets/images/forum/2018/Capture224.jpg";
import image4 from "@/assets/images/forum/2018/Capture535.jpg";
import image5 from "@/assets/images/forum/2018/Capture589.jpg";
import image6 from "@/assets/images/forum/2018/Capture631.jpg";
import image7 from "@/assets/images/forum/2018/Capture647.jpg";
import image8 from "@/assets/images/forum/2018/Capture686.jpg";

import venueImage from "@/assets/images/venues/vatican-city.jpg";

const eventDetails = {
  title: "2018 Forum",
  description:
    "The Humanity 2.0 Forum is a broad spectrum gathering of luminaries and stakeholders at the Vatican to explore specific impediments to human flourishing and to discuss courses of action aimed at overcoming them. It is the goal of a Forum to identify one specific venture that has high probability to fundamentally alter human life on earth and then to rally support for a cross sector collaborative venture.",
  descriptionLogo: undefined,
  venue: {
    name: "Vatican City",
    image: venueImage,
  },
  dates: "April 19, 2018",
};

const videos = {
  playlistId: "PL8rJDNiqYPUn3hkfRO1erYJScFgSROzkT",
};

const photos = [
  { src: image2 },
  { src: image6 },
  { src: image3, objectPosition: "65% center" },
  { src: image1 },
  { src: image5 },
  { src: image4, objectPosition: "25% center" },
  { src: image7 },
  { src: image8 },
];

const albumUrl = "https://photos.app.goo.gl/0t3s1708Mtefmf1O2";

const openingAddress = null;

const topics = [
  [
    {
      title: "A Healthy Environment for Pregnancy",
      description: (
        <>
          <p>
            A presentation by leading medical and life science institutions will
            outline a groundbreaking new approach to pregnancy.
          </p>
          <p>
            Following the presentation, plans for Square Roots’ first Lab will
            be unveiled as well as a call-to-commitment to invest in the future
            of humanity.
          </p>
        </>
      ),
      sessions: [
        {
          title: "Presentation",
          speakers: [
            profiles.scottSmith,
            profiles.anneHansen,
            profiles.lindaYaccarino,
            profiles.deliaGallagher,
            profiles.catherineMonk,
            profiles.moradFareed,
            profiles.jennieJoseph,
            profiles.louiseJames,
            profiles.nicoleMariePassonnoStott,
            profiles.patMurray,
            profiles.kulleniGebreyes,
            profiles.suzanneGratton,
            profiles.matthewSanders,
            profiles.danaPillai,
          ],
        },
      ],
    },
  ],
  [
    {
      title: "The Future of the Internet",
      description: (
        <>
          <p>
            The Trust Project is an international consortium of news
            organizations collaborating to use transparency to build a more
            trustworthy and trusted press. Led by award-winning journalist Sally
            Lehrman, it is hosted by Santa Clara University’s Markkula Center
            for Applied Ethics.
          </p>
          <p>
            Search engines and social media platforms, which have become
            important news distributors, are participating as external partners
            (Google, Bing, Facebook, Twitter).
          </p>
        </>
      ),
      sessions: [
        {
          title: "Panel",
          speakers: [
            profiles.sallyLehrman,
            profiles.lindaLanzillotta,
            profiles.juanLuisCebrian,
            profiles.marioCalabresi,
            profiles.adamSmith,
            profiles.markPayton,
            profiles.edYoung,
            profiles.steveGatena,
            profiles.biancaDeLaGarza,
            profiles.thomasErmacora,
          ],
        },
      ],
    },
  ],
  [
    {
      title: "Human-centered Civilizations",
      description: (
        <>
          <p>
            Pope Francis in his TED talk in 2017 urged for a “revolution in
            tenderness”. He reminded us that we are not islands unto ourselves,
            but rather a common family sharing a common home.
          </p>
          <p>
            The mission is to encourage a culture of love where we recognize
            each others dignity and work selflessly to build a civilization of
            true opportunity. This ‘exploratory panel’ will delve more deeply
            into Pope Francis’ remarks and suggest courses of action aimed at
            realizing the Holy Father’s vision.
          </p>
        </>
      ),
      sessions: [
        {
          title: "Panel",
          speakers: [
            profiles.ericHarr,
            profiles.brendanDoherty,
            profiles.princessKhaliyaAgaKhan,
            profiles.rabbiRiccardoDiSegni,
            profiles.steveGatena,
            profiles.jeffCherry,
            profiles.sophieRobe,
            profiles.melchiordeMuralt,
            profiles.ronIvey,
            profiles.thomasErmacora,
            profiles.elliotHoffman,
            profiles.lisaKristine,
          ],
        },
      ],
    },
  ],
];

const sponsors = [
  {
    level: "gold",
    sponsors: [
      { image: prayDotCom, name: "Pray.com" },
      { image: revSustainability, name: "REV Sustainability" },
      { image: falkonVentures, name: "Falkon Ventures" },
      { image: laudatoSiChallenge, name: "The Laudato Si Challenge" },
    ],
  },
];

const organizations = [
  [
    "Republic of Malta",
    "Italian Republic",
    "City of Rome",
    "Cisco",
    "World Bank Group - Connect4Climate",
    "Heritage Bank",
    "NASA",
    "WPP",
    "Palantir",
    "Wired",
    "LinkedIn",
    "Philips",
    "Women Political Leaders Global Forum",
    "IBM",
    "Salesforce",
    "Accenture",
    "Goldman Sachs",
    "La Stampa",
    "La Repubblica",
    "Santa Clara University",
    "Silicon Valley Bank",
    "Pray.Com",
    "Global Alliance for Humanitarian Innovation",
    "El País",
    "UNI Global Union",
    "Right Now",
    "Conscious Ventures Lab",
    "MAXXI Foundation",
    "Archdiocese of LA",
    "Dicastery for the Promotion of Integral Human Development (Holy See)",
    "The Rembrandt Collective",
    "Sudler & Hennessey",
    "Catholic News Agency",
    "Rome Great Synagogue (Tempio Maggiore)",
    "Laudato Si' Challenge",
    "De Pury Pictet Turettini & Cie s.a.",
    "Mandulis Energy",
    "Lisakristine.com",
    "Scooterino",
    "Forbes Impact Investing Community",
    "Protrash",
    "Connect4Climate at World Bank Group",
    "One Tribe Ventures",
    "Resco, LLC",
    "The Cook Law Group",
    "Main & Rose",
    "Rosenzweig & Company Inc.",
    "Garza Digital",
    "Tolmor Productions",
    "Commonsense Childbirth Inc.",
    "Human Foundation",
    "Secfi",
    "Society of Jesus (Jesuits)",
    "Order of Friars Minor",
    "Courageous Conversation Global Foundation",
    "Blue J Strategies",
  ],
  [
    "Delos",
    "PwC",
    "XPRIZE Foundation",
    "UniCredit S.p.A.",
    "Vatican Women's Association (D.VA)",
    "Boston Children's Hospital",
    "Harvard Medical School",
    "CNN",
    "U.S. Embassy to the Holy See",
    "Forbes Impact",
    "The Economist",
    "Mayo Clinic",
    "Columbia Medical School",
    "German Embassy to the Holy See",
    "Embassy of Georgia to the Holy See",
    "United Nations Foundation",
    "NBCUniversal",
    "Pontifical Lateran University",
    "Pontifical University of Saint Thomas Aquinas",
    "Douglas Elliman Real Estate",
    "Brigham Young University",
    "Cornerstone Capital",
    "Falkon Ventures",
    "REV Sutainability",
    "Forest & Company Limited",
    "Icon Studios",
    "Longbeard",
    "DeMicoli & Associates",
    "Catholic University of America",
    "Pontifical University Regina Apostolorum",
    "Fondazione Centesimus Annus Pro Pontifice",
    "Phenix Capital",
    "Trail Mix Ventures",
    "The Trust Project",
    "Union of International Superiors General (UISG)",
    "California Community Foundation",
    "Haymarket Media",
    "Papr",
    "Shaw Almex Industries",
    "AqusWater",
    "Alitalia",
    "Caviro Wines",
    "Core Values",
    "Prioritalia",
    "La Machi Communication for Good Causes",
    "EZ Waiting Room LLC",
    "SciDev.Net",
    "Pontifical Oriental Institute",
    "Angelini Design",
    "Translated",
    "SidePorch",
    "Cape Classics",
    "Catholic News Service",
    "Balance Integration Corporation",
  ],
];

const schedule = [
  {
    title: "Forum Schedule",
    time: "08:30 - 17:00",
  },
  { separator: true },
  {
    title: "Tour of Saint Peter’s Basilica",
    time: "18:00 - 18:45",
    secondary: true,
  },
  {
    title: "Exclusive Dinner",
    time: "19:00 - 22:00",
    secondary: true,
  },
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
