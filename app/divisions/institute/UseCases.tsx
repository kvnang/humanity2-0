"use client";

import * as React from "react";
import { NumberedList } from "@/components/NumberedList";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

const USE_CASES = [
  {
    title: "International Development",
    text: (
      <>
        <p>
          A country in the developing world has been struggling to provide basic
          social services to its citizens since a destructive civil war. With
          the war’s peaceful resolution, the President approaches business and
          political leaders to help her rebuild her country. As she rebuilds,
          she is looking for new, more holistic models of economic development
          that go beyond traditional measures like gross domestic product (GDP).
        </p>
        <p>Her questions:</p>
        <ul>
          <li>
            How does she go about evaluating comprehensively the State’s current
            ability to provide an environment in which its citizens may
            flourish?
          </li>
          <li>
            How does she give her country a vision of an economy that leads to
            optimal human flourishing?
          </li>
          <li>
            How does she determine the critical areas in the country in need of
            resources and human expertise in order to accelerate flourishing?
          </li>
          <li>
            How does the government educate the citizenry and engage them in how
            to build a civilization in which they may flourish?
          </li>
          <li>
            How can the government understand in what areas they are capable of
            addressing impediments to human flourishing and in what areas they
            will need external partnerships from NGOs, businesses, and the faith
            sector to rebuild local capabilities and expertise?
          </li>
          <li>
            How does the government discern what organizations and problem areas
            are most in need of immediate intervention and which are not?
          </li>
        </ul>
        <p>
          Humanity 2.0’s Human Flourishing Framework would be a tool for
          addressing all of these important questions, aligning her cabinet and
          building partnerships with international actors to rebuild her
          country.
        </p>
      </>
    ),
  },
  {
    title: "International Trade",
    text: (
      <p>
        A government leader works for a trade ministry of a government and is
        responsible for helping his country’s international impact businesses
        find new opportunities for growth in foreign countries. To this end, the
        trade ministry leader analyzes countries using Humanity 2.0’s Human
        Flourishing Framework to determine the state of human flourishing within
        them. He then identifies the key impediments to human flourishing
        afflicting them. Once grasping these impediments, he looks at the
        portfolio of impact companies his country has to offer and then
        facilitates introductions between the impact companies and the
        respective countries in need of their services. By doing so, the leader
        advances the economic prospects of his own country’s businesses, while
        at the same time helps foriegn countries promote the flourishing of
        their citizenry.
      </p>
    ),
  },
  {
    title: "Finance / Investing",
    text: (
      <p>
        An analyst works for a prominent venture capital fund and is charged
        with identifying new market opportunities. The analyst was looking for a
        new tool in order to provide insight on unmet market needs and came
        across Humanity 2.0’s Human Flourishing Framework. Utilizing the
        Framework, the analyst was able to apply it to a particular region of
        his country and identify an impediment to human flourishing that was not
        being addressed by state or business actors. The analyst searched and
        found a startup that was doing groundbreaking work in addressing this
        particular impediment and recommended it to the partners. The VC fund
        partners decided to invest in said startup and facilitated an
        introduction to local leaders in the region in need, who openly embraced
        the promising solution, given the scientific and philosophical
        justifications provided by the Framework, and agreed to both help pilot
        and scale (if successful) the solution in their region. In so doing, the
        VC utilized the Human Flourishing Framework to identify a market
        opportunity; identify a company that could address the opportunity; and
        convince the beneficiary of both the opportunity and potential means to
        partner for impact.
      </p>
    ),
  },
  {
    title: "Think Tanks and Policy Research",
    text: (
      <p>
        A policy researcher with a focus on democratic legitimacy works for a
        think tank studying growing political apathy and voter
        disenfranchisement. Political leaders are interested in using the think
        tank’s research to help ensure their parties defeat of growing
        extremist, anti-democratic parties in the next electoral season. Polling
        and interview data indicates that the underlying feeling of voters is
        that the established parties are not discussing or addressing issues
        that really matter to the citizenry. The policy researcher decided to
        use the Human Flourishing Framework to analyze in which areas the state
        is underdelivering in services critical to advancing human flourishing.
        With this research, the researcher analyzed various party policy agendas
        and party campaign narratives to identify to what extent they are
        addressing these impediments to human flourishing. The analysis revealed
        a significant discrepancy between the established parties campaign
        priorities and what the citizenry needed to flourish. The think tank
        shared this research with grass roots and civic groups to promote
        policies that lead to political flourishing. Based on this new public
        awareness and support, the established parties developed new policies
        necessary for addressing these impediments to human flourishing,
        adjusted their campaign narratives, accordingly regained legitimacy and
        defeated anti-democratic parties in the subsequent electoral season.
      </p>
    ),
  },
  {
    title: "Health and Wellbeing",
    text: (
      <p>
        A university researcher was asked by the local government to determine
        why rates of depression and suicide have been increasing amoungst
        millennials. Using the Human Flourishing Framework the researcher was
        able to devise a number of analytic tools to review existing data
        captured on the demographic. What became clear is that there was very
        little data being captured on key determinants of human flourishing
        amongst this demographic. This insight was used to develop new
        quantitative and qualitative tools to capture quality data on these key
        determinants of flourishing. This new data provided a more comprehensive
        insight into what areas millennials ability to flourish was being
        impeded. The local government was then able to develop programs and
        policies to address these impediments to human flourishing and
        significantly reduce rates of depression and suicide among the target
        population.
      </p>
    ),
  },
  {
    title: "City Planning",
    text: (
      <p>
        An architect with urban planning expertise had been hired by the local
        government to design a ’city of the future’, which would serve as a
        model for subsequent city planning efforts. The government’s key
        directive was that the plan must be holistic and account for all
        conceivable dimensions of the health and wellness of the community. The
        architect had been studying the Human Flourishing Framework and decided
        it would be an idea tool for this city planning project given it’s
        breadth and scientific and philosophical underpinnings. Using the
        Framework, the architect was able to design a city plan that uniquely
        integrated flourishing dimensions that set one’s design apart from
        competing plans. Given this, the architects city plan was chosen by the
        government, improved community well-being and had long range impacts on
        subsequent city planning efforts nationally.
      </p>
    ),
  },
  {
    title: "Space Travel & Colonization",
    text: (
      <p>
        A medical doctor with space travel expertise was hired by the European
        Space Agency (ESA) to prepare a report on the requirements for human
        flourishing in special contexts like prolonged space travel or planetary
        colonization. Given the unique stresses of space travel and colonization
        on human health and wellbeing, the ESA wanted to ensure that every
        advantage to thrive is afforded to these persons. Given that the Human
        Flourishing Framework is based on insights spanning millennia and has
        been validated by modern science, it was the ideal tool to ensure that
        no critical aspects of human flourishing were overlooked in the report.
        The final report was able to identify a number of potential impediments
        to human flourishing that would have significantly affected the
        astronauts and colonists and so put their missions at risk. This insight
        allowed the medical doctor and the ESA to design a number of solutions
        that would address these impediments and therefore provide the
        astronauts and colonists greater confidence that they will thrive in
        this new frontier.
      </p>
    ),
  },
];

function UseCase({
  useCase,
}: {
  useCase: {
    title: string;
    text: React.ReactNode;
  };
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <NumberedList.Item
      key={useCase.title}
      className="before:!text-base before:!leading-normal before:!w-[1em]"
    >
      <button
        type="button"
        className="group h6 outline-offset-4 rounded-md text-left"
        onClick={() => setIsOpen(true)}
      >
        <span className="whitespace-nowrap">
          <span className="whitespace-normal">{useCase.title}</span>
          <InformationCircleIcon className="inline align-middle w-5 h-5 ml-2 text-body-tint group-hover:text-pink transition-colors" />
        </span>
      </button>
      <Transition show={isOpen} as={React.Fragment}>
        <Dialog
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 flex items-center justify-center"
        >
          <TransitionChild
            as={React.Fragment}
            enter="ease-out duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-bg-8/10 fixed inset-0 z-10 backdrop-blur-md will-change-auto transition-opacity" />
          </TransitionChild>
          <TransitionChild
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="absolute w-full max-w-3xl z-10 max-h-[80vh] flex">
              <button
                type="button"
                className="absolute top-2 right-2 w-12 h-12 flex items-center justify-center rounded-full transition-colors hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
              <div className="absolute top-0 left-0 w-full h-full bg-primary -translate-x-4 -translate-y-4 -z-10"></div>
              <div className="w-full flex flex-col p-6 lg:p-8 bg-white shadow-md">
                <DialogTitle as="h3" className="mb-[1em]">
                  {useCase.title}
                </DialogTitle>
                <div className="flex-1 overflow-y-auto">
                  <div className="prose">{useCase.text}</div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </NumberedList.Item>
  );
}

export function UseCases() {
  return (
    <NumberedList.Group className="grid lg:grid-cols-2 gap-4">
      {USE_CASES.map((useCase) => (
        <UseCase key={useCase.title} useCase={useCase} />
      ))}
    </NumberedList.Group>
  );
}
