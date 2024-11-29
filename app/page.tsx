import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen m-1 md:m-8 flex flex-col items-center bg-sky-50">

      {/* header section */}
      <header className="sticky top-0 left-0 w-full z-10 flex justify-between p-4 bg-sky-50">
        <div>
          <Link href={'#background'} className="text-gray-800 m-2 hover:text-blue-500 transition-colors">background</Link>
          <Link href={'#skills'} className="text-gray-800 m-2 hover:text-blue-500 transition-colors">skills</Link>
          <Link href={'#experience'} className="text-gray-800 m-2 hover:text-blue-500 transition-colors">experience</Link>
        </div>
        <Link href={'https://www.github.com/hadi-khir'} target="_blank" className="text-gray-800 hover:text-blue-500 transition-colors">github</Link>
      </header>

      {/* hero section */}
      <main className="flex flex-col items-center text-center mb-16">
        <div className="mt-16 rounded-full w-64 h-64 overflow-hidden">
          <Image
            src='/profile.jpeg'
            alt='Profile Picture'
            width={256}
            height={256}
            className="object-cover"
          />
        </div>
        <div className="mt-8 w-3/4 md:w-1/2">
          <h1 className="text-3xl font-bold">
            Hey, it&apos;s me, Hadi! <span className="inline-block animate-wave text-3xl">👋</span>
          </h1>
          <p className="mt-4 text-xl font-semibold">
            I&apos;m a fullstack engineer focused on building beautiful interfaces and experiences. I&apos;ve helped companies such as{" "}
            <Link className="underline text-blue-400 hover:text-blue-800 visited:text-purple-600" target="_blank" href='https://www.sap.com'>SAP</Link>, and{" "}
            <Link className="underline text-blue-400 hover:text-blue-800 visited:text-purple-600" target="_blank" href='https://www.maxar.com'>Maxar</Link>{" "}
            to build high quality, resilient, cloud-native systems that have served hundreds of thousands of users!
          </p>
        </div>
      </main>
      <span className="animate-bloom text-blue-600 hover:text-blue-800 inline-block text-xs">SCROLL</span>
      <section id='background' className="w-full mt-16 px-8 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-[25%_75%] gap-16">
        <h2 className="text-blue-600 text-lg font-bold uppercase tracking-wider md:text-right">
          Background
        </h2>
        <div className="grid grid-cols-1 gap-4">
          <span className="leading-relaxed">
            I graduated from the <span className="font-bold">University of Ottawa</span>{" "}
            in 2019, with a degree in <span className="font-bold">Electrical Engineering</span>.
            In that time, I got to complete internships for leading organizations such as{" "}
            <Link className="underline text-blue-400 hover:text-blue-800 visited:text-purple-600" target="_blank" href='https://www.nokia.com'>Nokia</Link>, and the{" "}
            <Link className="underline text-blue-400 hover:text-blue-800 visited:text-purple-600" target="_blank" href='https://sunlab.ca/'>University of Ottawa SUNLAB</Link>{" "}.
          </span>
          <span>
            After completing my degree, I had the
            opportunity to work with amazing teams at{" "}
            <Link
              target="_blank"
              className="underline text-blue-400 hover:text-blue-800"
              href="https://www.sap.com"
            >
              SAP
            </Link>,{" "}
            where I was part of the Partner Engineering team and{" "}
            <Link
              target="_blank"
              className="underline text-blue-600 hover:text-blue-800"
              href="https://www.maxar.com"
            >
              Maxar
            </Link>, {" "}
            as part of their Charting and Encoding Engineering team.
          </span>
          <span>
            In my spare time, I&apos;ll be hanging out with my cat Zaytoun, making coffees the old fashioned way, or out taking some photos.
          </span>
        </div>
      </section>
      <section id='skills' className="w-full mt-16 px-8 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-[25%_75%] gap-16">
        <h2 className="text-blue-600 text-lg font-bold uppercase tracking-wider md:text-right">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div>
            <span className="font-bold text-lg">Languages</span>
            <p>Java</p>
            <p>TypeScript</p>
            <p>Python</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>SQL</p>
          </div>
          <div>
            <span className="font-bold text-lg">Frameworks</span>
            <p>Spring</p>
            <p>Spring Boot</p>
            <p>React</p>
            <p>NextJS</p>
            <p>Node</p>
          </div>
          <div>
            <span className="font-bold text-lg">Tools</span>
            <p>Git</p>
            <p>Chrome DevTools</p>
            <p>Postman</p>
            <p>Postgres</p>
            <p>AWS & Cloud Foundry</p>
          </div>
          <div>
            <span className="font-bold text-lg">Design</span>
            <p>Figma</p>
            <p>User Testing</p>
            <p>Wireframing</p>
          </div>
        </div>
      </section>
      <section id='experience' className="w-9/10 mt-16 px-8 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-[25%_75%] gap-16">
        <h2 className="text-blue-600 text-lg font-bold uppercase tracking-wider md:text-right">
          Experience
        </h2>
        <div className="grid grid-cols-1 gap-16">
          <div>
            <div className="flex justify-between mb-4">
              <span className="font-bold text-lg w-3/5">SAP</span>
              <span className="w-1/3 md:w-2/5">March 2020 - September 2024</span>
            </div>
            <p>Fullstack Engineer, Partner Engineering</p>
          </div>
          <div>
            <div className="flex justify-between mb-4">
              <span className="font-bold text-lg w-3/5">Maxar</span>
              <span className="w-1/3 md:w-2/5">September 2019 - March 2020</span>
            </div>
            <p>Software Engineer I, Charting & Encoding Engineering</p>
          </div>
          <div>
            <div className="flex justify-between mb-4">
              <span className="font-bold text-lg w-3/5">Royal Canadian Mounted Police (RCMP)</span>
              <span className="w-1/3 md:w-2/5">September 2018 - September 2019</span>
            </div>
            <p>Software Developer, Firearms Reference Program</p>
          </div>
          <div>
            <div className="flex justify-between mb-4">
              <span className="font-bold text-lg w-3/5">University of Ottawa SUNLAB</span>
              <span className="w-1/3 md:w-2/5">September 2018 - January 2019</span>
            </div>
            <p>Research Assistant, University Research Opportunity Scholarship</p>
          </div>
          <div>
            <div className="flex justify-between mb-4">
              <span className="font-bold text-lg w-3/5">Nokia</span>
              <span className="w-1/3 md:w-2/5">September 2017 - April 2018</span>
            </div>
            <p>Software Developer Intern, Analytics</p>
          </div>
        </div>
      </section>
      <Link href="/files/khir-hadi-resume.pdf" target="_blank" className="animate-pulse flex items-center justify-end space-x-2 hover:text-blue-500 transition-colors self-end m-24">
        <span className="text-xl">View Full Resume</span>
        <FaArrowRight className="text-xl" />
      </Link>
      <footer className="flex flex-col items-center m-16">
        <span>Designed & Developed by Hadi 🤖</span>
        <span>Thanks for visiting! 💐</span>
      </footer>
    </div>
  );
}
