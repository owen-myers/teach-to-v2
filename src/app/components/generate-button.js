
const GenButton = ({ children, onClick }) => {
    return (
        <div className="p-4">
            <button
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-5 rounded-xl"
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};

export default GenButton;