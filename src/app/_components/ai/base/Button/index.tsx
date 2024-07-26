import { FC, PropsWithChildren } from "react";
import { TemplateTheme } from "../ai-component-props";

interface ButtonProps extends PropsWithChildren {
  theme?: TemplateTheme;
}

const Button: FC<ButtonProps> = ({ theme, children }) => {
  return (
    <a
      href="#"
      className={`inline-block rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white ${
        theme === "neo-brutal"
          ? "border-2 border-gray-900 shadow-neo-brutal"
          : "shadow-sm"
      } hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600`}
    >
      {children}
    </a>
  );
};

export default Button;
