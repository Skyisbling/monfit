type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  return (
    <button
      className={`monfit-button ${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}