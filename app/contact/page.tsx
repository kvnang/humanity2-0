import { TitleLine } from "@/components/TitleLine";
import { ContactForm } from "./ContactForm";

export default function ContactPage() {
  return (
    <main>
      <section className="py-section">
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-5">
              <h1 className="mb-[0.75em]">
                <TitleLine>Contact Us</TitleLine>
              </h1>
              <a href="mailto:info@humanity2-0.org" className="h6">
                info@humanity2-0.org
              </a>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
