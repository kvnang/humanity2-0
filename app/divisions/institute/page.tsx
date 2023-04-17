import Image from "next/image";
import instituteTitle from "./institute.png";
import { TitleLine } from "@/components/TitleLine";
import instituteOverviewImage from "@/assets/images/institute-overview.jpg";
import instituteMetricsImage from "@/assets/images/institute-metrics.jpg";
import { FramedImage } from "@/components/FramedImage";
import { NumberedList } from "@/components/NumberedList";
import { Blockquote } from "./Blockquote";
import { TextAndQuote } from "./TextAndQuote";
import { UseCases } from "./UseCases";
import { ProjectTimeline } from "./ProjectTimeline";

const OBJECTIVES = [
  {
    number: "01",
    title: "Formulate the Vision",
    text: (
      <>
        <p>
          With the arrival of a truly global age, the human institutions that we
          have come to rely on are struggling to address global challenges and
          seize opportunities.
        </p>
        <p>
          We are motivated by a desire to align human interests in order to
          provide greater focus in our effort to accelerate human flourishing.
        </p>
        <p>
          To this end, Project Vision’s first task is to articulate a vision for
          the kind of global civilization we should be striving to effect.
          Without a clear vision and sense of mission, building the necessary
          solidarity and collective will required to transform civilization will
          be a near impossibility. Moreover, without a clear vision or picture
          of what kind of civilization we want to effect, we would be unable to
          credibly identify or agree on the impediments to realizing it.
        </p>
        <p>
          This ‘vision’ for humanity will be developed by a leading body of
          experts representing many scholarly, religious and philosophical
          perspectives.
        </p>
      </>
    ),
    quote: {
      text: "Vision without action is merely a dream. Action without vision just passes the time. Vision with action can change the world.",
      author: "Joel A. Barker",
    },
  },
  {
    number: "02",
    title: "Identify the Impediments",
    text: (
      <>
        <p>
          With the work of a new vision completed, the task then becomes one of
          identifying the impediments to realizing the vision and ensuring they
          are addressed in the most effective ways available.
        </p>
        <p>
          Humanity 2.0 first seeks to understand what the most significant
          impediments to human flourishing are so that we may more intelligently
          focus our efforts and resources. Ignoring this important work would be
          tantamount to thrusting a person into an arena with a hydra in which
          one endlessly strikes at its heads, but never succeeds in vanquishing
          it.
        </p>
        <p>
          We must strike at the underlying causes of civilizational stagnation,
          the heart, so to speak, if we are to succeed.
        </p>
        <p>
          A committee of philosophers, historians, and anthropologists will lead
          the effort of identifying the key impediments to human flourishing.
          Once their initial list of impediments is prepared, it will be handed
          off to a scientific committee that will analyze and validate their
          philosophical assertions by referencing available data and scientific
          insights.
        </p>
      </>
    ),
    quote: {
      text: "Do the hard jobs first. The easy jobs will take care of themselves.",
      author: "Dale Carnegie",
    },
  },
  {
    number: "03",
    title: "Triage the Impediments",
    text: (
      <>
        <p>
          To plan an effective strategy for addressing the most significant
          impediments to human flourishing, priority must be assigned to them.
          Currently, organizations and institutions work to identify and
          understand the world’s most important problems, but this is
          unfortunately where the work typically stops. Governments, NGOs,
          businesses, and individuals are then left with the responsibility of
          determining which problems to address and how. This results in
          diminished outcomes, as a plethora of approaches and a broad dispersal
          of resources are deployed. Humanity 2.0 seeks to know through both
          quantitative and qualitative analysis what the most significant
          impediments to human flourishing are so that we can focus our efforts
          and bring to bear sufficient resources to effectively address them.
          Moreover, this insight will be shared with the global community so we
          may collectively take action.
        </p>
        <p>
          Most global challenges that beset the world are simply too big for any
          one sector to solve; our focused, cross-sector, global strategy will
          allow us to change that.
        </p>
        <p>
          In addition, the global institutions and techno-economic
          infrastructures (financial markets, social media, etc.) needed to
          solve these complex challenges are losing legitimacy with the general
          public. Our thesis for this decline in legitimacy: these institutions
          and corporations are built on incomplete models of human flourishing.
          In addition, the centralization of power and wealth has created
          further divides between global leaders and local communities. Our aim
          is to use a collaborative process to restore this vital reservoir of
          trust so that institutions can enroll and coordinate collective action
          to tackle these impediments. The more complex the challenge to human
          flourishing, the greater the need to utilize the principles of
          enablement and empowerment:global leaders serving national leaders -
          serving local leaders - serving the relational prosperity of
          individuals.
        </p>
        <p>
          Triaging the impediments will provide Humanity 2.0 a clear priority of
          work moving forward. Moreover, this focus year to year will afford the
          Humanity 2.0 team the ability to be highly selective in the
          partnerships it leverages to ensure maximum impact.
        </p>
      </>
    ),
    quote: {
      text: "When you have too many top priorities, you effectively have no top priorities.",
      author: "Stephen Covey",
    },
  },
];

export default function InstitutePage() {
  return (
    <main>
      <section className="pt-page pb-section">
        <div className="container">
          <h1 className="max-w-full w-52 mb-[0.75em] lg:w-60">
            <Image
              src={instituteTitle}
              alt="Institute"
              className="w-full h-auto"
              priority
            />
          </h1>
          <div className="prose">
            <p>
              The Institute is the collective intelligence of Humanity 2.0. Its
              primary purpose is to inform and direct Humanity 2.0&apos;s
              efforts; specially those related to addressing impediments to
              human flourishing.
            </p>
            <p>
              Its secondary mission is to update the Human Flourishing Framework
              with new data and insights as they become available.
            </p>
          </div>
        </div>
      </section>
      <section className="py-section bg-gray-900">
        <div className="container">
          <h2 className="h1 text-white">
            <TitleLine>Project Vision</TitleLine>
          </h2>
        </div>
      </section>
      <section className="py-section bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4 mb-section">
            <div className="col-span-12 md:col-span-8 lg:col-span-6 mb-8 sm:mb-0">
              <div className="max-w-lg lg:max-w-2xl -mr-4 lg:-mr-8 2xl:-ml-12">
                <FramedImage>
                  <Image src={instituteOverviewImage} alt="" />
                </FramedImage>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 md:mt-16 lg:hidden">
              <h2 className="relative z-0 mb-[1em] sm:pt-6 md:-ml-6 lg:-ml-32 lg:pt-10">
                <div className="absolute top-0 left-0 border-b-4 border-body w-32 lg:w-40 -translate-x-20 hidden md:block" />
                <span>Overview</span>
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 md:mt-10 lg:mt-16">
              <h2 className="relative z-0 mb-[1em] sm:pt-6 md:-ml-6 lg:-ml-32 lg:pt-10 hidden lg:block">
                <div className="absolute top-0 left-0 border-b-4 border-body w-32 lg:w-40 -translate-x-20 hidden md:block" />
                <span>Overview</span>
              </h2>
              <div className="max-w-prose">
                <h3 className="h6">
                  Project Vision is a Humanity 2.0 effort specifically designed
                  to provide the roadmap needed in order to accelerate human
                  flourishing.
                </h3>
              </div>
            </div>
          </div>
          <div>
            <h3 className="h5 mb-[1.5em]">
              Project Vision has three objectives:
            </h3>
            <NumberedList.Group className="grid lg:grid-cols-3 gap-6 lg:gap-8">
              <NumberedList.Item>
                <div className="max-w-prose">
                  <p>
                    Formulate a common vision for humanity that communicates the
                    kind of human civilization we should be striving to build.
                  </p>
                </div>
              </NumberedList.Item>
              <NumberedList.Item>
                <div className="max-w-prose">
                  <p>
                    Identify the most significant impediments to realizing this
                    vision.
                  </p>
                </div>
              </NumberedList.Item>
              <NumberedList.Item>
                <div className="max-w-prose">
                  <p>
                    Triage these impediments in order to provide a roadmap for
                    action.
                  </p>
                </div>
              </NumberedList.Item>
            </NumberedList.Group>
          </div>
        </div>
      </section>
      {OBJECTIVES.map((objective) => (
        <section className="py-section odd:bg-gray-100" key={objective.title}>
          <div className="container">
            <h2 className="mb-[0.75em]">
              <TitleLine>
                Objective{" "}
                <span className="text-pink text-3xl ml-2 -mt-6 inline-block">
                  {objective.number}
                </span>
              </TitleLine>
            </h2>
            <h3 className="h5 mb-[1.5em]">{objective.title}</h3>
            <TextAndQuote text={objective.text} quote={objective.quote} />
          </div>
        </section>
      ))}
      <section className="py-section bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-12 md:col-span-8">
              <div className="md:-ml-10">
                <FramedImage>
                  <Image src={instituteMetricsImage} alt=""></Image>
                </FramedImage>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 md:mt-16">
              <h2 className="h1 relative z-0 md:-ml-28 md:pt-6 lg:-ml-20 lg:pt-10">
                <div className="absolute top-0 left-0 border-b-4 border-body w-32 lg:w-40 hidden md:block" />
                <span>Metrics and Data</span>
              </h2>
            </div>
            <div className="col-span-12">
              <div className="my-10">
                <Blockquote
                  text="It is a capital mistake to theorize before one has data."
                  author="Sherlock Holmes"
                />
              </div>
              <div className="prose">
                <p>
                  Aggregating data and developing unique metrics will be one of
                  the most significant contributions of Project Vision to
                  Humanity 2.0 and the wider world.
                </p>
                <p>
                  Identifying and triaging impediments to human flourishing will
                  require considerable amounts of data and the development of
                  unique metrics and methods to understand this data. The
                  Humanity 2.0 team will develop these metrics in collaboration
                  with our partners, and the needed data will be solicited from
                  institutes and organizations around the world.
                </p>
                <p>
                  The most significant output from Project Vision will be a
                  system for determining the most critical problems and a method
                  to assign priority to them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-section bg-gray-900 text-white">
        <div className="container">
          <h2 className="h1 mb-[0.75em]">Institutional Partners</h2>
          <TextAndQuote
            text={
              <>
                <p>
                  Humanity 2.0 plans to collaborate with a number of academic
                  and institutional partners to carry out the work of Project
                  Vision. Some of the resources that will be requested of our
                  partners include:
                </p>
                <ul>
                  <li>Subject matter experts</li>
                  <li>Data scientists</li>
                  <li>Access to information and raw data</li>
                  <li>Administrative support staff</li>
                  <li>Academic networks</li>
                </ul>
                <p>
                  In exchange for the valuable in-kind contributions of our
                  partners a work-sharing protocol will be developed so that the
                  advances made by Humanity 2.0 may benefit and enrich partners.
                  Moreover, our partners will be officially listed and
                  acknowledged on promotional materials and at Humanity 2.0
                  events.
                </p>
                <p>
                  Primary leadership and research administration of Project
                  Vision will be overseen by the Thomistic Institute, based at
                  the Pontifical University of Thomas Aquinas (Angelicum) in
                  Rome, Italy.
                </p>
              </>
            }
            quote={{
              text: "No one can whistle a symphony. It takes a whole orchestra to play it.",
              author: "H.E. Luccock",
            }}
          />
        </div>
      </section>
      <section className="py-section bg-gray-100">
        <div className="container">
          <div className="flex justify-end">
            <h2 className="h1 mb-[0.75em]">Project Legacy</h2>
          </div>
          <TextAndQuote
            text={
              <>
                <p>
                  The fruits of Project Vision will be many, but the most
                  important fruit is a clear vision of the kind of civilization
                  we humans should be striving collectively to create. We will
                  develop the Human Flourishing Framework as a set of analytical
                  and conceptual tools that will be used to ensure that humanity
                  can maintain sharp focus on tackling the impediments that keep
                  us from realizing this vision. In this way, the Human
                  Flourishing Framework keeps humanity on the straight and
                  shortest path to reaching our shared horizon.
                </p>
                <p>
                  In addition, the method for triaging impediments is a way of
                  ensuring we assign appropriate gravity to impediments and then
                  commit sufficient resources to overcoming them. Given
                  resources are increasingly becoming scarce, this insight into
                  how to optimize their use to ensure the greatest benefit to
                  human flourishing is vitally important.
                </p>
                <p>
                  When Project Vision is complete, the Humanity 2.0 Institute
                  will use the framework and data collected to determine year to
                  year what specific impediment to human flourishing poses the
                  greatest risk to advancing human flourishing and why. The
                  Humanity 2.0 Foundation will then source solutions to this
                  impediment with partners and then convene the human community
                  in order to facilitate a commitment to action to address said
                  impediment.
                </p>
                <p>
                  The Institute will also be constantly evaluating new data and
                  welcoming intellectual insight to further strengthen the
                  Framework and ensure it is relevant. In this way, as humanity
                  evolves, so to does the Framework and our understanding of how
                  best to realize our ambition of building a better world.
                </p>
              </>
            }
            quote={{
              text: "It isn’t all over; everything has not been invented; the human adventure is just beginning. ",
              author: "Gene Roddenberry",
            }}
            reverse
          />
        </div>
      </section>
      <section className="py-section">
        <div className="container">
          <div className="flex flex-wrap -mx-6">
            <h1 className="px-6 mb-[0.75em] basis-full lg:basis-auto mr-auto">
              Use Cases
            </h1>
            <div className="px-6">
              <UseCases />
            </div>
          </div>
        </div>
      </section>
      <section className="py-section bg-gray-900 text-white overflow-x-hidden">
        <div className="container">
          <h1 className="mb-[0.75em]">Project Timeline</h1>
          <ProjectTimeline />
        </div>
      </section>
    </main>
  );
}
