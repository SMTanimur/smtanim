import classNames from "@utils/className";
import { HTMLAttributes } from "react";

interface DescProps extends HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const Desc = ({ children, className = "" }: DescProps) => {
  return <p className={classNames("text-base opacity-[72] text-white", className)}>{children}</p>;
};

export default Desc;
