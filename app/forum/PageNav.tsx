"use client";

import Link from "next/link";
import * as React from "react";

export function PageNav() {
  return (
    <div>
      <nav className="inline-flex items-center rounded-full shadow-md bg-white">
        <div className="shrink-0 border-r border-gray-100 py-1 pl-6 pr-4 rounded-l-full">
          <span className="text-body-tint">Jump to:</span>
        </div>
        <ul className="flex items-center py-1 pl-4 pr-6">
          <li className="mr-4 lg:mr-6 last:mr-0">
            <Link
              href="#videos"
              className="text-body-tint hover:text-body transition-colors font-semibold"
            >
              Videos
            </Link>
          </li>
          <li className="mr-4 lg:mr-6 last:mr-0">
            <Link
              href="#photos"
              className="text-body-tint hover:text-body transition-colors font-semibold"
            >
              Photos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
