import Link from "next/link";
import { TitleLine } from "../TitleLine";

export function Footer() {
  return (
    <footer>
      <div className="bg-gray-100">
        <div className="container py-section">
          <div className="mb-6">
            <h2 className="h1">
              <TitleLine>
                <div className="max-w-lg">Be part of the Evolution.</div>
              </TitleLine>
            </h2>
          </div>
          <div className="flex md:ml-[4.5rem] lg:ml-0">
            <div className="flex flex-wrap -mx-6 -my-1">
              <div className="px-6 py-1 flex items-center font-semibold">
                <span>Washington, D.C.</span>
                <span className="block h-4 w-0.5 bg-primary mx-3"></span>
                <span>Rome</span>
              </div>
              <div className="px-6 py-1">
                <a
                  href="mailto:info@humanity2-0.org"
                  className="inline-block font-semibold transition-colors px-3 py-1.5 hover:bg-white focus:bg-white rounded-md"
                >
                  info@humanity2-0.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900">
        <div className="px-6 lg:px-10 py-6">
          <ul className="flex flex-wrap -mx-2 lg:-mx-4 -my-1 text-sm">
            <li className="px-2 lg:px-4 py-1">
              <Link
                href="/"
                className="text-white opacity-50 hover:opacity-100"
              >
                Privacy Policy
              </Link>
            </li>
            <li className="px-2 lg:px-4 py-1">
              <Link
                href="/"
                className="text-white opacity-50 hover:opacity-100"
              >
                Cookie Policy
              </Link>
            </li>
            <li className="px-2 lg:px-4 py-1">
              <Link
                href="/"
                className="text-white opacity-50 hover:opacity-100"
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
