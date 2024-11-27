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
            Hey, it's me, Hadi! <span className="animate-wave text-3xl">👋</span>
          </h1>
          <p className="mt-4 text-xl font-semibold">
            I'm a fullstack engineer focused on building beautiful interfaces and experiences. I've helped companies such as{" "}
            <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://www.sap.com'>SAP</Link>, and{" "} 
            <Link className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://www.maxar.com'>Maxar</Link> to build high quality, resilient, cloud-native systems that have served hundreds of thousands of users!
          </p>
        </div>
      </main>
      <section className="w-full mt-32 px-8 md:px-16 lg:px-32 grid grid-cols-[30%_70%]">
        <h2 className="text-blue-600 text-lg font-bold uppercase tracking-wider">
          Background
        </h2>
        <p className="mt-4 text-gray-800 leading-relaxed">
          I'm currently a Fullstack Engineer building scalable and resilient
          systems for the web. After completing my degree, I had the
          opportunity to work with amazing teams at{" "}
          <Link
            className="underline text-blue-600 hover:text-blue-800"
            href="https://www.sap.com"
          >
            SAP
          </Link>{" "}
          and{" "}
          <Link
            className="underline text-blue-600 hover:text-blue-800"
            href="https://www.maxar.com"
          >
            Maxar
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
