import SocialLink2 from '@components/icons/socialicon';
import LayoutHome from '@layouts/HomeLayout';
import HomeAboutMe from '@modules/Home/HomeAboutMe';
import HomeCanvas from '@modules/Home/HomeCanvas';
import HomeIntro from '@modules/Home/HomeIntro';
import { IProject } from '../types/project';
import sanityClient from '@utils/sanityClient';
import Head from 'next/head';
import { ISkill } from '../types/common';
import HomeMySkills from '@modules/Home/HomeMySkills';
import HomeContact from '@modules/Home/HomeContact';
interface HomePageProps {
  projects: IProject[];
  skills: ISkill[];
}
 function Home({projects,skills}:HomePageProps) {
  return (
    <>
      <Head>
        <title>Tanim-Full-stack web developer</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <LayoutHome className='-mt-16'>
        <HomeCanvas />
        <HomeIntro />
        <div className=' flex justify-center items-start mt-10 lg:-mt-16 '>
          <SocialLink2></SocialLink2>
        </div>
        <HomeAboutMe/>
        <HomeMySkills skills={skills}/>
        <HomeContact/>
      </LayoutHome>
    </>
  );
}
export async function getStaticProps() {
  const projects = await sanityClient.fetch(`*[_type == "project" && featured == true]`);
  const skills = await sanityClient.fetch(`*[_type == "skill"]`);
  return {
    props: {
      projects,
      skills,
    },
  };
}
export default Home