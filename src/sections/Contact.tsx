import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export const ContactSection = () => {
  return (
    <div className="py-16 pt-12" id="contactSection">
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="">
            <h2 className="font-serif text-2xl md:text-3xl">Let's create something amazing together</h2>
            <p className="text-sm md:text-base mt-2">Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.</p>
          </div>
          <div className="">
            <Link href="mailto:sofiazahroh2018@gmail.com" target="_blank" rel="noopener noreferer" className="text-white bg-gray-900 inline-flex gap-2 items-center px-6 h-12 rounded-xl w-max border border-gray-900">
              <span className="font-semibold">Contact Me</span>
              <FiArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
