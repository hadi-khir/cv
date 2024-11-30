import Link from "next/link";

const Navbar = () => {

    const links = [
        {
            name: 'background',
            href: '#background',
        },
        {
            name: 'skills',
            href: '#skills',
        },
        {
            name: 'experience',
            href: '#experience',
        },
    ];

    return (
        <header className="sticky top-0 left-0 w-full z-10 flex justify-between p-4 bg-sky-50">
            <div id='nav-page-sections'>
                {links.map(link => {
                    return (
                        <Link key={link.name + '-nav-item'} href={link.href} className="text-gray-800 m-2 hover:text-blue-500 transition-colors">{link.name}</Link>
                    )
                })}
            </div>
            <Link href={'https://www.github.com/hadi-khir'} target="_blank" className="text-gray-800 hover:text-blue-500 transition-colors">github</Link>
        </header>
    )
}

export default Navbar;