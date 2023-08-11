
import { Card } from "@components/card";
import IconNext from "@components/icons/IconNext";
import IconPrev from "@components/icons/IconPrev";
import { Meta } from "@components/meta";
import { Heading } from "@components/text";
import { REVALIDATE_TIME, REVALIDATE_TIME_ERROR } from "@constants/global";
import { PATH } from "@constants/path";
import LayoutHome from "@layouts/HomeLayout";
import sanityClient from "@utils/sanityClient";
import { sanityImgCard } from "@utils/sanityImgUrl";
import { GetStaticProps } from "next";
import { useState } from "react";
import Pagination from "react-sanity-pagination";
import { IProject } from "src/types";


const PROJECTS_PER_PAGE = 9;

interface ProjectsPageProps {
  allProjects: IProject[];
}

const ProjectsPage = ({ allProjects }: ProjectsPageProps) => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const action = (page: number, _range: number, projects: IProject[]) => {
    setProjects(projects);
  };
  return (
    <LayoutHome>
      <Meta title="Projects" />
      <section className="mt-20 layout-container">
        <div className="text-center">
          <Heading>Projects</Heading>
        </div>
        <div className="grid gap-6 mt-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project._id}
              title={project.title}
              slug={project.slug.current}
              path={`${PATH.project}/${project.slug.current}`}
              image={sanityImgCard(project.mainImage)}
              description={project.description}
            />
          ))}
        </div>
        <Pagination
          nextButton={true}
          prevButton={true}
          prevButtonLabel={<IconPrev />}
          nextButtonLabel={<IconNext />}
          items={allProjects}
          action={action}
          postsPerPage={PROJECTS_PER_PAGE}
        />
      </section>
    </LayoutHome>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const queryRef = `*[_type == "project"]`;
    const projects = await sanityClient.fetch(queryRef);
    return { props: { allProjects: projects }, revalidate: REVALIDATE_TIME };
  } catch (error) {
    return { props: { allProjects: [] }, revalidate: REVALIDATE_TIME_ERROR };
  }
};

export default ProjectsPage;
