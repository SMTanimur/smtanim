/* eslint-disable react/no-unescaped-entities */
import { Heading } from "@components/text";
import Image from "next/image";
import Link from "next/link";

const HomeAboutMe = () => {
  return (
    <section className="layout-container ">
      <div className=" flex flex-col-reverse items-center justify-between gap-8 py-10 lg:flex-row lg:py-20">
        <div className="w-full max-w-[700px]">
          <Heading>About Me</Heading>
          <p className="max-w-[650px] my-6 leading-[34px] text-lg">
            Hello! I'm Tanim, a passionate self-taught Full Stack developer from
            Bangladesh. I build things for the web & mobile. I develop web
            applications. Passionate
            about new technologies and problem-solving. I am available for any
            kind of job opportunity that suits my interests.
          </p>
          <div className="flex flex-col gap-5 lg:flex-row">
            <div className="font-medium">2021 - 2022 :</div>
            <div className="flex gap-3">
              <div>
                <h3 className="font-semibold">
                  PROFESSIONAL FULL-STACK DEVELOPER
                </h3>
              </div>
            </div>
          </div>
          <div className="flex mt-6 gap-x-3">
            <Link
              className="py-3 rounded-lg px-7 bg-linearOrangee"
              href="https://drive.google.com/file/d/1QxOqxvV38pRMA5AMDqqHhTCLNa7eLsqb/view?usp=drive_link"
            >
              Download CV
            </Link>
            <button className="py-3 rounded-lg px-7 bg-linearPurple">
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex justify-center max-h-[380px] h-full flex-1 maxsm:max-w-[280px]">
          <Image
            alt="avatar"
            width={340}
            height={380}
            src="/me.png"
            className="rounded-lg h-[370px]   object-cover content-center bg-no-repeat"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeAboutMe;
