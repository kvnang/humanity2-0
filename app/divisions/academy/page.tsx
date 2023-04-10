import Image from "next/image";
import academyTitle from "./academy.svg";
import { MegaphoneIcon } from "@heroicons/react/24/outline";

export default function AcademyPage() {
  return (
    <main>
      <section className="pt-page pb-section">
        <div className="container">
          <h1 className="max-w-full w-52 mb-[0.75em] lg:w-60">
            <Image src={academyTitle} alt="Academy" className="w-full h-auto" />
          </h1>
          <div className="prose">
            <p>
              The Academy is the education and formation division of Humanity
              2.0. Its overall mission is to accelerate human flourishing by
              developing educational and formation resources and training via
              our centers.
            </p>
          </div>
          <div className="mt-8">
            <div className="max-w-lg">
              <div className="w-full rounded-md shadow-lg bg-white p-4 flex">
                <div className="relative w-12 h-12 rounded-full shrink-0 mr-4 flex items-center justify-center overflow-hidden">
                  <div className="animate-pulse">
                    <div className="absolute inset-0 bg-primary opacity-20"></div>
                  </div>
                  <MegaphoneIcon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="h6 mb-1">Updates coming soon!</h2>
                  <p className="text-body-tint text-sm">
                    Please stay tuned as we prepare more content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
