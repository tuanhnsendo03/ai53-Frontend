import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Button from "../base/Button";
import LinkButton from "../base/LinkButton";

const DEFAULT_TITLE_PART1 = "Boost your productivity.";
const DEFAULT_TITLE_PART2 = "Start using our app today.";
const DEFAULT_DESCRIPTION =
  "Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.";
const DEFAULT_LINK_TEXT = "Get started";

export default function CtaSimpleCentered({
  theme,
  variables,
}: AiComponentProps) {
  return (
    <div>
      <div className="relative isolate px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className={`text-3xl font-bold tracking-tight ${
              theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
            } sm:text-4xl`}
          >
            {variables?.["titlePart1"] || DEFAULT_TITLE_PART1}
            <br />
            {variables?.["titlePart2"] || DEFAULT_TITLE_PART2}
          </h2>
          <p
            className={`mx-auto mt-6 max-w-xl text-lg leading-8 ${
              theme === "dark"
                ? "text-ai-subtext-dark"
                : "text-ai-subtext-regular"
            }`}
          >
            {variables?.["description"] || DEFAULT_DESCRIPTION}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button theme={theme}>Get started</Button>
            <LinkButton theme={theme}>
              {variables?.["linkText"] || DEFAULT_LINK_TEXT}
            </LinkButton>
          </div>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
