import Link from "next/link";


const Footer = () => {
  return (
    <footer className="py-10 text-sm text-center md:text-base">
      <p>
        Designed & Developed by{" "}
        <Link
          href="https://github.com/lamhoang1256"
          className="font-semibold text-blue57"
        >
         SMTanimur
        </Link>
      </p>
      <p>Copyright © 2022 All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
