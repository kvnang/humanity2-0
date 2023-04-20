import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main>
      <section className="pt-page pb-section">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="text-center">
              <div className="mb-2 flex justify-center">
                <div className="inline-block text-sm font-bold font-mono px-2 py-1 bg-primary rounded-md">
                  404
                </div>
              </div>
              <h1 className="h2 mb-[0.75em]">This page does not exist</h1>
              <div className="mb-6">
                <div className="prose">
                  Sorry, we couldn’t find the page you’re looking for.
                </div>
              </div>
              <div className="flex justify-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-semibold font-heading group"
                >
                  <ArrowLeftIcon className="w-4 h-4 mr-1 shrink-0 group-hover:-translate-x-1 transition-transform" />
                  <span>Back to Home</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
