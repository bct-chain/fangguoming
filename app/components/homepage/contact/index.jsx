'use client';

import { personalData } from '@/utils/data/personal-data';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/utils/getTranslations';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactWithCaptcha from './contact-with-captcha';
import ContactWithoutCaptcha from './contact-without-captcha';

function ContactSection() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-gradient-to-r from-purple-900 to-cyan-900 w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md border border-purple-500/30">
          {t.contact.title}
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {
          (process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY) ? <ContactWithCaptcha />
            : <ContactWithoutCaptcha />
        }

        <div className="lg:w-3/4 ">
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-purple-900/50 p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:scale-110 transition-all duration-300 text-white cursor-pointer border border-purple-500/30"
                size={36}
              />
              <span>{personalData.email}</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-purple-900/50 p-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:scale-110 transition-all duration-300 text-white cursor-pointer border border-purple-500/30"
                size={36}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>
          {/* <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-purple-900/50 p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:scale-110 transition-all duration-300 text-white cursor-pointer border border-purple-500/30"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-purple-900/50 p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:scale-110 transition-all duration-300 text-white cursor-pointer border border-purple-500/30"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.twitter}>
              <FaXTwitter
                className="bg-purple-900/50 p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:scale-110 transition-all duration-300 text-white cursor-pointer border border-purple-500/30"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.stackOverflow}>
              <FaStackOverflow
                className="bg-purple-900/50 p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:scale-110 transition-all duration-300 text-white cursor-pointer border border-purple-500/30"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.facebook}>
              <FaFacebook
                className="bg-purple-900/50 p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:scale-110 transition-all duration-300 text-white cursor-pointer border border-purple-500/30"
                size={48}
              />
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;