interface TextAnimationProps {
  children: React.ReactNode;
}

const TextAnimation = ({ children }: TextAnimationProps) => {
  return (
    <svg viewBox="0 0 900 100" className="text-animation">
      <symbol id="text-animation-symbol">
        <text textAnchor="middle" x="50%" y="50%" dy=".35em">
          {children}
        </text>
      </symbol>
      <use xlinkHref="#text-animation-symbol" className="text-animation-letter"></use>
      <use xlinkHref="#text-animation-symbol" className="text-animation-letter"></use>
      <use xlinkHref="#text-animation-symbol" className="text-animation-letter"></use>
      <use xlinkHref="#text-animation-symbol" className="text-animation-letter"></use>
      <use xlinkHref="#text-animation-symbol" className="text-animation-letter"></use>
    </svg>
  );
};

export default TextAnimation;
