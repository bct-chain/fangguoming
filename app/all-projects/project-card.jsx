'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './custom.css';
import Link from 'next/link';

export default function ProjectCard({ imageUrls, name, link, role }) {
  return (
    <div className="max-w-sm p-3 rounded-2xl bg-[#0a0a0f] border-2 border-purple-900/50 shadow-[2px_2px_3px_rgba(139,92,246,0.3),-1px_-1px_2px_rgba(6,182,212,0.2)] overflow-hidden hover:border-purple-500/50 transition-all duration-300">
      <Carousel showThumbs={false} infiniteLoop autoPlay>
        {imageUrls.map((url, index) => (
          <div key={index}>
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="rounded-xl h-40 w-full object-cover"
            />
          </div>
        ))}
      </Carousel>

      <div className="p-4">
        <h2 className="font-semibold text-lg">{name}</h2>
        <div className="flex items-center justify-between mt-2">
          <Link
            href={link}
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-purple-400 hover:to-cyan-400 flex justify-between w-full transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Project</span>
            <span className="flex items-center text-cyan-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.259 6.914a1 1 0 00.95.69h7.284c.969 0 1.371 1.24.588 1.81l-5.88 4.302a1 1 0 00-.364 1.118l2.258 6.913c.3.922-.755 1.688-1.539 1.118L12 17.6l-5.879 4.302c-.783.57-1.838-.196-1.539-1.118l2.258-6.913a1 1 0 00-.364-1.118L1.597 12.34c-.783-.57-.38-1.81.588-1.81h7.284a1 1 0 00.95-.69l2.259-6.914z"
                />
              </svg>
              {/* <span className="ml-1">{role}</span> */}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

