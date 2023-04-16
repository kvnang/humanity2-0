import PrivacyPolicy from "./privacy-policy.mdx";

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
