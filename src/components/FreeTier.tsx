"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function SpecsTable() {
  const specs = [
    { name: "Inactivity Delay", value: "None - Apps Never Sleep" },
    { name: "Hourly Limit", value: "None - Unlimited" },
    { name: "Compute", value: "1024 MB RAM" },
    { name: "Autoscaling", value: "100 x 1024 MB" },
    { name: "API Requests", value: "5000 / month / app" },
    {
      name: "Languages",
      value: (
        <div className="space-y-1">
          <div>JavaScript</div>
          <div>TypeScript</div>
          <div>Python</div>
          <div>Go</div>
        </div>
      ),
    },
    { name: "Integrated Database", value: "1 GB (AWS DynamoDB)" },
    { name: "Integrated Object Storage", value: "1 GB (AWS S3)" },
    { name: "Edge Locations", value: "Closest of 18+ Regions" },
    { name: "Precision Cron", value: "3 jobs / app" },
    { name: "Logs History - Application", value: "7 Days" },
    { name: "Logs History - Network", value: "7 Days" },
    { name: "SSL Certificates", value: <Check className="h-4 w-4" /> },
    { name: "Build on git push", value: <Check className="h-4 w-4" /> },
  ];

  return (
    <div className=" text-white p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">
            Researching Cyclic? Just want the specs?
          </h1>
          <p className="text-gray-400">
            Get started now. Here is what you get with the{" "}
            <span className="text-blue-400">Free</span> tier:
          </p>
        </div>

        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardContent className="p-0">
            <div className="divide-y divide-zinc-800">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between items-start p-4 hover:bg-zinc-800/50 transition-colors"
                >
                  <div className="text-sm text-gray-400">{spec.name}</div>
                  <div className="text-sm text-right font-medium text-white">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-4 p-6">
            <Button>Deploy Now</Button>
            <Button variant="outline">Get More Features</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
