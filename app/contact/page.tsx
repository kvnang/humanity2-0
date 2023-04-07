export default function ContactPage() {
  return (
    <main>
      <section className="py-section">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              <h1>Contact Us</h1>
              <div className="my-8">
                <div className="w-24 max-w-full border-b-4 border-primary"></div>
              </div>
              <a href="mailto:info@humanity2-0.org" className="h6">
                info@humanity2-0.org
              </a>
            </div>
            <div className="col-span-12 lg:col-span-6">Form</div>
          </div>
        </div>
      </section>
    </main>
  );
}
