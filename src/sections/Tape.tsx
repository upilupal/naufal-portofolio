import React from 'react';
import NextIcon from '../assets/icons/next.svg';
import TypeScriptIcon from '../assets/icons/typescript.svg';
import JavaScriptIcon from '../assets/icons/javascript.svg';
import NodeJsIcon from '../assets/icons/nodejs.svg';
import ExpressIcon from '../assets/icons/express.svg';
import PrismaIcon from '../assets/icons/prisma.svg';
import TailwindIcon from '../assets/icons/tailwind.svg';
import FigmaIcon from '../assets/icons/figma.svg';

const icons = [
  { name: "Next.js", Icon: NextIcon },
  { name: "TypeScript", Icon: TypeScriptIcon },
  { name: "JavaScript", Icon: JavaScriptIcon },
  { name: "Node.js", Icon: NodeJsIcon },
  { name: "Express", Icon: ExpressIcon },
  { name: "Prisma", Icon: PrismaIcon },
  { name: "Tailwind CSS", Icon: TailwindIcon },
  { name: "Figma", Icon: FigmaIcon },
];

export const TapeSection = () => {
  return (
    <div className=" container group flex  overflow-hidden p-2 relative">
      <div className="absolute left-0 top-0 z-10 h-[100px] w-12 bg-gradient-to-r from-gray-900 to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-[100px] w-12 bg-gradient-to-l from-gray-900 to-transparent" />
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex shrink-0 animate-marquee flex-row justify-around gap-16">
            {icons.map(({ name, Icon }, index) => (
                <div key={name} className="md:h-20 md:w-20 h-10 w-10">
                  <Icon className="h-full w-full" />
                </div>
              
            ))}
          </div>
        ))}
    </div>
  );
};