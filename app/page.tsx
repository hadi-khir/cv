import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen m-8 flex flex-col items-center bg-sky-50">

      {/* header section */}
      <header className="sticky top-0 left-0 w-full z-10 flex justify-between p-4">
        <button className="text-gray-800 dark:text-white">menu</button>
        <button className="text-gray-800 dark:text-white">github</button>
      </header>

      {/* hero section */}
      <main className="flex flex-col items-center text-center">
        <div className="mt-36 rounded-full w-64 h-64 overflow-hidden">
          <Image
            src='/profile.jpeg'
            alt='Profile Picture'
            width={256}
            height={256}
            className="object-cover"
          />
        </div>
        <div className="mt-8 w-1/2">
          <h1 className="text-3xl font-bold">
            Hey, it's me, Hadi! <span className="animate-wave origin-bottom-right text-3xl">👋</span>
          </h1>
          <p className="mt-4 text-xl font-semibold">
            I'm a fullstack engineer focused on building beautiful interfaces and experiences. I've helped companies such as <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://www.sap.com'>SAP</Link>, and <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://www.maxar.com'>Maxar</Link> to build high quality, resilient, cloud-native systems that have served hundreds of thousands of users!
          </p>
        </div>
      </main>
    </div>
  );
}
