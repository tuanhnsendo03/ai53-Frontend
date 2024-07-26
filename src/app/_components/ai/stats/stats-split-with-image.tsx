import { AiComponentProps } from "../base/ai-component-props";
import ThemeOverlay from "../base/theme-overlay";
import StatsImage1 from "./stats-image-1.jpeg";
import Image from "next/image";

const stats = [
  { id: 1, name: "Creators on the platform", value: "8,000+" },
  { id: 2, name: "Flat platform fee", value: "3%" },
  { id: 3, name: "Uptime guarantee", value: "99.9%" },
  { id: 4, name: "Paid out to creators", value: "$70M" },
];

const DEFAULT_TRACK_RECORD_TITLE = "Our track record";
const DEFAULT_TRACK_RECORD_SUBTITLE =
  "Trusted by thousands of creators worldwide";
const DEFAULT_TRACK_RECORD_DESCRIPTION =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.";

export default function StatsSplitWithImage({
  theme,
  variables,
}: AiComponentProps) {
  return (
    <div className="relative">
      <Image
        className={`h-56 w-full ${
          theme === "dark" ? "bg-ai-card-dark" : "bg-ai-card-regular"
        } object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2`}
        src={StatsImage1}
        alt=""
      />
      <div className="relative isolate">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
              <h2
                className={`text-base font-semibold leading-8 ${
                  theme === "dark" ? "text-primary-500" : "text-primary-600"
                }`}
              >
                {variables?.["trackRecordTitle"] || DEFAULT_TRACK_RECORD_TITLE}
              </h2>
              <p
                className={`mt-2 text-3xl font-bold tracking-tight ${
                  theme === "dark"
                    ? "text-ai-title-dark"
                    : "text-ai-title-regular"
                } sm:text-4xl`}
              >
                {variables?.["trackRecordSubtitle"] ||
                  DEFAULT_TRACK_RECORD_SUBTITLE}
              </p>
              <p
                className={`mt-6 text-lg leading-8 ${
                  theme === "dark"
                    ? "text-ai-subtext-dark"
                    : "text-ai-subtext-regular"
                }`}
              >
                {variables?.["trackRecordDescription"] ||
                  DEFAULT_TRACK_RECORD_DESCRIPTION}
              </p>
              <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className={`flex flex-col gap-y-3 ${
                      theme === "dark"
                        ? "border-l border-ai-subtext-dark/[.2]"
                        : theme === "neo-brutal"
                          ? "border-2 border-ai-title-regular shadow-neo-brutal-xl-end rounded-md py-4"
                          : "border-l border-ai-subtext-regular/[.2]"
                    } pl-6`}
                  >
                    <dt
                      className={`text-sm leading-6 ${
                        theme === "dark"
                          ? "text-ai-subtext-dark"
                          : "text-ai-subtext-regular"
                      }`}
                    >
                      {stat.name}
                    </dt>
                    <dd
                      className={`order-first text-3xl font-semibold tracking-tight ${
                        theme === "dark"
                          ? "text-ai-title-dark"
                          : "text-ai-title-regular"
                      }`}
                    >
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        <ThemeOverlay theme={theme} />
      </div>
    </div>
  );
}
