import CookiePolicy from "./cookie-policy.mdx";

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
