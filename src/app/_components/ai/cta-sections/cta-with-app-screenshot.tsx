import { AiComponentProps } from "../base/ai-component-props";
import Button from "../base/Button";
import LinkButton from "../base/LinkButton";
import DarkProjectAppScreenshot from "./dark-project-app-screenshot.png";
import Image from "next/image";

const DEFAULT_TITLE_PART1 = "Boost your productivity.";
const DEFAULT_TITLE_PART2 = "Start using our app today.";
const DEFAULT_DESCRIPTION =
  "Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.";
const DEFAULT_LINK_TEXT1 = "Get started";
const DEFAULT_LINK_TEXT2 = "Learn more";

export default function CtaWithAppScreenshot({
  theme,
  variables,
}: AiComponentProps) {
  return (
    <div>
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div
          className={`relative isolate overflow-hidden ${
            theme === "gradient"
              ? "bg-gradient-to-br from-ai-secondary to-[#9089fc40]"
              : theme === "dark"
                ? "bg-ai-card-dark"
                : theme === "neo-brutal"
                  ? "bg-ai-background-regular border-2 border-ai-title-regular shadow-neo-brutal-lg-start"
                  : "bg-ai-card-regular"
          } px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0`}
        >
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2
              className={`text-3xl font-bold tracking-tight ${
                theme === "dark"
                  ? "text-ai-title-dark"
                  : "text-ai-title-regular"
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
              <Button theme={theme}>
                {variables?.["linkText1"] || DEFAULT_LINK_TEXT1}
              </Button>
              <LinkButton theme={theme}>
                {variables?.["linkText2"] || DEFAULT_LINK_TEXT2}
              </LinkButton>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src={DarkProjectAppScreenshot}
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
