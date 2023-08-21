import { Card } from "@components/card";
import { WrapLink } from "@components/link";
import { Heading } from "@components/text";
import { PATH } from "@constants/path";
import { sanityImgCard } from "@utils/sanityImgUrl";
import { IProject } from "src/types";


interface HomeFeaturedProps {
  projects: IProject[];
}

const HomeFeatured = ({ projects }: HomeFeaturedProps) => {
  return (
    <section className="py-10">
      <div className="layout-container">
        <div className="text-center">
          <Heading>Feature Projects</Heading>
          <p>I&apos;m sure you will like my projects</p>
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
        <WrapLink href={PATH.project}>
          <button className="block mx-auto mt-6 btn btn-effect bg-linearPurple">View more</button>
        </WrapLink>
      </div>
    </section>
  );
};

export default HomeFeatured;