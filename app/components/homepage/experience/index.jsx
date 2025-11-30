'use client';

import { experiences } from "@/utils/data/experience";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/utils/getTranslations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import experience from "/public/lottie/code.json";
import Link from "next/link";

function Experience() {
  const { language } = useLanguage();
  const t = getTranslations(language);

  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-purple-900/50"
    >
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
          <span className="bg-gradient-to-r from-purple-900 to-cyan-900 w-fit text-white p-2 px-5 text-xl rounded-md border border-purple-500/30">
            {t.experience.title}
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences.map((experience) => (
                <GlowCard
                  key={experience.id}
                  identifier={`experience-${experience.id}`}
                >
                  <Link
                    href={experience.link}
                    target="_blank"
                    className="p-3 relative"
                  >
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-cyan-400">
                        {experience.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-purple-400  transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {experience.title}
                        </p>
                        <p className="text-sm sm:text-base">
                          {experience.company}
                        </p>
                        <p className="text-sm sm:text-base">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
