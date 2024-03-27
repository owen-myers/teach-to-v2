
export default function ClearButton({ children, onClick }) {
    
    return (
        <button
        className="border-black border bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200"
        onClick={onClick}
    >
        {children}
    </button>
    )
};