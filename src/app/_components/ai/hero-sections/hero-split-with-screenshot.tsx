import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import Button from "../base/Button";
import LinkButton from "../base/LinkButton";
import ProjectAppScreenshot from "./project-app-screenshot.png";
import Image from "next/image";

const DEFAULT_TITLE = "Deploy to the cloud with confidence";
const DEFAULT_SUBTITLE =
  "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure\n" +
  "                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam\n" +
  "                  occaecat fugiat aliqua.";
const DEFAULT_BUTTON_TEXT = "Get started";
const DEFAULT_LINK_TEXT = "Learn more";

export default function HeroSplitWithScreenshot({
  theme,
  variables,
}: AiComponentProps) {
  return (
    <div className={`relative isolate overflow-hidden`}>
      <div className="lg:grid grid-cols-2">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1
              className={`mt-10 text-4xl font-bold tracking-tight ${
                theme === "dark"
                  ? "text-ai-title-dark"
                  : "text-ai-title-regular"
              } sm:text-6xl`}
            >
              {variables?.["title"] || DEFAULT_TITLE}
            </h1>
            <p
              className={`mt-6 text-lg leading-8 ${
                theme === "dark"
                  ? "text-ai-subtext-dark"
                  : "text-ai-subtext-regular"
              }`}
            >
              {variables?.["subtitle"] ?? DEFAULT_SUBTITLE}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button theme={theme}>
                {variables?.["buttonText"] || DEFAULT_BUTTON_TEXT}
              </Button>
              <LinkButton theme={theme}>
                {variables?.["linkText"] || DEFAULT_LINK_TEXT}
              </LinkButton>
            </div>
          </div>
        </div>
        <div
          className={`${
            theme === "neo-brutal" ? "bg-ai-secondary/[.3]" : ""
          } px-6 pb-24 pt-10 sm:pb-32 lg:px-8 lg:py-40`}
        >
          <div
            className={`mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32 ${
              theme === "neo-brutal" ? "shadow-neo-brutal" : ""
            }`}
          >
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div
                className={`-m-2 rounded-xl p-2 lg:-m-4 lg:rounded-2xl lg:p-4`}
              >
                <Image
                  src={ProjectAppScreenshot}
                  alt="App screenshot"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThemeOverlay theme={theme} />
    </div>
  );
}
