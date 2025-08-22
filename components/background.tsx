import Link from 'next/link';

const Background = () => {
    return (
        <section
            id="background"
            className="w-full mt-16 px-8 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-[25%_75%] gap-16"
        >
            <h2 className="text-blue-600 text-lg font-bold uppercase tracking-wider md:text-right">
                Background
            </h2>
            <div className="grid grid-cols-1 gap-4">
                <span className="leading-relaxed">
                    I graduated from the <span className="font-bold">University of Ottawa</span> in 2019, with a degree in{' '}
                    <span className="font-bold">Electrical Engineering</span>. In that time, I got to complete internships for
                    leading organizations such as{' '}
                    <Link
                        className="underline text-blue-400 hover:text-blue-800 visited:text-purple-600"
                        target="_blank"
                        href="https://www.nokia.com"
                    >
                        Nokia
                    </Link>{' '}
                    and the{' '}
                    <Link
                        className="underline text-blue-400 hover:text-blue-800 visited:text-purple-600"
                        target="_blank"
                        href="https://sunlab.ca/"
                    >
                        University of Ottawa SUNLAB
                    </Link>
                    .
                </span>
                <span>
                    After completing my degree, I had the opportunity to work with amazing teams at{' '}
                    <Link
                        target="_blank"
                        className="underline text-blue-400 hover:text-blue-800"
                        href="https://www.sap.com"
                    >
                        SAP
                    </Link>
                    , where I was part of the Partner Engineering team and{' '}
                    <Link
                        target="_blank"
                        className="underline text-blue-400 hover:text-blue-800"
                        href="https://www.maxar.com"
                    >
                        Maxar
                    </Link>
                    , as part of their Charting and Encoding Engineering team. Currently, I&apos;m working at{' '}
                    <Link
                        target="_blank"
                        className="underline text-blue-400 hover:text-blue-800"
                        href="https://www.bankofcanada.ca/"
                    >
                        Bank of Canada</Link> as a Software Engineer, helping to build the next generation of the Bank&apos;s core banking system.
                </span>
                <span>
                    In my spare time, I&apos;ll be hanging out with my cat Zaytoun, making coffees the old-fashioned way, or out
                    taking some <Link
                        target='_blank'
                        className="underline text-blue-400 hover:text-blue-800"
                        href="https://photos.khir.ca">
                        photos.
                    </Link>
                </span>
            </div>
        </section>
    );
};

export default Background;