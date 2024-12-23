import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const projects = [
  {
    title: "No Sleep",
    description:
      "Zenux Apps are available immediately and on demand. No waiting 30 seconds for containers to be spun up. Even on free tier.",
  },
  {
    title: "Worldwide",
    description:
      "Code is deployed to where you are. Smart caching helps you deliver the best performance globally.",
  },
  {
    title: "Match cost and value",
    description:
      "Pay for what you use. Translate between cost and business value with consumption based pricing.",
  },
  {
    title: "Roll forward, roll back",
    description:
      "Switch to different versions of your deployments with built in CI/CD for every app.",
  },
  {
    title: "Spike resistant",
    description:
      "Up to 100 concurrent requests per second per app. Up to 10gb compute per request - thats 1TB per second of available compute.",
  },
  {
    title: "Hyperscale",
    description:
      "Scale up and down instantly. 1GB serverless compute handles EACH individual request",
  },
];
