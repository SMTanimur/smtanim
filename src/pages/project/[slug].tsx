
import { ArticleContent } from "@components/article";
import { Meta } from "@components/meta";
import { Heading } from "@components/text";
import { REVALIDATE_TIME, REVALIDATE_TIME_ERROR } from "@constants/global";
import LayoutHome from "@layouts/HomeLayout";
import { ProjectImageSlider } from "@modules/project";
import { getMdxSource } from "@utils/helper";
import sanityClient from "@utils/sanityClient";
import { sanityImgCard } from "@utils/sanityImgUrl";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { IProject } from "src/types";


interface ProjectDetailsPageProps {
  project: IProject;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const ProjectDetailsPage = ({ project, mdxSource }: ProjectDetailsPageProps) => {
  return (
    <LayoutHome>
      <Meta
        title={project.title}
        image={sanityImgCard(project.mainImage)}
        description={project.description}
      />
      <div className="layout-container">
        <section className="max-w-[900px] mt-4 mx-auto">
          <Heading>{project.title}</Heading>
          <ProjectImageSlider images={project.images} className="my-6" />
          <p className="text-lg">{project.description}</p>
          <ArticleContent mdxSource={mdxSource} />
        </section>
      </div>
    </LayoutHome>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking"
  };
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const slug = params?.slug;
  try {
    const queryRef = `*[_type == "project" && slug.current == $slug][0]`;
    const project = await sanityClient.fetch(queryRef, { slug });
    const mdxSource = await getMdxSource(project.content);
    return { props: { project, mdxSource }, revalidate: REVALIDATE_TIME };
  } catch (error) {
    return { props: {}, revalidate: REVALIDATE_TIME_ERROR, notFound: true };
  }
};

export default ProjectDetailsPage;