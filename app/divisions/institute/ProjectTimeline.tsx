"use client";

import * as React from "react";
import { Tab } from "@headlessui/react";
import clsx from "clsx";

const TIMELINE = [
  {
    year: 2019,
    phases: [
      {
        name: "Phase 1",
        status: "Complete",
        month: "Jul",
        text: (
          <>
            <p>Phase 1 had the following objectives:</p>
            <ol>
              <li>
                Research what constitutes human flourishing for individuals and
                civilizations according to different paradigms.
              </li>
              <li>
                Research what constitutes impediments to human flourishing for
                individuals and civilizations (on the levels listed above),
                according to different paradigms.
              </li>
            </ol>
          </>
        ),
      },
      {
        name: "Phase 2",
        status: "Initiated",
        month: "Aug",
        text: (
          <p>
            Its primary purpose is to expand the research group to include new
            scholars and perspectives on the initial White Paper as well as
            explore the possibility of partnering with an academic institution
            towards the goal of producing a final version of the White Paper.
          </p>
        ),
      },
    ],
  },
  {
    year: 2020,
    phases: [
      {
        name: "Phase 3",
        status: "Initiated",
        month: "Mar",
        text: (
          <p>
            The purpose of Phase 3 is to study the critique materials and
            integrate important insights into Vs2 of the White Paper.
          </p>
        ),
      },
      {
        name: "Phase 4",
        status: "Initiated",
        month: "Jun",
        text: (
          <p>
            The purpose of Phase 4 is to validate the Human Flourishing
            Framework as outlined in the White Paper as well as the key
            impediments to human flourishing as stated through science and
            relevant data.
          </p>
        ),
      },
      {
        name: "Phase 5",
        status: "Initiated",
        month: "Nov",
        text: (
          <p>
            Integration of scientific/data insights into Vs3/final version of
            the White Paper and subsequent publication.
          </p>
        ),
      },
    ],
  },
];

export function ProjectTimeline() {
  return (
    <Tab.Group>
      <div className="flex flex-wrap">
        <Tab.List className="flex basis-full mb-6 md:flex-col md:basis-1/5 lg:basis-1/4 md:mb-0">
          {TIMELINE.map((t) => (
            <Tab
              key={t.year}
              className="text-left inline-flex items-center group mr-6 md:mb-4 last:mb-0 last:mr-0"
            >
              <span className="lg:basis-12 opacity-75 group-data-[headlessui-state=selected]:opacity-100">
                {t.year}
              </span>
              <div className="w-4 ml-2 shrink-0 lg:w-8 border-b-4 border-primary scale-x-0 group-data-[headlessui-state=selected]:scale-x-100 transition-transform origin-left"></div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="basis-full md:flex-1">
          {TIMELINE.map((t) => (
            <Tab.Panel key={`tabpanel-${t.year}`}>
              <div>
                <Tab.Group>
                  <Tab.Panels>
                    {t.phases.map((p) => (
                      <Tab.Panel key={`tabpanel-${p.name}`}>
                        <div className="prose text-white">
                          <h4 className="text-white">
                            {p.name} - {p.status}
                          </h4>
                          {p.text}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                  <div className="mt-8 md:ml-12 lg:mt-12 relative">
                    <div className="absolute bottom-0 left-6 border-b-4 border-primary w-screen"></div>
                    <Tab.List>
                      {t.phases.map((p) => (
                        <Tab
                          key={p.name}
                          className="group mr-6 lg:mr-12 last:mr-0"
                        >
                          {({ selected }) => (
                            <div className="relative pb-6 w-12 text-center">
                              <span className="h5 group-hover:text-primary transition-colors">
                                {p.month}
                              </span>
                              <div
                                className={clsx(
                                  `absolute w-4 h-4 bottom-0.5 left-1/2 -translate-x-1/2 translate-y-1/2 rounded-full border-4 border-primary transition-colors`,
                                  selected ? "bg-primary" : "bg-gray-900"
                                )}
                              ></div>
                            </div>
                          )}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                </Tab.Group>
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
}
