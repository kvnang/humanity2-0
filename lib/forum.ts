import * as forum2018 from "./forum2018";
import * as forum2019 from "./forum2019";
import * as forum2022 from "./forum2022";
import * as forum2024 from "./forum2024";

const forums = [
  { year: 2018, data: forum2018 },
  { year: 2019, data: forum2019 },
  { year: 2022, data: forum2022 },
  { year: 2024, data: forum2024 },
];

export async function getForums() {
  return forums;
}

export async function getForum(year: number) {
  const forum = forums.find((f) => f.year === year);
  if (!forum) {
    return null;
  }
  return forum.data;
}
