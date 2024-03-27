import { useEffect } from "react";

const UserInput = ({ question, ...props }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium black">{question}</label>
            <input 
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            {...props}
            />
        </div>
    );
};

export default UserInput;