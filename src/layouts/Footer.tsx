import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='py-10 text-sm text-center md:text-base'>
      <p>
        Designed
        <Link
          href='https://github.com/lamhoang1256 '
          className='font-semibold text-purple-600 mx-2'
        >

          Nguyen Hoang Lam
        </Link>
         and Developed
        <Link
          href='https://github.com/SMTanimur'
          className='font-semibold text-orange-500 ml-2'
        >
          SMTanimur
        </Link>
      </p>
      <p>Copyright © 2022 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
