
const inputStyling = "bg-violet-100 p-4 w-full min-h-[108px] border text-sm font-karla border-violet-900 rounded-md";

const UserInput = ({ question, ...props }) => {
    return (
        <div>
            <textarea
            className={inputStyling}
            {...props}
            />
        </div>
    );
};

export default UserInput;