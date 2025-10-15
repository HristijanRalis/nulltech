interface NavButtonProps {
  label: string;
  sectionId: string;
  onClick: (id: string) => void;
  className?: string;
}

export const NavButton = ({
  label,
  sectionId,
  onClick,
  className = "",
}: NavButtonProps) => {
  return (
    <button className={className} onClick={() => onClick(sectionId)}>
      {label}
    </button>
  );
};
