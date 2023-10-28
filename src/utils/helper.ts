import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";

export const getMdxSource = async (content: string) => {
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { properties: { className: ["anchor"] } }, { behaviour: "wrap" }],
        rehypeHighlight
      ]
    }
  });
  return mdxSource;
};