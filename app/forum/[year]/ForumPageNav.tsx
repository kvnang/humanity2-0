import { PageNav } from "@/components/PageNav";

const ANCHORS = [
  {
    id: "videos",
    label: "Videos",
  },
  {
    id: "photos",
    label: "Photos",
  },
  {
    id: "opening-address",
    label: "Opening Address",
  },
  {
    id: "topics",
    label: "Topics",
  },
  {
    id: "sponsors",
    label: "Sponsors",
  },
  {
    id: "participating-organizations",
    label: "Participating Organizations",
  },
  {
    id: "program",
    label: "Program",
  },
  {
    id: "join-the-forum",
    label: "Join the Forum",
  },
];

export function ForumPageNav() {
  return <PageNav anchors={ANCHORS} />;
}
