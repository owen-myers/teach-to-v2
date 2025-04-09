interface GenButtonProps {
  children: any;
  onClick: any;
  customStyles: any;
  disabled?: boolean;
}

const GenButton = ({ children, onClick, customStyles, disabled }: GenButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${customStyles} py-2 px-4 rounded-md button-animation`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default GenButton; 