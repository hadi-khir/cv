import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <main className="flex flex-col items-center text-center mb-16">
            <div className="mt-16 rounded-full w-64 h-64 overflow-hidden">
                <Image
                    src="/profile.jpeg"
                    alt="Profile Picture"
                    width={256}
                    height={256}
                    className="object-cover"
                />
            </div>
            <div className="mt-8 w-3/4 md:w-1/2">
                <h1 className="text-3xl font-bold">
                    Hey, it&apos;s me, Hadi!{' '}
                    <span className="inline-block animate-wave text-3xl">👋</span>
                </h1>
                <p className="mt-4 text-xl font-semibold">
                    I&apos;m a fullstack engineer focused on building beautiful interfaces and experiences. I&apos;ve helped companies such as{' '}
                    <Link
                        className="underline text-blue-400 hover:text-blue-800 visited:text-purple-600"
                        target="_blank"
                        href="https://www.sap.com"
                    >
                        SAP
                    </Link>
                    , and{' '}
                    <Link
                        className="underline text-blue-400 hover:text-blue-800 visited:text-purple-600"
                        target="_blank"
                        href="https://www.maxar.com"
                    >
                        Maxar
                    </Link>{' '}
                    to build high quality, resilient, cloud-native systems that have served hundreds of thousands of users!
                </p>
            </div>
        </main>
    );
};

export default Hero;
