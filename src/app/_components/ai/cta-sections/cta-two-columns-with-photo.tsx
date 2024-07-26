import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { AiComponentProps } from "../base/ai-component-props";
import CtaImagePeople from "./cta-image-people.jpeg";
import Image from "next/image";

const benefits = [
  "Competitive salaries",
  "Flexible work hours",
  "30 days of paid vacation",
  "Annual team retreats",
  "Benefits for you and your family",
  "A great work environment",
];

const DEFAULT_DESCRIPTION =
  "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.";

export default function CtaTwoColumnsWithPhoto({
  theme,
  variables,
}: AiComponentProps) {
  return (
    <div className={`py-24 sm:py-32`}>
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div
            className={`mx-auto flex max-w-2xl flex-col gap-16 ${
              theme === "gradient"
                ? "bg-gradient-to-b from-ai-secondary to-[#9089fc20]"
                : theme === "dark"
                  ? "bg-ai-card-dark"
                  : theme === "neo-brutal"
                    ? "bg-primary-600/[.20] border-2 border-ai-title-regular shadow-neo-brutal-xl-end"
                    : "bg-ai-card-regular"
            } px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20`}
          >
            <Image
              className={`h-96 w-full flex-none rounded-2xl object-cover ${
                theme === "neo-brutal"
                  ? "border-2 border-ai-title-regular shadow-neo-brutal-lg-end"
                  : "shadow-xl"
              } lg:aspect-square lg:h-auto lg:max-w-sm`}
              src={CtaImagePeople}
              alt=""
            />
            <div className="w-full flex-auto">
              <h2
                className={`text-3xl font-bold tracking-tight ${
                  theme === "dark"
                    ? "text-ai-title-dark"
                    : "text-ai-title-regular"
                } sm:text-4xl`}
              >
                Join our team
              </h2>
              <p
                className={`mt-6 text-lg leading-8 ${
                  theme === "dark"
                    ? "text-ai-subtext-dark"
                    : "text-ai-subtext-regular"
                }`}
              >
                {variables?.["description"] || DEFAULT_DESCRIPTION}
              </p>
              <ul
                role="list"
                className={`mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 ${
                  theme === "dark"
                    ? "text-ai-subtext-dark"
                    : "text-ai-subtext-regular"
                } sm:grid-cols-2`}
              >
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-x-3">
                    <CheckCircleIcon
                      className="h-7 w-5 flex-none"
                      aria-hidden="true"
                    />
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex">
                <a
                  href="#"
                  className={`text-sm font-semibold leading-6 ${
                    theme === "dark" ? "text-primary-400" : "text-primary-600"
                  }`}
                >
                  See our job postings <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
