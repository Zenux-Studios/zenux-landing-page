"use client";

import { Monitor, Rocket, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MagicCard } from "./ui/magic-card";

const features = [
  {
    icon: Monitor,
    title: "Run locally, run in the cloud.",
    description:
      "An execution environment that feels familiar on both local and in the cloud. Optimize for speed from idea to live in production.",
  },
  {
    icon: Rocket,
    title: "Build and deploy in seconds.",
    description:
      "The fastest build system you have ever seen. Seriously, you will be shocked. We sometimes refresh the page because we think we are seeing cached results. For real, it is that fast.",
  },
  {
    icon: TrendingUp,
    title: "Scale up and scale out.",
    description:
      "Built and deployed with global scale enterprise grade serverless primitives. Go from proof of concept to global load without re-architecting your app.",
  },
];

export default function Features() {
  return (
    <div className="p-4 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The best code is the code you don't have to write.
          </h2>
          <p className="text-gray-400">
            Focus on building, let us handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <MagicCard
                key={index}
                className="bg-zinc-900/50 border-zinc-800 hover:border-zinc-700 transition-colors duration-200"
              >
                <CardContent className="pt-6">
                  <div className="rounded-lg bg-blue-500/10 w-12 h-12 flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </MagicCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
