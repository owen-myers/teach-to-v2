import Link from 'next/link';

export default function TeachToLogo(){
    return (
        <div className="flex items-center border-2 border-white p-8 rounded-lg">
            <Link href="/">
                <h2 className="text-2xl font-semibold">TeachTo</h2>
            </Link>
        </div>
    );
};