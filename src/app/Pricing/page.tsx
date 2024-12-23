"use client";

import { ArrowRightIcon, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import AnimatedShinyText from "@/components/ui/shinny-text";
import { cn } from "@/lib/utils";
import ButtonCard from "@/components/ButtonCard";

const cardHoverClass =
  "transition-all duration-300 ease-in-out hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20";

export default function PricingCards() {
  return (
    <div className=" w-full dark h-screen mt-32">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <ButtonCard text="Flexible Pricing" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Only pay for what you use.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Pricing scales up and down with your usage. Match cost and value.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Free Tier */}
          <Card
            className={`flex flex-col bg-black/40 border-gray-800 cursor-pointer ${cardHoverClass}`}
          >
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white mt-2">
                Free Forever
              </CardTitle>
              <p className="text-sm text-gray-400 mt-4">
                Generous free tier to help you prototype and learn.
              </p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {[
                  "2 Apps",
                  "1024 MB RAM Compute",
                  "1000 API requests / month",
                  "1 GB S3 Storage",
                  "1 GB DynamoDB Database",
                  "900 API requests / month",
                  "3 jobs / app (Precision Cron)",
                  "SSL Certificate",
                  "Custom Domain",
                  "Build on Git Push",
                  "Community Support",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button className="w-full bg-transparent hover:bg-emerald-500 text-emerald-500 hover:text-white border border-emerald-500">
                Browse Components
              </Button>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-400">
                Questions?
              </a>
            </CardFooter>
          </Card>

          {/* Custom Components Tier */}
          <Card
            className={`flex flex-col bg-black/40 border-gray-800 ${cardHoverClass}`}
          >
            <CardHeader>
              <div className="text-emerald-500 text-sm font-medium">
                Usage Based
              </div>
              <div>
                <CardTitle className="text-3xl font-bold text-white mt-2">
                  $ <span className="text-5xl">2</span>
                </CardTitle>
                <span className="text-gray-400 text-lg">
                  /app environment/month
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Consumption charges beyond quota.
              </p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {[
                  "All of Free Forever",
                  "App Environments",
                  "Accelerated Startup",
                  "Custom Domains",
                  "24-hour support response time",
                  "Private communication channel",
                  "Personal & Private Repositories",
                  "$0.45 / 11,000 API Requests",
                  "$0.05 / GB / month (S3 Storage)",
                  "Precision Cron every minute",
                  "Email Support",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button className="w-full bg-transparent hover:bg-emerald-500 text-emerald-500 hover:text-white border border-emerald-500">
                Buy Now
              </Button>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-400">
                Questions?
              </a>
            </CardFooter>
          </Card>

          {/* Pages Tier */}
          <Card
            className={`flex flex-col bg-[#1B2333] border-emerald-500 shadow-lg shadow-emerald-500/20 ${cardHoverClass}"`}
          >
            <CardHeader>
              <div className="text-emerald-500 text-sm font-medium">Team</div>
              <div>
                <CardTitle className="text-3xl font-bold text-white mt-2">
                  $ <span className="text-5xl">25</span>
                </CardTitle>
                <span className="text-gray-400 text-lg">
                  /team member/annual
                </span>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Unlock additional developer productivity features.
              </p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {[
                  "All of Free Forever",
                  "Unlimited Apps",
                  "Unlimited Precision Crons",
                  "Personal, Private & Organization Repositories",
                  "Chat Support",
                  "Usage-based charges beyond quota",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white">
                Buy Now
              </Button>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-400">
                Questions?
              </a>
            </CardFooter>
          </Card>

          {/* Multi Page Website Tier */}
          <Card
            className={`flex flex-col bg-black/40 border-gray-800 ${cardHoverClass}`}
          >
            <CardHeader>
              <div className="text-emerald-500 text-sm font-medium">
                Enterprise Scale
              </div>
              <div>
                <span className="text-gray-400 text-sm">starts at</span>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Specialized data governance, security, compliance and auditing
                handled. Schedule a review and we can tailor a solution that
                meets your requirements.
              </p>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {[
                  "Configurable data retention",
                  "Log drains",
                  "Configurable Log Retention",
                  "Dedicated relationship managert",
                  "Annual architectural reviews",
                  "Multi-region Active-Active",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-emerald-500" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button className="w-full bg-transparent hover:bg-emerald-500 text-emerald-500 hover:text-white border border-emerald-500">
                Contact Us
              </Button>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-400">
                Questions?
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
