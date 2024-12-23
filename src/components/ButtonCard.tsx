import { cn } from "@/lib/utils";
import AnimatedShinyText from "./ui/shinny-text";
import { ArrowRightIcon } from "lucide-react";

interface ButtonCardProps {
  text: string;
}

const ButtonCard = ({ text }: ButtonCardProps) => {
  return (
    <div className="z-10 flex my-4 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base  transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:bg-blue-500/10 dark:text-blue-400"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
          <span className="text-xs text-green-400">{text}</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
};

export default ButtonCard;
