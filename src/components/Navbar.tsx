"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Github } from "lucide-react";
import { FaDiscord } from "react-icons/fa";

export function Navbarr() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="flex justify-between">
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <HoveredLink href="/">Home</HoveredLink>
          <HoveredLink href="/features">Features</HoveredLink>
          <HoveredLink href="/Pricing">Pricing</HoveredLink>
          <HoveredLink href="/">Blog</HoveredLink>
          <button className="inline-flex animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Login
          </button>
          <button>
            <Github className="self-center h-4 w-4" />
          </button>
          <button>
            <FaDiscord className="self-center h-4 w-4" />
          </button>
        </Menu>
      </div>
      <div>
        <menu></menu>
      </div>
    </div>
  );
}
