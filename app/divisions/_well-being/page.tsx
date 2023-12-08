import Image from "next/image";
import wellBeingTitle from "./well-being.svg";
import { TitleLine } from "@/components/TitleLine";
import { FramedImage } from "@/components/FramedImage";
import wellBeingIntroImage from "@/assets/images/well-being-intro.jpg";
import wellBeingAboutImage from "@/assets/images/well-being-about.jpg";
import wellBeingCeoImage from "@/assets/images/well-being-ceo.jpg";
import { Hallmark } from "../impact/Hallmark";
import projectImage1 from "@/assets/images/well-being/project-1.jpg";
import projectLogo1 from "@/assets/images/well-being/project-1-logo.svg";
import projectImage2 from "@/assets/images/well-being/project-2.jpg";
import projectLogo2 from "@/assets/images/well-being/project-2-logo.svg";
import projectImage3 from "@/assets/images/well-being/project-3.jpg";
import projectLogo3 from "@/assets/images/well-being/project-3-logo.svg";
import projectImage4 from "@/assets/images/well-being/project-4.jpg";
import projectLogo4 from "@/assets/images/well-being/project-4-logo.png";
import { PageNav } from "@/components/PageNav";
import { getMetadata } from "@/lib/metadata";
import { PressItem } from "./PressItem";
import { Videos } from "@/components/Videos";
import { AudioProps, Audios } from "@/components/Audios";
import { profiles } from "@/lib/profiles";

const press = [
  {
    url: "https://cruxnow.com/sponsored/2020/09/two-universities-leading-a-covid-19-response/",
    title: "Two universities leading a COVID-19 response",
    date: "2020-09-25",
  },
  {
    url: "https://finance.yahoo.com/news/vatican-reopens-delos-aligns-humanity-131500548.html",
    title:
      "As Vatican Reopens, Delos Aligns with Humanity 2.0 Well Being to Implement the Vatican’s First Wellness Installation into its Real Estate Portfolio at the Renowned Pontifical Orientale Institute",
    date: "2020-05-11",
  },
  {
    url: "https://aleteia.org/2020/09/05/two-catholic-universities-using-new-technology-to-protect-campuses-from-covid/",
    title:
      "Two Catholic universities using new technology to protect campuses from COVID",
    date: "2020-09-05",
  },
  {
    url: "https://www.prnewswire.com/news-releases/humanity-2-0-launches-new-global-wellness-platform-to-implement-scientific-innovations-in-the-faith-sector-301015115.html",
    title:
      "Humanity 2.0 Launches New Global Wellness Platform to Implement Scientific Innovations in the Faith Sector",
    date: "2020-05-03",
  },
];

const bio = (
  <>
    <p>
      Morad is an entrepreneur and philanthropist focused on revolutionizing
      environmental and maternal health challenges. He is the Co-Founder of
      Delos, the world’s leading catalyst for improving the health and
      well-being of people by improving the indoor environments where they live,
      work, sleep and play. Delos operates the world’s leading certification
      platform for healthy environments, the WELL Building Standard(™), which is
      registered in over 525 million square feet of real estate, across 4000+
      projects in 61 countries. As former Managing Partner, Morad helped
      architect the formation of the wellness building movement on each front,
      helping create and grow the wellness real estate industry from $0 in 2010
      to $197B in 2020. Morad also helped create the world’s first lab to
      exclusively study how indoor environments impact human health, the Well
      Living Lab, a Delos and Mayo Clinic Collaboration. Delos was recently
      named one of World’s 50 most innovative companies by Fast Company, and
      it’s Well Living Lab was awarded the prestigious Edison Award. Morad
      remains a proud Advisor to Delos, accompanied by a distinguished board
      that includes the 17th Surgeon General of the United States Richard
      Carmona and Leonardo Dicaprio.
    </p>
    <p>
      Earlier in his career, Morad worked at Starwood Hotels and Resorts in
      sustainable hotel development, where he helped found the hotel industry’s
      first ever green hotel brand, Element by Westin(™). While there, he also
      worked on $2 billion in hotel development projects for the St. Regis, W,
      Westin, and Sheraton hotels brands. Prior to that, Morad served as a
      Senior Analyst at First Manhattan Consulting Group, a financial services
      consulting firm, as well as a Summer Analyst at Goldman Sachs, in both the
      Equities and Fixed Income divisions for two years.
    </p>
    <p>
      Morad’s mission has become to radically improve maternal health, by
      founding and funding Square Roots, a company whose mission is to introduce
      only a systemic approach to improving pregnancy well being. He is a proud
      Co-founder of the Vatican-based Humanity 2.0 Foundation, a vehicle for
      accelerating human progress on key challenges, including pregnancy, and
      serves as CEO of Humanity 2.0 Well Being. Recently, Morad created a
      maternal health scholarship fund at the Harvard T.H. Chan School of Public
      Health, named after his parents, Dr. Nabiel and Wesam Fareed, for students
      of Palestinian descent.
    </p>
    <p>
      Morad graduated from New York University with a degree in Economics, and
      he currently resides in New York City. A lifelong athlete and Captain of
      NYU Soccer, Morad was a member of the first ever Palestinian National
      Soccer Team, which competed in the 2006 FIFA World Cup. He dedicates his
      calling to work on Square Roots to his own Mother, Wesam.
    </p>
  </>
);

const audios: AudioProps[] = [
  {
    title: "Speech",
    authors: [profiles.michelleWilliams],
    url: "https://res.cloudinary.com/kevinang/video/upload/v1681504334/humanity2-0/MichelleWilliams-Opening_Address-Forum2019_1_rceyuk.mp3",
  },
  {
    title: "Speech",
    authors: [profiles.moradFareed],
    url: "https://res.cloudinary.com/kevinang/video/upload/v1681504376/humanity2-0/MoradFareed-OpeningAddress-Forum2019_txbpvi.mp3",
  },
  {
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
    title: "Panel",
    authors: [
      {
        name: "Healthier Humans Panel",
      },
    ],
    url: "https://res.cloudinary.com/kevinang/video/upload/v1681504402/humanity2-0/HealthierHumansPanel-Forum2019_bjzdbb.mp3",
  },
];

export const metadata = getMetadata({
  title: "Well Being",
  description: `Humanity 2.0 Well Being is our life science platform focused on accelerating human flourishing.`,
  pathname: "/divisions/well-being",
});

export default function ImpactPage() {
  return (
    <main>
      <section className="pt-page pb-section">
        <div className="container">
          <h1 className="max-w-full w-52 mb-[0.75em] lg:w-60">
            <Image
              src={wellBeingTitle}
              alt="Impact"
              className="w-auto h-8 md:h-10"
              priority
            />
          </h1>
          <div className="mb-8 lg:mb-12">
            <div className="flex -mx-4">
              <div className="px-4">
                <div className="prose">
                  <p className="h5">
                    Humanity 2.0 Well Being is our life science platform focused
                    on accelerating human flourishing.
                  </p>
                  <p>
                    Its mission is to optimize two key influences that shape a
                    human’s health destiny: a healthy pregnancy and a healthy
                    environment.
                  </p>
                  <p>
                    Through collaborations with leading science partners,
                    Humanity 2.0 Well Being helps translate and implement well
                    being standards into communities around the world.
                  </p>
                </div>
              </div>
              <div className="px-4 flex-1 hidden lg:block -mr-32 2xl:-mr-12 3xl:mr-0 max-w-lg ml-auto">
                <Image src={wellBeingIntroImage} alt="" priority />
              </div>
            </div>
          </div>
          <PageNav
            anchors={[
              { label: "Latest Projects", id: "projects" },
              { label: "Press", id: "press" },
              { label: "Participating Organizations", id: "organizations" },
              { label: "Our Goals", id: "goals" },
              { label: "Join Us", id: "join" },
              { label: "Our Impact", id: "impact" },
            ]}
          />
        </div>
      </section>
      <section id="projects" className="py-section bg-gray-100">
        <div className="container">
          <h2 className="mb-[1em]">
            <TitleLine>Latest Projects</TitleLine>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            <div className="col-span-full">
              <Hallmark
                index={0}
                image={projectImage1}
                logo={projectLogo1}
                title="COVID-19 Response"
                text={
                  <>
                    <p>
                      Humanity 2.0 Well Being and Delos teamed-up with Saint
                      Mary’s to install groundbreaking purification systems on
                      its Winona and Twin Cities campuses. These systems, which
                      were being discussed prior to the COVID-19 pandemic as
                      part of Saint Mary’s commitment to healthy living and
                      wellness for students, will significantly contribute to
                      the health and well-being of students, faculty, staff, and
                      campus visitors by purifying the air and surfaces of
                      harmful materials, including viruses.
                    </p>
                  </>
                }
                website="https://youtu.be/uRMr5BJhVbs"
                featured
              />
            </div>
            <Hallmark
              index={0}
              image={projectImage2}
              logo={projectLogo2}
              title="Helping Moms Achieve an Optimal Pregnancy"
              text={
                <>
                  <p>
                    The decision on where to begin HWB’s work was simple. Start
                    at the beginning, and as it turns out, the most important
                    period of human development - pregnancy.
                  </p>
                  <p>
                    Sadly, we are failing our moms. Pregnancy today still
                    needlessly claims lives and far too many moms are still
                    experiencing ‘traumatic birth experiences’. Women have been
                    giving birth for thousands of years and yet, there is still
                    no accessible ‘gold standard’ for pregnancy.
                  </p>
                  <p>
                    So, we teamed up with Square Roots to develop a leading
                    solution. Humanity 2.0 Well Being is determined to support
                    moms, and dads, around the world to ensure they have the
                    healthiest and happiest pregnancy possible.
                  </p>
                </>
              }
              website="https://squareroots.com/"
            />
            <Hallmark
              index={1}
              image={projectImage3}
              logo={projectLogo3}
              title="Optimizing Buildings to Promote Health and Well Being"
              text={
                <>
                  <p>
                    Humanity today is spending up to 90% of our time indoors,
                    which is an enormous divergence from our evolutionary
                    history that has a profound health and wellness impact on
                    us.
                  </p>
                  <p>
                    Understanding the effects of buildings (the built
                    environment) on us is therefore key to determining how we
                    can leverage our time inside to promote our health and
                    wellness.
                  </p>
                  <p>
                    So, Humanity 2.0 Well Being teamed up with Delos, the
                    world’s leader in building science and technology, to
                    explore how to bring these interventions to new markets such
                    as student & senior housing, hospitals, houses of worship
                    and others.
                  </p>
                </>
              }
              website="https://delos.com/newsroom"
            />
            <Hallmark
              index={2}
              image={projectImage4}
              logo={projectLogo4}
              title="Pontifical Oriental Institute COVID-19 Response"
              text="Humanity 2.0 Well Being and Delos joined forces with Fr. David Nazar, SJ, Rector of the Pontifical Oriental Institute, to create a showcase in Rome that features some of the most advanced anti-COVID protocols and technologies available along with health and wellness upgrades intended to reduce stress and bolster focus."
            />
          </div>
        </div>
      </section>

      <section id="press" className="py-section">
        <div className="container">
          <h2 className="mb-[1em]">
            <TitleLine>Press</TitleLine>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {press.map((item) => (
              <PressItem key={item.url} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-section bg-gray-100">
        <div className="container">
          <h2 className="h1 mb-[0.75em]">
            <TitleLine>About</TitleLine>
          </h2>
          <FramedImage>
            <Image src={wellBeingAboutImage} alt="" />
          </FramedImage>
          <h3 className="h4">Rooted in science. Inspired by humanity.</h3>
          <div className="prose">
            <p>
              Humanity 2.0 Well Being{" "}
              <strong>takes a life-course approach</strong>. Meaning, our
              approach and interventions are intended to ensure positive health
              and wellness outcomes throughout a person’s life.
            </p>
            <p>
              We’re focused on understanding how each developmental period
              determines or influences future periods. For example, how does the
              prenatal period impact early childhood development?
            </p>
            <p>
              The life-course approach to health and wellness requires insight
              from various fields such as medical and environmental science,
              sociology, and technology in order to achieve an impact, which is
              why we work with such a breadth of organizations & institutions.
            </p>
            <p>
              <a
                href="https://www.who.int/life-course/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more about the life-course approach.
              </a>
            </p>
          </div>
        </div>
      </section>

      <section id="ceo" className="py-section bg-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4 gap-y-8">
            <div className="col-span-12 md:col-span-6 lg:col-span-5">
              <div className="max-w-lg">
                <FramedImage>
                  <Image src={wellBeingCeoImage} alt="Morad Fareed" />
                </FramedImage>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-6 lg:col-start-7">
              <div className="mb-4">
                <h3 className="h4">Morad Fareed</h3>
                <div className="text-body-tint">Chief Executive Officer</div>
                <div>Humanity 2.0 Well Being</div>
              </div>
              <div className="prose text-white">{bio}</div>
            </div>
          </div>
        </div>
      </section>

      <section id="media" className="py-section">
        <div className="container">
          <h2 className="h1 mb-[0.75em]">
            <TitleLine>Media</TitleLine>
          </h2>
          <div className="mb-10 last:mb-0">
            <h3 className="h4 mb-[1em]">Videos</h3>
            <Videos videoIds={["lqPbCKtIm6Y", "lqPbCKtIm6Y", "Lxtqjpr_sR8"]} />
          </div>
          <div className="mb-10 last:mb-0">
            <h3 className="h4 mb-[1em]">Audios</h3>
            <Audios audios={audios}></Audios>
          </div>
        </div>
      </section>

      <section className="py-section bg-gray-900">
        <div className="container">
          <div className="max-w-prose">
            <div className="pl-4 md:pl-0">
              <blockquote className="text-white relative text-lg md:text-xl font-heading font-semibold">
                <div className="absolute -top-[0.25em] -left-[0.5em] text-primary font-sans leading-none text-[4rem] md:text-[5rem]">
                  &ldquo;
                </div>
                <p>
                  Investing in human development is the surest path to human
                  flourishing
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
