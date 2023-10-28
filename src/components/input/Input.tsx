import classNames from "@utils/className";


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ name, className = "", ...props }: InputProps) => {
  return (
    <input
      id={name}
      name={name}
      className={classNames(
        "px-4 rounded-sm outline-none h-11 bg-transparent border border-slate-500 focus:border-[#8a3cff]",
        className
      )}
      {...props}
    />
  );
};

export default Input;
