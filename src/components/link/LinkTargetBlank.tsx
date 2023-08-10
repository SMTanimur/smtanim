import { AnchorHTMLAttributes } from "react";

interface LinkTargetBlankProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

const LinkTargetBlank = ({ children, ...props }: LinkTargetBlankProps) => {
  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
};

export default LinkTargetBlank;
