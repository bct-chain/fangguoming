'use client';

import { personalData } from "@/utils/data/personal-data";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/utils/getTranslations";
import Image from "next/image";


function AboutSection() {
  const { language } = useLanguage();
  const t = getTranslations(language);
  const description = typeof personalData.description === 'string' 
    ? personalData.description 
    : personalData.description[language];
  const name = typeof personalData.name === 'string' 
    ? personalData.name 
    : personalData.name[language];

  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-gradient-to-r from-purple-900 to-cyan-900 w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md border border-purple-500/30">
          {t.about.title}
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-purple-500 to-cyan-500"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-medium mb-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 text-xl uppercase">
            {t.about.whoIAm}
          </p>
          <p className="text-gray-200 text-sm lg:text-lg">
            {description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt={name}
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;