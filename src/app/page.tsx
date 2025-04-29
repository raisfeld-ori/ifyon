'use client';

import { FC } from "react";

const SpecificationDocument: FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.6; r: 3px; }
          50% { opacity: 1; r: 4px; }
        }
        @keyframes pulseMedium {
          0%, 100% { opacity: 0.6; r: 3.5px; }
          50% { opacity: 1; r: 4.5px; }
        }
        @keyframes pulseSlower {
          0%, 100% { opacity: 0.6; r: 4px; }
          50% { opacity: 1; r: 5px; }
        }
        @keyframes line1 {
          0%, 100% { stroke-dasharray: 0, 100; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 100, 0; stroke-dashoffset: 100; }
        }
        @keyframes line2 {
          0%, 100% { stroke-dasharray: 0, 100; stroke-dashoffset: 0; }
          50% { stroke-dasharray: 100, 0; stroke-dashoffset: -100; }
        }
        @keyframes line3 {
          0%, 100% { stroke-dasharray: 100, 0; stroke-dashoffset: 100; }
          50% { stroke-dasharray: 0, 100; stroke-dashoffset: 0; }
        }
        @keyframes float3d1 {
          0%, 100% { transform: translateZ(20px) rotateX(10deg) rotateY(-10deg); }
          25% { transform: translateZ(50px) rotateX(-5deg) rotateY(15deg); }
          50% { transform: translateZ(30px) rotateX(-15deg) rotateY(-5deg); }
          75% { transform: translateZ(40px) rotateX(5deg) rotateY(-20deg); }
        }
        @keyframes float3d2 {
          0%, 100% { transform: translateZ(30px) rotateX(-12deg) rotateY(5deg); }
          25% { transform: translateZ(60px) rotateX(7deg) rotateY(-10deg); }
          50% { transform: translateZ(20px) rotateX(17deg) rotateY(7deg); }
          75% { transform: translateZ(40px) rotateX(-7deg) rotateY(12deg); }
        }
        @keyframes float3d3 {
          0%, 100% { transform: translateZ(40px) rotateX(15deg) rotateY(10deg); }
          25% { transform: translateZ(20px) rotateX(-10deg) rotateY(-15deg); }
          50% { transform: translateZ(50px) rotateX(5deg) rotateY(20deg); }
          75% { transform: translateZ(30px) rotateX(-15deg) rotateY(-5deg); }
        }
        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(0.8); filter: blur(1px); }
          50% { opacity: 0.8; transform: scale(1.2); filter: blur(0px); }
          100% { opacity: 0.3; transform: scale(0.8); filter: blur(1px); }
        }
        @keyframes floatingParticle {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -15px) rotate(5deg); }
          50% { transform: translate(-5px, -25px) rotate(-5deg); }
          75% { transform: translate(-15px, -5px) rotate(3deg); }
        }
        @keyframes shootingStar {
          0% { transform: translate(-100px, -100px) rotate(45deg) scale(0.1); opacity: 0; }
          10% { transform: translate(-80px, -80px) rotate(45deg) scale(0.2); opacity: 1; }
          100% { transform: translate(100vw, 100vh) rotate(45deg) scale(0.01); opacity: 0; }
        }
        @keyframes borderGradient {
          0%, 100% { border-image-source: linear-gradient(to bottom right, #3b82f6, #8b5cf6, #ec4899); }
          33% { border-image-source: linear-gradient(to bottom right, #8b5cf6, #ec4899, #3b82f6); }
          66% { border-image-source: linear-gradient(to bottom right, #ec4899, #3b82f6, #8b5cf6); }
        }
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        @keyframes ripple {
          0% { box-shadow: 0 0 0 0 rgba(147, 51, 234, 0.3); }
          70% { box-shadow: 0 0 0 10px rgba(147, 51, 234, 0); }
          100% { box-shadow: 0 0 0 0 rgba(147, 51, 234, 0); }
        }
        @keyframes dnaRotate {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          100% { transform: rotateY(360deg) rotateX(360deg); }
        }
        @keyframes strandMove1 {
          0%, 100% { transform: translateY(0) rotateX(0); }
          50% { transform: translateY(10px) rotateX(180deg); }
        }
        @keyframes strandMove2 {
          0%, 100% { transform: translateY(10px) rotateX(180deg); }
          50% { transform: translateY(0) rotateX(0); }
        }
        .node-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        .node-pulse-medium {
          animation: pulseMedium 5s ease-in-out infinite;
        }
        .node-pulse-slower {
          animation: pulseSlower 6s ease-in-out infinite;
        }
        .line-anim-1 {
          animation: line1 15s ease-in-out infinite;
        }
        .line-anim-2 {
          animation: line2 20s ease-in-out infinite;
        }
        .line-anim-3 {
          animation: line3 25s ease-in-out infinite;
        }
        .float-3d-1 {
          animation: float3d1 12s ease-in-out infinite;
          backface-visibility: hidden;
        }
        .float-3d-2 {
          animation: float3d2 15s ease-in-out infinite;
          backface-visibility: hidden;
        }
        .float-3d-3 {
          animation: float3d3 18s ease-in-out infinite;
          backface-visibility: hidden;
        }
        .twinkle-animation {
          animation: twinkle 3s ease-in-out infinite;
        }
        .floating-particle {
          animation: floatingParticle 10s ease-in-out infinite;
        }
        .shooting-star {
          animation: shootingStar 5s linear infinite;
        }
        .animated-border {
          border-image-slice: 1;
          border-width: 5px;
          border-image-source: linear-gradient(to bottom right, #3b82f6, #8b5cf6, #ec4899);
          animation: borderGradient 10s ease infinite;
        }
        .breathe-animation {
          animation: breathe 8s ease-in-out infinite;
        }
        .ripple-animation {
          animation: ripple 3s ease-in-out infinite;
        }
        .dna-rotate {
          animation: dnaRotate 20s linear infinite;
          transform-style: preserve-3d;
        }
        .dna-strand-1 {
          animation: strandMove1 2s ease-in-out infinite;
        }
        .dna-strand-2 {
          animation: strandMove2 2s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        .animation-delay-2500 {
          animation-delay: 2500ms;
        }
        .animation-delay-3000 {
          animation-delay: 3000ms;
        }
        .animation-delay-3500 {
          animation-delay: 3500ms;
        }
        .animation-delay-4000 {
          animation-delay: 4000ms;
        }
        .animation-delay-5000 {
          animation-delay: 5000ms;
        }
        .animation-delay-6000 {
          animation-delay: 6000ms;
        }
        .animation-delay-7000 {
          animation-delay: 7000ms;
        }
        .perspective-1000 {
          perspective: 1000px;
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 animate-gradient">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
         
        {/* Fractal Network Animation */}
        <div className="absolute inset-0 overflow-hidden opacity-50 z-10">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            {/* Nodes */}
            <circle cx="20%" cy="30%" r="3" className="fill-blue-400 dark:fill-blue-300 node-pulse-slow" filter="url(#glow)" />
            <circle cx="35%" cy="15%" r="4" className="fill-purple-400 dark:fill-purple-300 node-pulse-slower" filter="url(#glow)" />
            <circle cx="60%" cy="20%" r="3" className="fill-pink-400 dark:fill-pink-300 node-pulse-slow" filter="url(#glow)" />
            <circle cx="80%" cy="30%" r="3.5" className="fill-indigo-400 dark:fill-indigo-300 node-pulse-medium" filter="url(#glow)" />
            <circle cx="90%" cy="60%" r="4" className="fill-blue-400 dark:fill-blue-300 node-pulse-slower" filter="url(#glow)" />
            <circle cx="75%" cy="75%" r="3" className="fill-purple-400 dark:fill-purple-300 node-pulse-slow" filter="url(#glow)" />
            <circle cx="50%" cy="85%" r="4" className="fill-pink-400 dark:fill-pink-300 node-pulse-medium" filter="url(#glow)" />
            <circle cx="25%" cy="70%" r="3.5" className="fill-indigo-400 dark:fill-indigo-300 node-pulse-slower" filter="url(#glow)" />
            <circle cx="10%" cy="50%" r="3" className="fill-blue-400 dark:fill-blue-300 node-pulse-medium" filter="url(#glow)" />
            <circle cx="40%" cy="40%" r="4" className="fill-purple-400 dark:fill-purple-300 node-pulse-slow" filter="url(#glow)" />
            <circle cx="65%" cy="60%" r="3" className="fill-pink-400 dark:fill-pink-300 node-pulse-slower" filter="url(#glow)" />
            
            {/* Connection Lines - Increased stroke-width for visibility */}
            <path d="M20%,30% Q30%,20% 35%,15%" className="stroke-blue-400 dark:stroke-blue-300 stroke-[2] opacity-80 line-anim-1" fill="none" />
            <path d="M35%,15% Q50%,10% 60%,20%" className="stroke-purple-400 dark:stroke-purple-300 stroke-[2] opacity-80 line-anim-2" fill="none" />
            <path d="M60%,20% Q70%,25% 80%,30%" className="stroke-pink-400 dark:stroke-pink-300 stroke-[2] opacity-80 line-anim-3" fill="none" />
            <path d="M80%,30% Q90%,45% 90%,60%" className="stroke-indigo-400 dark:stroke-indigo-300 stroke-[2] opacity-80 line-anim-1" fill="none" />
            <path d="M90%,60% Q80%,70% 75%,75%" className="stroke-blue-400 dark:stroke-blue-300 stroke-[2] opacity-80 line-anim-2" fill="none" />
            <path d="M75%,75% Q60%,80% 50%,85%" className="stroke-purple-400 dark:stroke-purple-300 stroke-[2] opacity-80 line-anim-3" fill="none" />
            <path d="M50%,85% Q35%,80% 25%,70%" className="stroke-pink-400 dark:stroke-pink-300 stroke-[2] opacity-80 line-anim-1" fill="none" />
            <path d="M25%,70% Q15%,60% 10%,50%" className="stroke-indigo-400 dark:stroke-indigo-300 stroke-[2] opacity-80 line-anim-2" fill="none" />
            <path d="M10%,50% Q20%,40% 40%,40%" className="stroke-blue-400 dark:stroke-blue-300 stroke-[2] opacity-80 line-anim-3" fill="none" />
            <path d="M40%,40% Q50%,50% 65%,60%" className="stroke-purple-400 dark:stroke-purple-300 stroke-[2] opacity-80 line-anim-1" fill="none" />
            <path d="M65%,60% Q55%,40% 40%,40%" className="stroke-pink-400 dark:stroke-pink-300 stroke-[2] opacity-80 line-anim-2" fill="none" />
            <path d="M40%,40% Q30%,30% 20%,30%" className="stroke-indigo-400 dark:stroke-indigo-300 stroke-[2] opacity-80 line-anim-3" fill="none" />
            
            {/* Fractal Branches - Increased stroke-width for visibility */}
            <path d="M40%,40% Q50%,30% 60%,20%" className="stroke-blue-400 dark:stroke-blue-300 stroke-[2] opacity-70 line-anim-1" fill="none" />
            <path d="M65%,60% Q75%,65% 80%,30%" className="stroke-purple-400 dark:stroke-purple-300 stroke-[2] opacity-70 line-anim-2" fill="none" />
            <path d="M20%,30% Q30%,50% 25%,70%" className="stroke-pink-400 dark:stroke-pink-300 stroke-[2] opacity-70 line-anim-3" fill="none" />
            <path d="M50%,85% Q60%,70% 65%,60%" className="stroke-indigo-400 dark:stroke-indigo-300 stroke-[2] opacity-70 line-anim-1" fill="none" />
            <path d="M35%,15% Q15%,30% 10%,50%" className="stroke-blue-400 dark:stroke-blue-300 stroke-[2] opacity-70 line-anim-2" fill="none" />
            <path d="M80%,30% Q70%,55% 75%,75%" className="stroke-purple-400 dark:stroke-purple-300 stroke-[2] opacity-70 line-anim-3" fill="none" />
          </svg>
        </div>
        
        {/* Floating Particles Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div className="absolute h-12 w-12 bg-gradient-to-br from-blue-300/30 to-purple-300/30 dark:from-blue-500/30 dark:to-purple-500/30 rounded-full top-1/6 left-1/6 floating-particle" />
          <div className="absolute h-10 w-10 bg-gradient-to-br from-pink-300/30 to-orange-300/30 dark:from-pink-500/30 dark:to-orange-500/30 rounded-full top-2/3 right-1/6 floating-particle animation-delay-2000" />
          <div className="absolute h-8 w-8 bg-gradient-to-br from-green-300/30 to-teal-300/30 dark:from-green-500/30 dark:to-teal-500/30 rounded-full bottom-1/6 left-1/3 floating-particle animation-delay-4000" />
          <div className="absolute h-14 w-14 bg-gradient-to-br from-yellow-300/20 to-amber-300/20 dark:from-yellow-500/20 dark:to-amber-500/20 rounded-full top-1/3 right-1/3 floating-particle animation-delay-6000" />
        </div>
        
        {/* Shooting Stars Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <div className="absolute h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent top-1/4 left-0 shooting-star" style={{transformOrigin: 'right center'}} />
          <div className="absolute h-1 w-16 bg-gradient-to-r from-transparent via-white to-transparent top-1/3 left-1/4 shooting-star animation-delay-3000" style={{transformOrigin: 'right center'}} />
          <div className="absolute h-1 w-24 bg-gradient-to-r from-transparent via-white to-transparent top-1/2 left-0 shooting-star animation-delay-5000" style={{transformOrigin: 'right center'}} />
          <div className="absolute h-1 w-12 bg-gradient-to-r from-transparent via-white to-transparent top-2/3 left-1/3 shooting-star animation-delay-7000" style={{transformOrigin: 'right center'}} />
        </div>

        {/* New Sparkle Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute h-8 w-8 bg-yellow-200 dark:bg-yellow-100 rounded-full top-1/4 left-1/4 twinkle-animation" />
          <div className="absolute h-6 w-6 bg-blue-200 dark:bg-blue-100 rounded-full top-3/4 left-1/3 twinkle-animation animation-delay-1000" />
          <div className="absolute h-2 w-3 bg-purple-200 dark:bg-purple-100 rounded-full top-1/3 right-1/4 twinkle-animation animation-delay-2000" />
          <div className="absolute h-3 w-5 bg-pink-200 dark:bg-pink-100 rounded-full bottom-1/4 right-1/3 twinkle-animation animation-delay-3000" />
          <div className="absolute h-6 w-6 bg-green-200 dark:bg-green-100 rounded-full bottom-1/3 left-1/6 twinkle-animation animation-delay-4000" />
          <div className="absolute h-3 w-3 bg-orange-200 dark:bg-orange-100 rounded-full top-1/2 right-1/6 twinkle-animation animation-delay-2500" />
          <div className="absolute h-7 w-7 bg-teal-200 dark:bg-teal-100 rounded-full bottom-1/2 left-2/5 twinkle-animation animation-delay-3500" />
        </div>
        
        {/* 3D Floating Cards Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none perspective-1000">
          <div className="absolute w-48 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-600/20 dark:to-purple-600/20 rounded-lg shadow-lg top-1/4 left-1/4 float-3d-1 backdrop-blur-sm border border-white/20 dark:border-white/10" />
          <div className="absolute w-40 h-28 bg-gradient-to-br from-pink-400/20 to-orange-400/20 dark:from-pink-600/20 dark:to-orange-600/20 rounded-lg shadow-lg bottom-1/4 right-1/4 float-3d-2 backdrop-blur-sm border border-white/20 dark:border-white/10" />
          <div className="absolute w-36 h-24 bg-gradient-to-br from-green-400/20 to-teal-400/20 dark:from-green-600/20 dark:to-teal-600/20 rounded-lg shadow-lg top-1/2 right-1/3 float-3d-3 backdrop-blur-sm border border-white/20 dark:border-white/10" />
        </div>
        
        {/* DNA Helix Animation */}
        <div className="absolute right-10 bottom-10 w-40 h-64 perspective-1000 opacity-40 z-10 pointer-events-none">
          <div className="relative w-full h-full dna-rotate">
            {[...Array(12)].map((_, i) => (
              <div key={`strand-1-${i}`} className="absolute left-0 w-4 h-4 rounded-full bg-purple-500 dark:bg-purple-400 dna-strand-1" style={{top: `${i * 20}px`, left: `${10 + Math.sin(i * 0.5) * 10}px`}} />
            ))}
            {[...Array(12)].map((_, i) => (
              <div key={`strand-2-${i}`} className="absolute right-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400 dna-strand-2" style={{top: `${i * 20}px`, right: `${10 + Math.sin(i * 0.5 + Math.PI) * 10}px`}} />
            ))}
            {[...Array(12)].map((_, i) => (
              <div key={`connector-${i}`} className="absolute h-0.5 bg-gray-300 dark:bg-gray-500" style={{top: `${i * 20 + 2}px`, left: `${14 + Math.sin(i * 0.5) * 10}px`, width: `${12 + Math.cos(i * 0.5) * 10}px`, transform: `rotate(${i * 15}deg)`}} />
            ))}
          </div>
        </div>
      </div>

      {/* Document Container with Border and Breathing Animation */}
      <div className="relative z-50 max-w-6xl mx-auto my-8 p-1 rounded-lg shadow-xl transition-colors">
        <div className="animated-border rounded-lg overflow-hidden">
          <div className="p-8 bg-white dark:bg-gray-800">
            <header className="mb-8 p-6 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-sm">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Project Specification Document</h1>
                <p className="text-gray-600 dark:text-gray-400">Last Updated: {new Date().toLocaleDateString()}</p>
              </div>
            </header>

            <main className="max-w-6xl mx-auto">
              {/* Top row - Overview & Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Project Overview */}
                <section className="transform transition-all hover:scale-[1.01] duration-300">
                  <div className="h-full flex flex-col">
                    <h2 className="text-2xl font-semibold mb-3 dark:text-white flex items-center">
                      <span className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3 text-blue-600 dark:text-blue-400">1</span>
                      Project Overview
                    </h2>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-900/30 p-6 rounded-lg shadow-sm transition-colors ripple-animation flex-grow">
                      <p className="mb-4 dark:text-gray-300">A social media-like app that is secluded for a spesific school or group</p>
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <h3 className="font-medium mb-2 dark:text-white">Project Goals</h3>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                            <li>Creating a social media software</li>
                            <li>Selling the software at real schools</li>
                            <li>See a change in the social life of students</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2 dark:text-white">Target Audience</h3>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                            <li>Students</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Features and Requirements */}
                <section className="transform transition-all hover:scale-[1.01] duration-300">
                  <div className="h-full flex flex-col">
                    <h2 className="text-2xl font-semibold mb-3 dark:text-white flex items-center">
                      <span className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3 text-purple-600 dark:text-purple-400">2</span>
                      Features & Requirements
                    </h2>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-purple-900/30 p-6 rounded-lg shadow-sm transition-colors ripple-animation flex-grow">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium mb-2 dark:text-white">Core Features</h3>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                            <li>Social media features</li>
                            <li>AI connection feature</li>
                            <li>Proven success at a school</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2 dark:text-white">Technical Requirements</h3>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                            <li>exe/apk applications</li>
                            <li>full flow tests</li>
                            <li>Online access</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Middle section - Tech Stack & Architecture in a featured box */}
              <section className="mb-8 transform transition-all hover:scale-[1.01] duration-300">
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-lg shadow-md">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <h2 className="text-2xl font-semibold mb-3 dark:text-white flex items-center">
                        <span className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3 text-green-600 dark:text-green-400">3</span>
                        Technical Stack
                      </h2>
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-200">Frontend</h3>
                          <ul className="space-y-1">
                            <li className="bg-white dark:bg-gray-700 px-3 py-1 rounded-md shadow-sm text-gray-600 dark:text-gray-300">React</li>
                            <li className="bg-white dark:bg-gray-700 px-3 py-1 rounded-md shadow-sm text-gray-600 dark:text-gray-300">TypeScript</li>
                            <li className="bg-white dark:bg-gray-700 px-3 py-1 rounded-md shadow-sm text-gray-600 dark:text-gray-300">Tailwind CSS</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2 text-gray-700 dark:text-gray-200">Backend</h3>
                          <ul className="space-y-1">
                            <li className="bg-white dark:bg-gray-700 px-3 py-1 rounded-md shadow-sm text-gray-600 dark:text-gray-300">Rust</li>
                            <li className="bg-white dark:bg-gray-700 px-3 py-1 rounded-md shadow-sm text-gray-600 dark:text-gray-300">Firebase</li>
                            <li className="bg-white dark:bg-gray-700 px-3 py-1 rounded-md shadow-sm text-gray-600 dark:text-gray-300">Tauri</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h2 className="text-2xl font-semibold mb-3 dark:text-white flex items-center">
                        <span className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center mr-3 text-teal-600 dark:text-teal-400">4</span>
                        Architecture
                      </h2>
                      <div className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow-sm">
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-medium mb-2 dark:text-white">System Architecture</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              The system architecture will use Tauri with React.
                              Tauri will allow creating a .exe and .apk while also giving a simple and familiar Development experience.
                              React is the modern default for creating websites, and has the most support out of any other framework.
                              </p>
                          </div>
                          <div>
                            <h3 className="font-medium mb-2 dark:text-white">Data Flow</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                              Firestore/Chats -{">"} list of user chats, where each chat document is made up of messages. Each chatID is made up of the 2 users in the chat<br></br>
                              Firestore/Posts -{">"} list of posts, where each post has a userID, image, etc.<br></br>
                              Cloudinary -{">"} Storage of images<br></br>
                              Firebase/auth -{">"} Authentication and basic user data (ID, name password, etc)<br></br>
                              Firstore/Users -{">"} extended users data, has the user's images, Friends, etc.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Security & Testing in a horizontal layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Security */}
                <section className="transform transition-all hover:scale-[1.01] duration-300">
                  <div className="h-full flex flex-col">
                    <h2 className="text-2xl font-semibold mb-3 dark:text-white flex items-center">
                      <span className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mr-3 text-red-600 dark:text-red-400">5</span>
                      Security
                    </h2>
                    <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-red-900/20 p-6 rounded-lg shadow-sm transition-colors ripple-animation flex-grow">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium mb-2 dark:text-white">Authentication & Authorization</h3>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                            <li>Firebase auth</li>
                            <li>Content manager</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2 dark:text-white">Data Protection</h3>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                            <li>Firebase security rules</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Testing Strategy */}
                <section className="transform transition-all hover:scale-[1.01] duration-300">
                  <div className="h-full flex flex-col">
                    <h2 className="text-2xl font-semibold mb-3 dark:text-white flex items-center">
                      <span className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900 flex items-center justify-center mr-3 text-cyan-600 dark:text-cyan-400">6</span>
                      Testing Strategy
                    </h2>
                    <div className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-900 dark:to-cyan-900/20 p-6 rounded-lg shadow-sm transition-colors ripple-animation flex-grow">
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium mb-2 dark:text-white">Testing Types</h3>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                            <li>Integration Testing</li>
                            <li>End-to-End Testing</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-medium mb-2 dark:text-white">Quality Assurance</h3>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                            <li>Real world school testing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>

              {/* Bottom row with Timeline & Risks */}
              <div className="grid grid-cols-1 gap-6 mb-6">
                {/* Timeline and Milestones */}
                <section className="transform transition-all hover:scale-[1.01] duration-300">
                  <h2 className="text-2xl font-semibold mb-3 dark:text-white flex items-center">
                    <span className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900 flex items-center justify-center mr-3 text-amber-600 dark:text-amber-400">7</span>
                    Timeline and Milestones
                  </h2>
                  <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-gray-900 dark:to-amber-900/20 p-6 rounded-lg shadow-sm transition-colors ripple-animation">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
                        <h3 className="font-medium dark:text-white">Phase 1: Planning</h3>
                        <p className="text-gray-600 dark:text-gray-400">Duration: 1 monthes</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-green-500">
                        <h3 className="font-medium dark:text-white">Phase 2: Development</h3>
                        <p className="text-gray-600 dark:text-gray-400">Duration: 2 monthes</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
                        <h3 className="font-medium dark:text-white">Phase 3: Testing</h3>
                        <p className="text-gray-600 dark:text-gray-400">Duration: 1 monthes</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border-l-4 border-orange-500">
                        <h3 className="font-medium dark:text-white">Phase 4: Deployment</h3>
                        <p className="text-gray-600 dark:text-gray-400">Duration: 2 monthes</p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Risk Management */}
                <section className="transform transition-all hover:scale-[1.01] duration-300">
                  <h2 className="text-2xl font-semibold mb-3 dark:text-white flex items-center">
                    <span className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900 flex items-center justify-center mr-3 text-rose-600 dark:text-rose-400">8</span>
                    Risk Management
                  </h2>
                  <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-900 dark:to-rose-900/20 p-6 rounded-lg shadow-sm transition-colors ripple-animation">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h3 className="font-medium mb-2 dark:text-white">Identified Risks</h3>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
                            <p className="text-gray-600 dark:text-gray-400">Law requirements for schools</p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
                            <p className="text-gray-600 dark:text-gray-400">Bullying and mistreatment from the app</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2 dark:text-white">Mitigation Strategies</h3>
                        <div className="space-y-2">
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
                            <p className="text-gray-600 dark:text-gray-400">Assistance from School advisors</p>
                          </div>
                          <div className="bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
                            <p className="text-gray-600 dark:text-gray-400">Content manager</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </main>

            <footer className="mt-8 p-6 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Hibori. All rights reserved.</p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificationDocument;
