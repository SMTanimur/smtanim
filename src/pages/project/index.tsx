import { Card } from "@components/card";
import { Heading } from "@components/text";
import { PATH } from "@constants/path";
import LayoutHome from "@layouts/HomeLayout";
import sanityClient from "@utils/sanityClient";
import { sanityImgUrl } from "@utils/sanityImgUrl";
import Head from "next/head";
import { IProject } from "src/types";


interface ProjectsPageProps {
  projects: IProject[];
}

const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <LayoutHome>
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
                image={sanityImgUrl(project.mainImage)
                  .width(600)
                  .height(350)
                  .focalPoint(0, 0)
                  .crop("focalpoint")
                  .fit("crop")
                  .url()}
                description={project.description}
              />
            ))}
          </div>
        </section>
      </LayoutHome>
    </>
  );
};

export async function getStaticProps() {
  const projects = await sanityClient.fetch(`*[_type == "project"]`);
  return {
    props: {
      projects,
    },
  };
}

export default ProjectsPage;
