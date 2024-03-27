
const GenButton = ({ children, onClick }) => {
    return (
        <button
            className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mr-4"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default GenButton;