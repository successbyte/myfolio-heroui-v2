import { Metadata } from 'next';
import { ProjectDetails } from './ProjectDetails';

export const metadata: Metadata = {
  title: 'Project Details',
  description: 'Detailed view of my projects and their technical implementations.'
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectDetails slug={params.slug} />;
}