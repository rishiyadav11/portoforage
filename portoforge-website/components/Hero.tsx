"use client";
import React, { useState } from "react";
import { SparklesCore } from "./ui/sparkles";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("npx create-portoforage");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  }; 

  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center  relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:scale-105 transition-transform duration-300">
        Welcome to Portoforage
      </h1>

      <h4 className="md:text-5xl text-2xl lg:text-4xl font-semibold text-center  relative z-20 mt-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:scale-105 transition-transform duration-300">
        Build Great Portfolios Effortlessly
      </h4>

      {/* Fancy gradient-glow button */}
      <div className="relative inline-flex items-center justify-center gap-4 group mt-10 z-20">
        <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
        <button
          onClick={handleCopy}
          role="button"
          className="group relative inline-flex cursor-pointer items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
          title="Copy Command"
        >
          {copied ? "Copied!" : "npx create-portoforage"}
          <svg
            aria-hidden="true"
            viewBox="0 0 10 10"
            height="10"
            width="10"
            fill="none"
            className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
          >
            <path
              d="M0 5h7"
              className="transition opacity-0 group-hover:opacity-100"
            ></path>
            <path
              d="M1 1l4 4-4 4"
              className="transition group-hover:translate-x-[3px]"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Hero;
