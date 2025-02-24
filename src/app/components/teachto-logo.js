import Link from 'next/link';

export default function TeachToLogo() {
    return (
        <div className="flex items-center p-8 rounded-lg">
            <Link href="/">
                <h2 className="text-2xl font-lora">TeachTo</h2>
                <p className="font-karla text-sm text-purple-600">(Beta)</p>
            </Link>
        </div>
    );
};