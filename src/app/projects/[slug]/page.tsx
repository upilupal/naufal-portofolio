// app/projects/[slug]/page.tsx

import { notFound } from 'next/navigation';
// import { ProjectDetail } from '@/components/ProjectDetail';

// This should be replaced with actual data fetching logic
import { portfolioProjects } from '@/data/projects';
import ProjectDetail from '@/components/ProjectDetail';

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = portfolioProjects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}