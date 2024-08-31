import { useEffect } from "react";

const inputStyling = "p-4 w-full border-2 text-sm border-black rounded-lg resize-none bg-gray-200 font-body focus:outline-none focus:scale-105 focus:shadow-lg transform transition-transform duration-150";

const UserInput = ({ question, ...props }) => {
    return (
        <div className="p-4">
            <label className="block text-sm font-body p-2">{question}</label>
            <input 
            className={inputStyling}
            {...props}
            />
        </div>
    );
};

export default UserInput;