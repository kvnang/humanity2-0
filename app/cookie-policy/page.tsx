import { getMetadata } from "@/lib/metadata";
import CookiePolicy from "./cookie-policy.mdx";
import { type ResolvingMetadata } from "next";

export async function generateMetadata(_: any, parent: ResolvingMetadata) {
  return getMetadata(
    {
      title: "Cookie Policy",
      description:
        "This Cookie Policy explains how we use cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.",
      pathname: "/cookie-policy",
    },
    await parent
  );
}

export default function Page() {
  return (
    <main>
      <section className="pt-page pb-section container">
        <div className="prose">
          <CookiePolicy />
        </div>
      </section>
    </main>
  );
}
