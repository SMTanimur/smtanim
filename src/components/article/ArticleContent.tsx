
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Image from "next/image";
import "highlight.js/styles/base16/dracula.css";
import { LinkTargetBlank } from "@components/link";
import Link from "next/link";


interface ArticleContentProps {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const ArticleContent = ({ mdxSource }: ArticleContentProps) => {
  return (
    <article className="prose-base lg:prose-lg article-content prose-headings:font-medium prose-headings:!mt-5 prose-headings:!mb-5 prose-pre:py-2 prose-pre:px-0">
      <MDXRemote
        {...mdxSource}
        components={{
          Image,
          a: (props: any) =>
            props.href.startsWith("#") ? <Link {...props} /> : <LinkTargetBlank {...props} />,
        }}
      />
    </article>
  );
};

export default ArticleContent;
