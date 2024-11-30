const Experience = () => {
    const experiences = [
        {
            company: 'SAP',
            role: 'Fullstack Engineer, Partner Engineering',
            duration: 'March 2020 - September 2024',
        },
        {
            company: 'Maxar',
            role: 'Software Engineer I, Charting & Encoding Engineering',
            duration: 'September 2019 - March 2020',
        },
        {
            company: 'Royal Canadian Mounted Police (RCMP)',
            role: 'Software Developer, Firearms Reference Program',
            duration: 'September 2018 - September 2019',
        },
        {
            company: 'University of Ottawa SUNLAB',
            role: 'Research Assistant, University Research Opportunity Scholarship',
            duration: 'September 2018 - January 2019',
        },
        {
            company: 'Nokia',
            role: 'Software Developer Intern, Analytics',
            duration: 'September 2017 - April 2018',
        },
    ];

    return (
        <section
            id="experience"
            className="w-full mt-16 px-8 md:px-16 lg:px-32 grid grid-cols-1 md:grid-cols-[25%_75%] gap-16"
        >
            <h2 className="text-blue-600 text-lg font-bold uppercase tracking-wider md:text-right">
                Experience
            </h2>
            <div className="grid grid-cols-1 gap-16">
                {experiences.map(({ company, role, duration }, index) => (
                    <div key={index}>
                        <div className="flex justify-between mb-4">
                            <span className="font-bold text-lg w-3/5">{company}</span>
                            <span className="w-1/3 md:w-2/5">{duration}</span>
                        </div>
                        <p>{role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;