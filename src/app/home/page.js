import Link from "next/link"
import GenButton from "../components/generate-button"
// import Spline from '@splinetool/react-spline/next'


export default function Welcome() {

    return (
        <div className="bg-gradient-to-r from-yellow-100">
            <div className="flex flex-col justify-center items-center min-h-screen w-full">
                <h3 className="font-body text-lg">Welcome to</h3>
                <h1 className="font-title text-9xl pb-4 pt-14">TeachTo</h1>
                <h3 className="font-body text-lg">A fun IEP goal-writing helper</h3>
                <div className="p-16">
                    <Link href="/write">
                        <GenButton>Let's write a goal</GenButton>
                    </Link>
                </div>
            </div>
            {/* <Spline
                scene="https://prod.spline.design/gQ-ZHFQSMXNkG98Z/scene.splinecode"
            /> */}
        </div>
    )

}