import clsx from "clsx";
import { ComponentPropsWithRef, PropsWithChildren } from "react";

interface ButtonProps
  extends PropsWithChildren<ComponentPropsWithRef<"button">> {
  variant: "solid" | "link" | "block";
  aditionClasses?: string;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  const buttonVariants = {
    solid: "bg-new-cyan rounded-[45px] px-[22px] py-[8px] text-white font-bold",
    link: "font-bold text-text",
    block: "bg-new-cyan rounded-[8px] px-[22px] py-[8px] text-white font-bold",
  };

  return (
    <button
      className={clsx(buttonVariants[props.variant], props.aditionClasses)}
      {...props}
    >
      {children}
    </button>
  );
};
