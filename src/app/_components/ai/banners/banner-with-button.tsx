import { XMarkIcon } from "@heroicons/react/20/solid";
import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";

const DEFAULT_EVENT_NAME = "GeneriCon 2024";
const DEFAULT_EVENT_DESCRIPTION =
  "Join us in Denver from June 7 – 9 to see what’s coming next.";
const DEFAULT_LINK_TEXT = "Register Now";

export default function BannerWithButton({
  theme,
  variables,
}: AiComponentProps) {
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
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p
          className={`text-sm leading-6 ${
            theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
          }`}
        >
          <strong className="font-semibold">
            {variables?.["eventName"] || DEFAULT_EVENT_NAME}
          </strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 inline h-0.5 w-0.5 fill-current"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          {variables?.["eventDescription"] || DEFAULT_EVENT_DESCRIPTION}
        </p>
        <a
          href="#"
          className={`flex-none rounded-full ${
            theme === "neo-brutal"
              ? "bg-primary-600 border-2 border-primary-950 shadow-neo-brutal text-white"
              : "border border-primary-600 text-primary-600 shadow-sm"
          } px-3.5 py-1 text-sm font-semibold hover:opacity-80`}
        >
          {variables?.["linkText"] || DEFAULT_LINK_TEXT}{" "}
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
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
