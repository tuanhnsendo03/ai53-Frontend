import { AiComponentProps } from "../base/ai-component-props";
import Button from "../base/Button";
import LinkButton from "../base/LinkButton";
import AngledImageOnRight from "./angled-image-on-right.jpeg";
import Image from "next/image";

const DEFAULT_TITLE = "Deploy to the cloud with confidence";
const DEFAULT_SUBTITLE =
  "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure\n" +
  "                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam\n" +
  "                  occaecat fugiat aliqua.";
const DEFAULT_BUTTON_TEXT = "Get started";
const DEFAULT_LINK_TEXT = "Learn more";

export default function HeroWithAngledImageOnRight({
  theme,
  variables,
}: AiComponentProps) {
  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className={`absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform ${
                theme === "dark"
                  ? "fill-ai-background-dark"
                  : "fill-ai-background-regular"
              } lg:block`}
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>
            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1
                  className={`text-4xl font-bold tracking-tight ${
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
                  {variables?.["subtitle"] || DEFAULT_SUBTITLE}
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
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={AngledImageOnRight}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
