import Image from "next/image";
import MountainClimber from "../../../public/climbing_mountain.png";

export default function ImprovementPage() {
    return (
        <div className="flex items-center p-12">
            {/* Text Box */}
            <div className="flex-grow flex items-center justify-start">
                <textarea
                className="w-11/12 h-full p-4 border-4 border-black rounded-lg resize-none bg-gray-200 shadow-lg font-body"
                placeholder="Write it here..."
                ></textarea>
            </div>

            {/* Image */}
            <div className="flex-grow flex items-center justify-end">
                <Image
                src={ MountainClimber }
                alt="A guy climbing a mountain."
                width={125}
                height={125}
                className="object-contain"
                />
            </div>
        </div>
    );
}