import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Button from "../base/Button";
import LinkButton from "../base/LinkButton";

const DEFAULT_TITLE_PART1 = "Ready to dive in?";
const DEFAULT_TITLE_PART2 = "Start your free trial today.";
const DEFAULT_LINK_TEXT1 = "Get started";
const DEFAULT_LINK_TEXT2 = "Learn more";

export default function CtaSimpleJustified({
  theme,
  variables,
}: AiComponentProps) {
  return (
    <div>
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <h2
            className={`text-3xl font-bold tracking-tight ${
              theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
            } sm:text-4xl`}
          >
            {variables?.["titlePart1"] || DEFAULT_TITLE_PART1}
            <br />
            {variables?.["titlePart2"] || DEFAULT_TITLE_PART2}
          </h2>
          <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
            <Button theme={theme}>
              {variables?.["linkText1"] || DEFAULT_LINK_TEXT1}
            </Button>
            <LinkButton theme={theme}>
              {variables?.["linkText2"] || DEFAULT_LINK_TEXT2}
            </LinkButton>
          </div>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
