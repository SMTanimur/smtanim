
import { Icon404 } from "@components/icons";
import { PATH } from "@constants/path";
import Head from "next/head";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="layout-container">
        <div className="flex flex-col items-center justify-center min-h-screen gap-y-2">
          <Icon404 />
          <h2 className="text-xl font-semibold">Oops! Something gone missing</h2>
          <span className="text-grayc4">We can&apos;t find the page you&apos;re looking for.</span>
          <Link href={PATH.home}>
            <button className="px-4 py-2 mt-3 font-medium rounded-lg bg-linearPurple2">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
