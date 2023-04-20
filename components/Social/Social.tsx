import { FacebookSocialIcon, YouTubeSocialIcon } from "@/components/Icons";

export function Social() {
  return (
    <ul className="flex -m-3">
      <li className="m-1">
        <a
          href="https://www.facebook.com/sharedhorizon/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-auto h-12 p-2 flex items-center justify-center hover:text-pink rounded-md transition-colors"
          aria-label="Facebook"
        >
          <FacebookSocialIcon className="w-auto h-8" />
        </a>
      </li>
      <li className="m-1">
        <a
          href="https://www.youtube.com/channel/UCeVdRFZnkR-QEzvwiLTLV2w"
          target="_blank"
          rel="noopener noreferrer"
          className="w-auto h-12 p-2 flex items-center justify-center hover:text-pink rounded-md transition-colors"
          aria-label="YouTube"
        >
          <YouTubeSocialIcon className="w-auto h-8" />
        </a>
      </li>
    </ul>
  );
}
