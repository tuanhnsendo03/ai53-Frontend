import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Button from "../base/Button";

const DEFAULT_HEADING = "Get notified when we’re launching.";
const DEFAULT_DESCRIPTION =
  "Reprehenderit ad esse et non officia in nulla. Id proident tempor incididunt nostrud nulla et culpa.";
const DEFAULT_BUTTON_TEXT = "Notify me";

export default function NewsletterCenteredCard({
  theme,
  variables,
}: AiComponentProps) {
  return (
    <div className={`py-16 sm:py-24`}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div
          className={`relative isolate overflow-hidden ${
            theme === "dark"
              ? "bg-ai-card-dark shadow-md"
              : theme === "neo-brutal"
              ? "bg-ai-background-regular border-2 border-ai-title-regular shadow-neo-brutal-xl-end"
              : "bg-ai-card-regular shadow-md"
          } px-6 py-24 sm:rounded-3xl sm:px-24 xl:py-32`}
        >
          <h2
            className={`mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight ${
              theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
            } sm:text-4xl`}
          >
            {variables?.["heading"] || DEFAULT_HEADING}
          </h2>
          <p
            className={`mx-auto mt-2 max-w-xl text-center text-lg leading-8 ${
              theme === "dark"
                ? "text-ai-subtext-dark"
                : "text-ai-subtext-regular"
            }`}
          >
            {variables?.["description"] || DEFAULT_DESCRIPTION}
          </p>
          <form className="mx-auto mt-10 flex max-w-md gap-x-4">
            <label htmlFor="email-address" className="sr-only">
              {variables?.["emailLabel"] || "Email address"}
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className={
                theme === "dark"
                  ? "min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                  : "min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-ai-title-regular shadow-sm ring-1 ring-inset ring-ai-subtext-regular/[.4] placeholder:text-ai-subtext-regular/[.5] focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              }
              placeholder="Enter your email"
            />
            <Button theme={theme}>
              {variables?.["buttonText"] || DEFAULT_BUTTON_TEXT}
            </Button>
          </form>
          <ThemeOverlay theme={theme} />
        </div>
      </div>
    </div>
  );
}
