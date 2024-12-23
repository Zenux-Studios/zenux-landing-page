"use client";

import {
  Cloud,
  Database,
  Globe,
  Link,
  Monitor,
  Server,
  Settings,
  Shield,
  Workflow,
  Cog,
  Bell,
  BadgeIcon as Certificate,
  Code,
} from "lucide-react";

export default function BehindTheSchenes() {
  const services = [
    // First row
    [
      { name: "Route53", icon: Globe, color: "bg-purple-500" },
      { name: "Cloud Formation", icon: Cloud, color: "bg-pink-500" },
      { name: "API Gateway", icon: Link, color: "bg-purple-500" },
      { name: "Cloud Front", icon: Monitor, color: "bg-purple-500" },
      { name: "Cloud Watch", icon: Bell, color: "bg-pink-500" },
      { name: "Lambda", icon: Server, color: "bg-orange-500" },
      { name: "S3", icon: Database, color: "bg-green-500" },
      { name: "Dynamo DB", icon: Database, color: "bg-blue-500" },
    ],
    // Second row
    [
      { name: "Step Functions", icon: Workflow, color: "bg-pink-500" },
      { name: "SQS", icon: Settings, color: "bg-pink-500" },
      { name: "Event Bridge", icon: Cog, color: "bg-pink-500" },
      { name: "Certificate Manager", icon: Certificate, color: "bg-red-500" },
      { name: "Code Build", icon: Code, color: "bg-blue-500" },
    ],
  ];

  return (
    <div className=" text-white p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your code on AWS-backed infrastructure
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let us handle everything or target Zenux deployments at your own
            AWS account for complete control.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-4"
            >
              {row.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="group flex flex-col items-center justify-center"
                  >
                    <div
                      className={`w-16 h-16 rounded-lg flex items-center justify-center mb-2 transition-all duration-200 ${service.color}/10 group-hover:${service.color}/20`}
                    >
                      <IconComponent
                        className={`w-8 h-8 transition-colors duration-200 ${service.color.replace(
                          "bg",
                          "text"
                        )}`}
                      />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-gray-300 text-center transition-colors duration-200">
                      {service.name}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
