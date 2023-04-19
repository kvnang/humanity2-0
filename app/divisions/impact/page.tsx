import Image from "next/image";
import impactTitle from "./impact.svg";
import { TitleLine } from "@/components/TitleLine";
import { FramedImage } from "@/components/FramedImage";
import impactIntroImage from "@/assets/images/impact-intro.jpg";
import { ScrollFade } from "@/components/ScrollFade";
import { ButtonLink } from "@/components/Button";
import { NumberedList } from "@/components/NumberedList";
import { Hallmark } from "./Hallmark";
import hallmarkImage1 from "@/assets/images/impact/hallmark-1.jpg";
import hallmarkImage2 from "@/assets/images/impact/hallmark-2.jpg";
import hallmarkImage3 from "@/assets/images/impact/hallmark-3.jpg";
import { Subscribe } from "@/components/Subscribe";

const organizations = [
  "Google",
  "Salesforce",
  "NBCUniversal",
  "Cisco",
  "OECD",
  "Dell",
  "HP",
  "Pathstone",
  "Harvard T.H. Chan School of Public Health",
  "Volkswagen AG",
  "Enel",
  "Patagonia",
  "TIM",
  "Edelman",
  "World Economic Forum",
  "University of Oxford",
  "ING",
  "Novo Nordisk",
  "JLL",
  "Massachusetts Institute of Technology (MIT)",
  "Philips",
  "Virgin",
  "IKEA Group",
  "Accenture",
  "The Wharton School, The University of Pennsylvania",
  "KPMG",
  "HSBC",
  "The Coca-Cola Company",
  "CNN",
  "Union Bank of Switzerland (UBS)",
  "Harvard Business School",
  "Barclays",
  "Inc. magazine and Inc.com",
  "The Wall Street Journal",
  "NASA",
  "Mayo Clinic",
  "Palantir",
  "LinkedIn",
  "The Economist",
  "PwC",
  "Wells Fargo",
  "IBM",
  "Noovle (TIM Italia)",
  "RAI",
  "Gallup",
  "Learn Capital",
  "Delos",
  "John Templeton Foundation",
  "Templeton World Charity Foundation",
  "Center for Humane Technology",
  "Ford Foundation",
  "University of Notre Dame",
  "Catholic University of America",
  "Pontifical Lateran University",
  "Pontifical University of Saint Thomas Aquinas",
  "Harvard Medical School",
  "Santa Clara University",
  "Harvard T.H. Chan School of Public Health",
  "Harvard Business School",
  "University of Oxford",
  "Massachusetts Institute of Technology (MIT)",
  "University of Pennsylvania",
  "The Wharton School, The University of Pennsylvania",
  "Columbia Medical School",
  "Institute of Electrical and Electronics Engineers (IEEE)",
  "United Nations Foundation",
  "Forbes Impact",
  "World Bank Group - Connect4Climate",
  "The B Team",
  "Union of International Superiors General (UISG)",
  "Pontifical Council for Interreligious Dialogue",
  "Caritas Internationalis",
  "Dicastery for the Promotion of Integral Human Development (Holy See)",
  "Fetzer Institute",
  "Center for Positive Psychology, University of Pennsylvania",
];

const goals = [
  {
    title: "Advance towards a Holistic Vision of Flourishing",
    text: "Imagine and pursue an understanding of human flourishing that incorporates all elements of human life, consciousness, and spirituality. ",
  },
  {
    title: "Uphold Human Dignity",
    text: "Strive for every individual to be treated with respect, honoring their fundamental human dignity.",
  },
  {
    title: "Develop Virtuous Technologies",
    text: "Design, develop and deploy technologies that enable human flourishing in harmony with nature.",
  },
  {
    title: "Foster Human Solidarity",
    text: "Encourage strong social connections, unity and understanding among people to create an environment conducive to collective flourishing.",
  },
  {
    title: "Promote Good Governance and Justice",
    text: "Advocate for the responsible and just use of power to uphold human rights, empower local communities, and serve the common good.",
  },
  {
    title: "Support Health & Wellness",
    text: "Ensure access to essential resources such as nutrition, healthy environments, education, and training for a healthy lifestyle and overall well-being.",
  },
  {
    title: "Champion Environmental Stewardship",
    text: "Advocate for sustainable human development that preserves and respects the natural environment and deepens our ecological understandings. ",
  },
  {
    title: "Advance Education",
    text: "Enable access to quality education for all and promote the exploration of knowledge and wisdom that facilitates human flourishing.",
  },
  {
    title: "Drive Economic Development",
    text: "Work towards a fair and equitable economic system that serves the  flourishing of individuals, families, and communities. ",
  },
  {
    title: "Develop Infrastructure",
    text: "Pursue the establishment and maintenance of global infrastructure that enables the highest possible levels of human flourishing.",
  },
];

export default function ImpactPage() {
  return (
    <main>
      <section className="pt-page pb-section">
        <div className="container">
          <h1 className="max-w-full w-52 mb-[0.75em] lg:w-60">
            <Image
              src={impactTitle}
              alt="Impact"
              className="w-auto h-10"
              priority
            />
          </h1>
          <div className="prose">
            <p>
              Humanity 2.0 Impact translates human flourishing insight,
              partnerships, and resources into impact in the world. Its mission
              is simple, source ways to remove impediments to human flourishing
              and then seed and scale them sustainably.
            </p>
          </div>
        </div>
      </section>
      <section className="py-section bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4 gap-y-8 mb-10 lg:mb-16 last:mb-0">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="mb-[1em]">
                <TitleLine>Overview</TitleLine>
              </h2>
              <div className="prose">
                <h3 className="h6">
                  At the Humanity 2.0 Foundation, we envision a world where
                  everyone has the opportunity to flourish together in harmony
                  with all life on Earth.
                </h3>
                <p>
                  We understand that achieving this goal requires the
                  collaboration of diverse minds, hearts, and resources from
                  every corner of the globe.
                </p>
                <p>
                  Our secular, non-profit organization is dedicated to bridging
                  the gap between the public, private, and faith-based sectors,
                  fostering partnerships that drive transformative change for
                  the benefit of all.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 -order-1 lg:order-none">
              <div className="lg:-mr-24 3xl:mr-0">
                <FramedImage reverse>
                  <Image src={impactIntroImage} alt="" />
                </FramedImage>
              </div>
            </div>
          </div>
          <div>
            <h3 className="h4 mb-[1em]">Hallmarks of our impact approach:</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
              <Hallmark
                index={0}
                image={hallmarkImage1}
                title="Cross-Sector Collaboration"
                text="We break down traditional silos between the public, private, and faith-based sectors, cultivating partnerships that fuel innovative thinking and inspire new approaches to complex challenges. By bringing together diverse perspectives, we catalyze transformative change and accelerate progress towards a more just and equitable world."
              />
              <Hallmark
                index={1}
                image={hallmarkImage2}
                title="Sourcing Innovative Solutions"
                text="Humanity 2.0 is committed to identifying and supporting cutting-edge solutions with the potential to revolutionize the way we approach the most pressing issues of our time. Through our innovation platform, we connect problem solvers with the resources, mentorship, and networks they need to bring their ideas to life and scale their impact."
              />
              <Hallmark
                index={0}
                image={hallmarkImage3}
                title="Scaling for Success"
                text="Our work doesn't stop at identifying and sourcing breakthrough ideas. Humanity 2.0 is dedicated to helping these solutions reach their full potential by providing the resources and support necessary to scale their impact. From funding to technical assistance, we work closely with our partners to ensure they have the tools they need to create lasting change on a global scale."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-section">
        <div className="container">
          <h2 className="mb-[1em]">
            <TitleLine>Participating Organizations</TitleLine>
          </h2>
          <div className="relative">
            <div className="max-h-[400px] overflow-y-auto">
              <div className="grid md:grid-cols-3 gap-x-6 gap-y-2">
                {organizations.map((org) => (
                  <div key={`org-${org}`}>{org}</div>
                ))}
              </div>
              <ScrollFade />
            </div>
          </div>
        </div>
      </section>
      <section className="py-section bg-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12">
              <div className="max-w-prose">
                <h2 className="h1 mb-[0.75em]">
                  <TitleLine>Join Us</TitleLine>
                </h2>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <div className="max-w-prose">
                <div className="prose text-current mb-6">
                  <p>
                    Together, we can shape the future of humanity and build a
                    world where everyone has the opportunity to flourish. Become
                    a part of the Humanity 2.0 Foundation community and join us
                    in our quest to break down barriers, forge new partnerships,
                    and transform the world for the better.
                  </p>
                </div>
                <div className="flex justify-end">
                  <ButtonLink href="/contact">Contact Us</ButtonLink>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 mt-8 lg:mt-0">
              <div className="max-w-prose">
                <h5 className="mb-[1em]">Subscribe to Our Newsletter</h5>
                <Subscribe wrap />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-section bg-gray-100">
        <div className="container">
          <h2 className="mb-[1em]">
            <TitleLine>Our Goals</TitleLine>
          </h2>
          <div>
            <NumberedList.Group className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {goals.map((goal) => (
                <NumberedList.Item key={goal.title}>
                  <div className="prose">
                    <h3 className="h5">{goal.title}</h3>
                    <p>{goal.text}</p>
                  </div>
                </NumberedList.Item>
              ))}
            </NumberedList.Group>
          </div>
        </div>
      </section>
      <section className="py-section">
        <div className="container">
          <h2 className="mb-[1em]">
            <TitleLine>Our Impact</TitleLine>
          </h2>
          <p>We’ll have news to share with you soon. Stay tuned!</p>
        </div>
      </section>
    </main>
  );
}
