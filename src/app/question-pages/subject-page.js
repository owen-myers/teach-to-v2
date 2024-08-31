
import MathCalc from "../../../public/calculating_math_stuff.png";
import BehaviorIcon from "../../../public/Emotions icon.png";
import Image from "next/image";
import Spline from '@splinetool/react-spline/next';

const selectionStyling = "flex flex-col items-center justify-center p-12";
const clickableImageStyling = "transition-transform duration-300 ease-in-out hover:scale-105 hover:brightness-75";

export default function SubjectPage () {
    return (
        <div className="flex flex-row justify-center">
            <div className={selectionStyling}>
                <button>
                <Spline
                scene="https://prod.spline.design/gQ-ZHFQSMXNkG98Z/scene.splinecode"
                />
                </button>
                <h1 className="font-body p-4">Reading</h1>
            </div>
            <div className={selectionStyling}>
                <Image
                src={ MathCalc }
                width={100}
                height={100}
                alt="Examples of calculations representing math."
                className={clickableImageStyling}
                />
                <h1 className="font-body p-4">Math</h1>
            </div>
            <div className={selectionStyling}>
                <Image
                src={ BehaviorIcon }
                width={100}
                height={100}
                alt="A man with three emotions next to him representing behavior."
                className={clickableImageStyling}
                />
                <h1 className="font-body p-4">Behavior</h1>
            </div>
        </div>
    );
}