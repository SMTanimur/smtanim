import classNames from "@utils/className";


interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = ({ name, className = "", ...props }: TextAreaProps) => {
  return (
    <textarea
      id={name}
      name={name}
      className={classNames(
        "px-4 py-2 rounded-sm outline-none bg-transparent border border-slate-500 focus:border-[#8a3cff] resize-none overflow-hidden",
        className
      )}
      {...props}
    />
  );
};

export default TextArea;
