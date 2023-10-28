import React from 'react';
import style from './SocialLink2.module.css';
import { FaFacebookF, FaYoutube, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { RiWhatsappFill } from 'react-icons/ri';
import { socialIcons } from '@constants/data';
import Link from 'next/link';
export default function SocialLink2() {
  return (
    <>
      <div
        className='icon-animation-parent'
      >
        {socialIcons.map(social => (
          <Link href={social.path} key={social.name} className="icon-link">
            <div className='icon-layer'>
              <span
                style={{
                  color: '#dee',
                  borderColor: '#4267b2',
                }}
              ></span>
              <span></span>
              <span></span>
              <span></span>
              <span className=' text-4xl flex items-center justify-center backdrop-blur-lg bg-slate-900/20 '>
                {social.icon}
              </span>
            </div>
            <div className="text">{social.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
