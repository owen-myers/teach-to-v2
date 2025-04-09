const GenButton = ({ children, onClick, customStyles }) => {
    return (
            <button
                className={`py-3 px-5 rounded-md button-animation ${customStyles}`}
                onClick={onClick}
            >
                {children}
            </button>
    );
};

export default GenButton;