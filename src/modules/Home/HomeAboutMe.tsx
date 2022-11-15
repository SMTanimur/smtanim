import { Heading } from '@components/text';
import Image from 'next/image';
import Link from 'next/link';

const HomeAboutMe = () => {
  return (
    <section className='layout-container '>
      <div className=' flex flex-col-reverse items-center justify-between gap-8 py-10 lg:flex-row lg:py-20'>
        <div className='w-full max-w-[700px]'>
          <Heading>About Me</Heading>
          <p className='max-w-[650px] my-6 leading-[34px] text-lg'>
            Good day, everyone! I&apos;m SM Tanimur Rahman,and I&apos;m from
            Bangladesh. I&apos;m Fresher Full-Stack Developer. I&apos;m often
            praised for my creativity and independent working skills. I always
            put my heart and soul into every single website that I develop. I
            guess that&apos;s all I have to share about myself. Thank you for
            reading!
          </p>
          <div className='flex flex-col gap-5 lg:flex-row'>
            <div className='font-medium'>2021 - 2022 :</div>
            <div className='flex gap-3'>
              <div>
                <h3 className='font-semibold'>
                  PROFESSIONAL FULL-STACK DEVELOPER
                </h3>
              </div>
            </div>
          </div>
          <div className='flex mt-6 gap-x-3'>
            <Link
              className='py-3 rounded-lg px-7 bg-linearOrangee'
              href='https://drive.google.com/file/d/1pIEvxZEgyoUyM5CM9ZvHs_zHaFVpZ0ig/view'
            >
              Download CV
            </Link>
            <button className='py-3 rounded-lg px-7 bg-linearPurple'>
              Contact Me
            </button>
          </div>
        </div>
        <div className='flex justify-center flex-1 maxsm:max-w-[250px]'>
          <Image
            alt='avatar'
            width={350}
            height={350}
            src='/avatar.jpg'
            className='rounded-lg aspect-square'
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAboutMe;
