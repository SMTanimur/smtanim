import { PATH } from '@constants/path';
import LiquidButtonv2 from '@components/button/LiquidButtonv2';
import WaveTextAnimation from '@utils/animation/wevyText/WaveTextAnimation';
import Link from 'next/link';
import { useEffect, useState } from 'react';
const links = [
  {
    path: PATH.home,
    display: 'Home',
  },
  {
    path: PATH.project,
    display: 'Projects',
  },
  {
    path: PATH.post,
    display: 'Posts',
  },
];

const Header = () => {
  const [top, setTop] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      if (window.pageYOffset > 10) {
        setTop(true);
      } else {
        setTop(false);
      }
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <header
      className={` fixed w-full top-0 right-0 left-0 z-40  transition duration-300 ease-in-out ${
        top &&
        'backdrop-blur-lg bg-slate-800/60 dark:bg-slate-800/60 border-b border-sky-500/30 shadow-lg'
      }`}
    >
      <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div className='relative flex items-center justify-between'>
          <div className='flex items-center'>
            <div className=' flex w-40 cursor-pointer'>
              <div className=' relative mr-2'>
                <div className=' top-1/2 left-2  absolute bg-sky-400/80 h-6 w-6 rounded-full blur'></div>
                <div className='flex items-center justify-center text-3xl font-bold w-10 h-10 rounded-md bg-slate-500/10 text-sky-500/80 z-10 backdrop-blur'>
                  T
                </div>
              </div>
              <div className='relative'>
                <WaveTextAnimation />
              </div>
            </div>

            <ul className=' items-center hidden space-x-8 lg:flex'>
              {links.map(link => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className='font-medium tracking-wide  text-gray-50 transition-colors duration-200 hover:text-gray-400'
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className=' items-center hidden space-x-8 lg:flex'>
            <li>
              <Link
                target='_blank'
                href='https://drive.google.com/file/d/19llCKYmBA1i5g1Ru2xmC4wjHpVVVruyx/view?usp=drive_link'
                className=' flex'
                rel='noreferrer'
              >
                <LiquidButtonv2 mode='cv' text='Download CV' />
              </Link>
            </li>
          </ul>
          <div className='lg:hidden'>
            <button
              aria-label='Open Menu'
              title='Open Menu'
              className='p-2 -mr-1 transition duration-200 rounded focus:shadow-outline'
              onClick={() => setIsMenuOpen(true)}
            >
              <svg
                className='w-5 text-sky-500 dark:text-sky-500'
                viewBox='0 0 24 24'
              >
                <path
                  fill='currentColor'
                  d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                />
                <path
                  fill='currentColor'
                  d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                />
                <path
                  fill='currentColor'
                  d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className='absolute top-0 left-0 w-full'>
                <div className='p-5 bg-slate-500/50 dark:bg-slate-500/50 border border-sky-600/40 rounded-lg backdrop-blur-3xl'>
                  <div className='flex items-center justify-end mb-4'>
                    <div>
                      <button
                        aria-label='Close Menu'
                        title='Close Menu'
                        className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-slate-500/50 dark:hover:bg-slate-500/50 focus:bg-slate-200 focus:outline-none focus:shadow-outline'
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg
                          className='w-5  dark:text-sky-500 text-sky-500 '
                          viewBox='0 0 24 24'
                        >
                          <path
                            fill='currentColor'
                            d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className='space-y-4'>
                      {links.map(link => (
                        <li key={link.path}>
                          <Link
                            href={link.path}
                            className='font-medium py-2 px-3 rounded-md transition duration-200  hover:bg-gradient-to-t from-cyan-500
                           to-blue-600 dark:text-gray-50 text-gray-50'
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {link.display}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          target='_blank'
                          href='https://drive.google.com/file/d/1pIEvxZEgyoUyM5CM9ZvHs_zHaFVpZ0ig/view'
                          className='inline-flex items-center w-full justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200    hover:from-blue-400 focus:shadow-outline rounded-full  bg-gradient-to-t from-cyan-500
                  to-blue-600  hover:scale-105 focus:shadow-outline focus:outline-none mr-4'
                          rel='noreferrer'
                        >
                          Download CV
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
