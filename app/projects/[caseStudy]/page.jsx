import React from 'react';
import { useNextSanityImage } from 'next-sanity-image';

import CaseStudyTemplate from './CaseStudyTemplate';
import PageWrapper from '@/components/PageWrapper';
import { client } from '@/helper/configSanity';
import NotFound from './NotFound';
// import { projects } from '@/helper/content';

async function getProjectsData() {
  const query = '*[_type == "projects"]';
  const latestProjects = await client.fetch(query);
  return latestProjects;
}

const CaseStudyPage = async ({ params }) => {
  const projects = await getProjectsData();
  const slug = params.caseStudy;
  const searchedProject = projects.find(
    (project) => project.slug.current === slug
  );

  if (!searchedProject) return <NotFound />;

  return (
    <>
      <PageWrapper>
        <CaseStudyTemplate project={searchedProject} />
      </PageWrapper>
    </>
  );
};

export default CaseStudyPage;
