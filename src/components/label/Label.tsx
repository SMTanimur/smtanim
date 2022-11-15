import classNames from "@utils/className";
import { LabelHTMLAttributes } from "react";


interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label = ({ htmlFor, className = "", children, ...props }: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={classNames("cursor-pointer", className)} {...props}>
      {children}
    </label>
  );
};

export default Label;
