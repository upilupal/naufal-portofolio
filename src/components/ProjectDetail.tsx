import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight } from "react-icons/fi";

type ProjectDetailProps = {
  title: string;
  description: string;
  image: string | StaticImageData;
  stack: stackProps[];
  month: string;
  year: string;
  link: string;
};

type stackProps = {
  title: string;
};

const ProjectDetail = ({ project }: { project: ProjectDetailProps }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/#projectsSection" className="inline-flex items-center text-white hover:text-white/80 transition-colors">
        <FiArrowLeft className="mr-2" />
        Back to projects
      </Link>
      <h1 className="font-serif text-4xl md:text-6xl mt-8">{project.title}</h1>
      <div className="mt-4 flex items-center text-white/60">
        <span>{project.month}</span>
        <span className="mx-2">&bull;</span>
        <span>{project.year}</span>
      </div>
      <div className="mt-8 flex justify-center bg-slate-600 rounded-lg pt-10 px-5">
        <Image src={project.image} alt={project.title} width={675} height={200} className="rounded-lg" />
      </div>
      <div className="">
        <div className="mt-12 flex flex-col gap-6">
          <div>
            <h2 className="font-serif text-2xl mb-4">Project Overview</h2>
            <p className="text-white/80">{project.description}</p>
          </div>
          <div>
            <h2 className="font-serif text-2xl mb-4">Tech Stacks:</h2>
            <ul className="text-white/80 list-disc list-inside">
              {project.stack.map((stackItem, index) => (
                <li key={index}>{stackItem.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-white text-gray-950 px-6 py-3 rounded-xl font-semibold">
            Visit live site
            <FiArrowUpRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
