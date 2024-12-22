import { Connectivity } from "@/components/Connectivity";
import { TechnologyGrid } from "@/components/TechnologyGrid";
import { Testimonials } from "@/components/testimonisalspace";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import AnimatedShinyText from "@/components/ui/shinny-text";
import { Spotlight } from "@/components/ui/spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { cn, projects } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const words = [
    {
      text: "deploy",
    },
    {
      text: "your",
    },
    {
      text: "apps",
    },
    {
      text: "in",
    },
    {
      text: "Secounds",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col overflow-hidden bg-black">
      <ContainerScroll
        titleComponent={
          <div className="">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />

            <div className="flex flex-col items-center justify-center h-[19rem]  ">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                  <span>✨ Introducing Zenux Studio</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>

              <TypewriterEffectSmooth words={words} />
              <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                  Join now
                </button>
                <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                  Signup
                </button>
              </div>
            </div>
          </div>
        }
      >
        <Image
          src={`/demo.png`}
          alt="hero"
          height={720}
          width={2000}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <div className=" bg-black text-white flex flex-col items-center justify-center p-3">
        <h1 className="text-2xl font-light tracking-widest mb-16">
          SUPPORTED LANGUAGES & FRAMEWORKS
        </h1>
        <TechnologyGrid />
        <p className="text-sm font-light tracking-widest mt-16">
          ...AND MANY MORE
        </p>
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
      <Connectivity />
    </div>
  );
}
