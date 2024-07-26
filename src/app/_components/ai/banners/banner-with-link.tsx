import { XMarkIcon } from "@heroicons/react/20/solid";
import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

const DEFAULT_EVENT_DESCRIPTION = "GeneriCon 2024 is on June 7 – 9 in Denver. ";
const DEFAULT_LINK_TEXT = "Get your ticket";

export default function BannerWithLink({ theme, variables }: AiComponentProps) {
  return (
    <div
      className={`relative isolate flex items-center gap-x-6 overflow-hidden px-6 py-2.5 sm:px-3.5 sm:before:flex-1 ${
        theme === "dark"
          ? "bg-primary-400/[.1]"
          : theme === "gradient"
            ? "bg-gradient-to-r from-primary-600/[.1] to-ai-secondary"
            : "bg-primary-400/[.1]"
      }`}
    >
      <p
        className={`text-sm leading-6 ${
          theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
        }`}
      >
        {variables?.["eventDescription"] || DEFAULT_EVENT_DESCRIPTION}{" "}
        <a href="#" className="whitespace-nowrap font-semibold">
          {variables?.["linkText"] || DEFAULT_LINK_TEXT}&nbsp;
          <span aria-hidden="true">&rarr;</span>
        </a>
      </p>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Dismiss</span>
          <XMarkIcon
            className={`h-5 w-5 ${
              theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
            }`}
            aria-hidden="true"
          />
        </button>
      </div>
      <ThemeOverlay theme={theme} />
    </div>
  );
}
