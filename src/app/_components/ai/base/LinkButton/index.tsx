import { FC, PropsWithChildren } from "react";
import { TemplateTheme } from "../ai-component-props";

interface LinkButtonProps extends PropsWithChildren {
  theme?: TemplateTheme;
}

const LinkButton: FC<LinkButtonProps> = ({ theme, children }) => {
  return (
    <a
      href="#"
      className={`text-sm font-semibold leading-6 ${
        theme === "dark" ? "text-ai-title-dark" : "text-ai-title-regular"
      }`}
    >
      {children} <span aria-hidden="true">→</span>
    </a>
  );
};

export default LinkButton;
