import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

const footerLinks =  [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/naufalhanifcipta/"
  },
  {
    title: "Github",
    href: "https://github.com/upilupal"
  }
]

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30  [mask-image:radial-gradient(50%_20%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <Link href={link.href} key={link.title} target="_blank" rel="noopener noreferer" className="inline-flex items-center gap-1.5 z-40">
                <span className="font-semibold">{link.title}</span>
                <FiArrowUpRight size={16}/>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
};
