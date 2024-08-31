
export default function ClearButton({ children, onClick }) {
    
    return (
        <div className="p-4">
            <p
            className="text-gray-700 hover:text-red-500 font-body transition-colors duration-200 cursor-pointer"
            onClick={onClick}
            >
            {children}
            </p>
        </div>
    )
};