import classNames from "@utils/className";
import { HTMLAttributes } from "react";


interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {}

const FormGroup = ({ children, className = "" }: FormGroupProps) => {
  return <div className={classNames("flex flex-col mb-4 gap-y-1", className)}>{children}</div>;
};

export default FormGroup;
