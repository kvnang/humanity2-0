"use client";

import { Tab } from "@headlessui/react";

const CONTENT = [
  {
    number: "01",
    title: "Rank impediments to human flourishing.",
    text: (
      <p>
        Humanity 2.0 not only works to identify and understand impediments to
        human flourishing, but also order them according to their severity and
        impact. This ensures we assign appropriate priority to the causes we
        champion and provides a roadmap for Humanity 2.0.
      </p>
    ),
  },
  {
    number: "02",
    title: "Search for the most promising solution.",
    text: (
      <p>
        Humanity 2.0 addresses one impediment at a time and searches for the
        optimal solution as opposed to dispersing capital/energies across
        multiple solutions. The search is undertaken in collaboration with
        cross-sector partners and is subject to a meticulous vetting process by
        leading minds and institutions prior to adoption.
      </p>
    ),
  },
  {
    number: "03",
    title: "Seed and scale sustainably.",
    text: (
      <>
        <p>This task consists of three steps:</p>
        <ol>
          <li>
            Humanity 2.0 commits to financially investing in the solution.
          </li>
          <li>
            To seek out stakeholders in governments, businesses, NGOs, and
            religious organizations who are aligned in tackling the respective
            impediment and investing in the solution.
          </li>
          <li>
            Humanity 2.0 sources and utilizes global distribution partners to
            ensure the solution reaches all those in need.
          </li>
        </ol>
      </>
    ),
  },
];

export function AboutTabs() {
  return (
    <div className="text-white">
      <Tab.Group>
        <div className="absolute top-0 right-0 -translate-y-full inline-block mr-10 md:mr-20 lg:mr-40">
          <div className="absolute w-screen bottom-0 left-6 border-t-4 border-primary translate-y-1/2"></div>
          <Tab.List className="flex items-center -mx-10 md:-mx-12 lg:-mx-24">
            {CONTENT.map((item) => (
              <Tab
                className="group mx-10 relative text-md p-4 md:mx-12 lg:mx-24 focus:outline-none"
                key={`about-tab-${item.number}`}
              >
                <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 w-4 h-4 rounded-full border-4 border-primary bg-gray-700 group-data-[headlessui-state=selected]:bg-primary group-focus:outline-2 group-focus:outline outline-offset-2" />
                <span>{item.number}</span>
              </Tab>
            ))}
          </Tab.List>
        </div>
        <Tab.Panels>
          {CONTENT.map((item) => (
            <Tab.Panel key={`about-tabpanel-${item.number}`}>
              <div className="grid grid-cols-12 gap-x-4">
                <div className="col-span-12 lg:col-span-5 2xl:col-span-6">
                  <div className="flex">
                    <div className="text-2xl text-primary font-heading w-[1.5em] shrink-0 leading-none mr-2">
                      {item.number}
                    </div>
                    <h3 className="mb-[1em]">{item.title}</h3>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6 lg:col-start-7 2xl:col-span-5 2xl:col-start-8">
                  <div className="flex">
                    <div className="shrink-0 text-2xl w-[1.5em] mr-2 hidden md:max-lg:block"></div>
                    <div className="prose text-white">{item.text}</div>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
