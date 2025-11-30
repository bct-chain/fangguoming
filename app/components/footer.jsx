'use client';

import Link from 'next/link';
import { personalData } from '@/utils/data/personal-data';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslations } from '@/utils/getTranslations';
import { IoLogoGithub } from "react-icons/io";
import { FaStackOverflow, FaTelegram, FaEnvelope } from "react-icons/fa";
import { SiDiscord, SiDevdotto, SiLinkedin } from "react-icons/si";

function Footer() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const name = typeof personalData.name === 'string' 
    ? personalData.name 
    : personalData.name[language];
  const currentYear = new Date().getFullYear();

  const developerLinks = [
    { 
      href: personalData.github, 
      icon: IoLogoGithub, 
      label: 'GitHub',
      show: !!personalData.github
    },
    { 
      href: personalData.stackOverflow, 
      icon: FaStackOverflow, 
      label: 'Stack Overflow',
      show: !!personalData.stackOverflow
    },
    { 
      href: `https://dev.to/${personalData.devUsername}`, 
      icon: SiDevdotto, 
      label: 'Dev Community',
      show: !!personalData.devUsername
    },
    { 
      href: personalData.linkedIn, 
      icon: SiLinkedin, 
      label: 'LinkedIn',
      show: !!personalData.linkedIn
    },
  ].filter(link => link.show);

  const connectLinks = [
    { 
      href: `mailto:${personalData.email}`, 
      icon: FaEnvelope, 
      label: 'Email',
      show: !!personalData.email
    },
    { 
      href: personalData.telegram, 
      icon: FaTelegram, 
      label: 'Telegram',
      show: !!personalData.telegram
    },
    { 
      href: personalData.discord ? `https://discord.com/users/${personalData.discord}` : null, 
      icon: SiDiscord, 
      label: 'Discord',
      show: !!personalData.discord
    },
  ].filter(link => link.show && link.href);

  const aboutLinks = [
    { 
      href: '/#about', 
      label: t.footer.aboutMe,
      show: true
    },
    { 
      href: '/all-projects', 
      label: t.footer.myProjects,
      show: true
    },
    { 
      href: '/#contact', 
      label: t.footer.contactMe,
      show: true
    },
  ].filter(link => link.show);

  return (
    <div className="relative border-t bg-[#000000] border-purple-900/50 text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-8 lg:py-12">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-purple-500 via-cyan-500 to-transparent"></div>
        </div>
        
        {/* Three Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8">
          {/* Developer Column */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {t.footer.developer}
            </h3>
            <div className="flex flex-col gap-3">
              {developerLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {t.footer.connect}
            </h3>
            <div className="flex flex-col gap-3">
              {connectLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <IconComponent size={20} className="group-hover:scale-110 transition-transform duration-300" />
                    <span>{link.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* About Column */}
          <div className="flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {t.footer.about}
            </h3>
            <div className="flex flex-col gap-3">
              {aboutLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-900/50 pt-6 text-center">
          <p className="text-sm text-gray-400">
            {t.footer.copyright.replace('{name}', name).replace('{year}', currentYear.toString())}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;