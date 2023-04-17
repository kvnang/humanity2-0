import Link from "next/link";
import { TitleLine } from "@/components/TitleLine";
import { InlineLink } from "@/components/Button";
import { Social } from "@/components/Social";

export function Footer() {
  return (
    <footer>
      <div className="bg-gray-100">
        <div className="container py-section">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:max-lg:col-span-10 md:max-lg:col-start-2">
              <div className="mb-6">
                <h2 className="h1">
                  <TitleLine>
                    <div className="max-w-lg">Be part of the Evolution.</div>
                  </TitleLine>
                </h2>
              </div>
              <div className="flex mb-6">
                <div className="flex flex-wrap -mx-6 -my-2">
                  <div className="px-6 py-2 flex items-center font-semibold">
                    <span>Washington, D.C.</span>
                    <span className="block h-4 w-0.5 bg-primary mx-3"></span>
                    <span>Rome</span>
                  </div>
                  <div className="px-6 py-2">
                    <InlineLink
                      href="mailto:info@humanity2-0.org"
                      className="inline-block font-semibold transition-colors"
                    >
                      info@humanity2-0.org
                    </InlineLink>
                  </div>
                </div>
              </div>
              <div>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="px-6 lg:px-10 py-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12">
              <ul className="flex flex-wrap -mx-2 lg:-mx-4 -my-1 text-sm">
                <li className="px-2 lg:px-4 py-1">
                  <Link
                    href="/privacy-policy"
                    className="text-white opacity-50 hover:opacity-100 focus:opacity-100 outline-offset-4 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="px-2 lg:px-4 py-1">
                  <Link
                    href="/cookie-policy"
                    className="text-white opacity-50 hover:opacity-100 focus:opacity-100 outline-offset-4 transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
                <li className="px-2 lg:px-4 py-1">
                  <Link
                    href="/terms-conditions"
                    className="text-white opacity-50 hover:opacity-100 focus:opacity-100 outline-offset-4 transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
