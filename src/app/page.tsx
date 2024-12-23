import BehindTheSchenes from "@/components/BehindTheSchenes";
import ButtonCard from "@/components/ButtonCard";
import { Connectivity } from "@/components/Connectivity";
import Features from "@/components/Features";
import SpecsTable from "@/components/FreeTier";
import { TechnologyGrid } from "@/components/TechnologyGrid";
import { Testimonials } from "@/components/testimonisalspace";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { Cover } from "@/components/ui/cover";
import AnimatedShinyText from "@/components/ui/shinny-text";
import { Spotlight } from "@/components/ui/spotlight";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { cn, projects } from "@/lib/utils";
import { ArrowRightIcon, ChevronRight } from "lucide-react";
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
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center h-[28rem]  ">
            <AnimatedGradientText>
              🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />{" "}
              <span
                className={cn(
                  `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                )}
              >
                Introducing Zenux
              </span>
              <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedGradientText>

            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 pb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              Build amazing websites <br /> at <Cover>warp speed</Cover>
            </h1>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 my-4">
              <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                Join now
              </button>
              <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                Signup
              </button>
            </div>
          </div>
        }
      >
        <Image
          src={`/demo.png`}
          alt="hero"
          height={720}
          width={2000}
          className="mx-auto rounded-2xl object-fit h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <div className="text-white flex flex-col items-center justify-center p-3 my-28">
        <h1 className="text-2xl font-light tracking-widest mb-16">
          SUPPORTED LANGUAGES & FRAMEWORKS
        </h1>
        <TechnologyGrid />
        <p className="text-sm font-light tracking-widest mt-16">
          ...AND MANY MORE
        </p>
      </div>
      <div className="my-28">
        <div className="z-10 flex flex-col space-y-3 mt-5  items-center justify-center">
          <ButtonCard text="Build Better" />
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl">
            Why Deploy on Zenux{" "}
          </h2>
          <p className="py-4">
            Modern web applications out of the box. Cost efficient, secure,
            fault tolerant, scalable and fast.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-8 ">
          <HoverEffect items={projects} />
        </div>
        <div id="features">
          <div className="my-28">
            <ButtonCard text="Behind The Scenes" />
            <BehindTheSchenes />
          </div>
          <div className="">
            <ButtonCard text="Wait!!!...there's more" />
            <Features />
          </div>
        </div>
      </div>
      <ButtonCard text="A free tier that's actually useful" />

      <SpecsTable />
    </div>
  );
}
