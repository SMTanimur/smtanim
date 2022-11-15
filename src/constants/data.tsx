import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

export const contacts = [
  {
    type: 'github',
    path: 'https://github.com/SMTanimur',
    image: '/github.png',
    display: 'Github:SMTanimur',
  },
  {
    type: 'facebook',
    path: 'https://web.facebook.com/smtanimur',
    image: '/facebook.png',
    display: 'Facebook',
  },

  {
    type: 'gmail',
    path: 'mailto:mushfiqurtanim@gmail.com',
    image: '/gmail.png',
    display: 'Gmail: mushfiqurtanim@gmail.com',
  },

  {
    type: 'house',
    path: '/address',
    image: '/house.png',
    display: 'Address: Daulatpur,Monohardi, Narsingdi,Dhaka-Bangladesh',
  },
];

export const canvasImages = [
  'html',
  'javascript',
  'css',
  'react',
  'typescript',
  'nodejs',
  'tailwindcss',
  'sass',
  'next',
  'vscode',
  'git',
  'vite',
  'webpack',
].map(
  icon =>
    `https://images.weserv.nl/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2F${icon}.svg&w=50&h=50`
);

export const socialIcons = [
  {
    name: 'Facebook',
    path: 'https://web.facebook.com/smtanimur',
    icon: <FaFacebookF />,
  },
  {
    name: 'Twitter',
    path: 'https://twitter.com/SMTanimur',
    icon: <FaTwitter />,
  },
  {
    name: 'Github',
    path: 'https://github.com/SMTanimur',
    icon: <FaGithub />,
  },
  {
    name: 'Linkedin',
    path: 'https://www.linkedin.com/in/s-m-tanimur-rahman-372894220',
    icon: <FaLinkedinIn />,
  },
];
