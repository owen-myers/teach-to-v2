import Link from 'next/link';

export default function TeachToLogo(){
    return (
        <div className="flex items-center border-2 border-white p-3 rounded-lg">
            <Link href="/">
                <img src="../TeachTo_Scribble.png" alt="Scribble" className="h-20 w-auto"/>
            </Link>
            <h2 className="text-2xl font-semibold">TeachTo</h2>
        </div>
    );
};