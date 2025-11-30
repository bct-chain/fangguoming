'use client';

import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

export default function Home() {
    return (
        <div>
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-4 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent"></span>
                    <span className="bg-gradient-to-r from-purple-900 to-cyan-900 w-fit text-white p-2 px-5 text-2xl rounded-md border border-purple-500/30">
                        All Projects
                    </span>
                    <span className="w-4 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></span>
                </div>
            </div>
            <div className="p-0 justify-items-center sm:p-4 lg:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        imageUrls={project.image}
                        name={project.name}
                        link={project.link}
                        role={project.role}
                    />
                ))}
            </div>
        </div>
    );
}
