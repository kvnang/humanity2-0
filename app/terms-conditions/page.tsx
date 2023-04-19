import { getMetadata } from "@/lib/metadata";
import TermsConditions from "./terms-conditions.mdx";

export const metadata = getMetadata({
  title: "Terms & Conditions",
  description: `These terms and conditions outline the rules and regulations for the use of the Humanity 2.0 website. By accessing this website we assume you accept these terms and conditions in full.`,
  pathname: "/terms-conditions",
});

export default function TCPage() {
  return (
    <main>
      <section className="pt-page pb-section container">
        <div className="prose">
          <TermsConditions />
        </div>
      </section>
    </main>
  );
}
