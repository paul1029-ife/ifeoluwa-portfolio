"use client";
import { Clock, ExternalLink, User } from "lucide-react";
import { Project } from "../ProjectTimeline";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({
  data,
  project,
}: {
  data: TimelineEntry[];
  project: Project;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="pt-24">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
          <div className={`h-2 bg-gradient-to-r ${project.theme}`}></div>
          <div className="p-6 md:p-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
              How I built{" "}
              <span className={`text-${project.accentColor}-500`}>
                {project.title}
              </span>
            </h2>

            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base mb-6 max-w-2xl">
              {project.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Project Duration */}
              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Duration
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {project.duration}
                  </p>
                </div>
              </div>

              {/* Team */}
              <div className="flex items-center space-x-3">
                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
                  <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Team
                  </p>
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {project.team}
                  </p>
                </div>
              </div>

              {/* Live URL */}
              {project.liveUrl && (
                <div className="flex items-center space-x-3">
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg">
                    <ExternalLink className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Live Demo
                    </p>
                    <a
                      href={project.liveUrl}
                      className={`text-sm font-medium text-${project.accentColor}-500 hover:underline`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit website
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
