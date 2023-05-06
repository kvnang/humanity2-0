import { getMetadata } from "@/lib/metadata";
import PrivacyPolicy from "./privacy-policy.mdx";
import { type ResolvingMetadata } from "next";

export async function generateMetadata(_: any, parent: ResolvingMetadata) {
  return getMetadata(
    {
      title: "Privacy Policy",
      description: `Learn about our privacy policy and how we use your data.`,
      pathname: "/privacy-policy",
    },
    await parent
  );
}
export default function Page() {
  return (
    <main>
      <section className="pt-page pb-section container">
        <div className="prose">
          <PrivacyPolicy />
        </div>
      </section>
    </main>
  );
}
