import { ArticleContent } from "@components/article";
import { Heading } from "@components/text";
import LayoutHome from "@layouts/HomeLayout";
import sanityClient from "@utils/sanityClient";
import { sanityImgUrl } from "@utils/sanityImgUrl";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import Head from "next/head";
import Image from "next/image";
import { IPost } from "src/types";
import { serialize } from "next-mdx-remote/serialize";


interface PostDetailsPageProps {
  post: IPost;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const PostDetailsPage = ({ post, mdxSource }: PostDetailsPageProps) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <LayoutHome>
        <div className="layout-container">
          <section className="max-w-[900px] mt-4 mx-auto">
            <Heading>{post.title}</Heading>
            <div className="w-full my-4 overflow-hidden border border-gray-600 rounded-lg aspect-video">
              <Image
                src={sanityImgUrl(post.mainImage).width(1200).url()}
                alt={post.slug.current}
                width={1200}
                height={675}
                objectFit="cover"
                className="object-top"
              />
            </div>
            <p className="text-lg">{post.description}</p>
            <ArticleContent mdxSource={mdxSource} />
          </section>
        </div>
      </LayoutHome>
    </>
  );
};

export async function getStaticProps(context: any) {
  const { slug = "" } = context.params;
  const post = await sanityClient.fetch(
    `
    *[_type == "post" && slug.current == $slug][0]
    `,
    { slug }
  );
  console.log("post: ", post);
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            properties: { className: ["anchor"] },
          },
          { behaviour: "wrap" },
        ],
        rehypeHighlight,
      ],
    },
  });
  return {
    props: {
      post,
      mdxSource,
    },
  };
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(
    `*[_type == "post" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: false,
  };
}

export default PostDetailsPage;
