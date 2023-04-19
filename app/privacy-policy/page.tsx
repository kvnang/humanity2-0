import { getMetadata } from "@/lib/metadata";
import PrivacyPolicy from "./privacy-policy.mdx";

export const metadata = getMetadata({
  title: "Privacy Policy",
  description: `Learn about our privacy policy and how we use your data.`,
  pathname: "/privacy-policy",
});

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
