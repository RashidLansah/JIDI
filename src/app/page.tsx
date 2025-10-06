'use client';

import React from 'react';
import Header from '@/components/Header';
import { Section } from '@/components/Section';
import { Card, CardContent } from '@/components/Card';
import { Button } from '@/components/Button';

const scrollToSection = (hash: string) => {
  const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-zinc-950 overflow-hidden">
        {/* Background Graphics */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main Radial Pattern */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] opacity-10 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w 움직임-full h-full relative">
              {/* Concentric circles */}
              <div className="absolute inset-0 border border-neutral-600 rounded-full"></div>
              <div className="absolute inset-8 border border-neutral-700 rounded-full"></div>
              <div className="absolute inset-16 border border-neutral-800 rounded-full"></div>
              <div className="absolute inset-24 border border-neutral-900 rounded-full"></div>
              
              {/* Radial lines */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent origin-center"
                  style={{ transform: `rotate(${i * 30}deg)` }}
                />
              ))}
              
              {/* Center dot */}
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-neutral-600 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          </div>

          {/* Top Right Geometric Pattern */}
          <div className="absolute top-20 right-20 opacity-30">
            <div className="w-64 h-64 relative">
              {/* Triangles */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[50px] border-l-transparent border-b-[50px] border-b-neutral-400"></div>
              <div className="absolute top-10 right-10 w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] border-b-neutral-500"></div>
              <div className="absolute top-20 right-20 w-0 h-0 border-l-[30px] border-l-transparent border-b-[30px] border-b-neutral-600"></div>
              
              {/* Rectangles */}
              <div className="absolute top-12 right-0 w-24 h-8 border border-neutral-400 opacity-50"></div>
              <div className="absolute top-32 right-8 w-16 h-8 border border-neutral-500 opacity-40"></div>
              <div className="absolute top-52 right-16 w-12 h-8 border border-neutral-600 opacity-30"></div>
            </div>
            </div>

          {/* Bottom Left Diamond Pattern */}
          <div className="absolute bottom-20 left-1/3 opacity-40">
            <div className="w-48 h-48 relative">
              {/* Large diamond */}
              <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-neutral-400 rotate-45 opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
              {/* Medium diamonds */}
              <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-neutral-500 rotate-45 opacity-15 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-neutral-500 rotate-45 opacity-15 transform translate-x-1/2 translate-y-1/2"></div>
              {/* Small diamonds */}
              <div className="absolute top-1/2 left-12 w-8 h-8 bg-neutral-600 rotate-45 opacity-10"></div>
              <div className="absolute top-1/2 right-12 w-8 h-8 bg-neutral-600 rotate-45 opacity-10"></div>
            </div>
          </div>

          {/* Floating Geometric Shapes */}
          <div className="absolute top-1/4 right-1/3 w-24 h-24 opacity-20">
            <div className="relative">
              {/* Nested squares */}
              <div className="absolute inset-0 border border-neutral-400 rotate-45"></div>
              <div className="absolute inset-2 border border-neutral-500 rotate-45"></div>
              <div className="absolute inset-4 border border-neutral-600 rotate-45"></div>
              </div>
              </div>

          <div className="absolute bottom-1/3 right-10 w-32 h-32 opacity-30">
            <div className="relative">
              {/* Nested squares */}
              <div className="absolute inset-0 border border-neutral-400 rotate-12"></div>
              <div className="absolute inset-2 border border-neutral-500 rotate-12"></div>
              <div className="absolute inset-4 border border-neutral-600 rotate-12"></div>
              <div className="absolute inset-6 border border-neutral-700 rotate-12"></div>
              </div>
            </div>

          {/* Additional scattered elements */}
          <div className="absolute top-32 left-1/4 w-8 h-8 bg-neutral-400 rotate-12 opacity-10"></div>
          <div className="absolute top-64 left-1/5 w-6 h-6 bg-neutral-500 rotate-45 opacity-15"></div>
          <div className="absolute bottom-32 right-1/4 w-4 h-4 bg-neutral-600 rotate-30 opacity-20"></div>
          <div className="absolute bottom-48 right-1/3 w-3 h-3 bg-neutral-700 rotate-60 opacity-25"></div>
          
          {/* New geometric cluster */}
          <div className="absolute top-1/2 left-16 opacity-25">
            <div className="relative">
              <div className="w-12 h-12 border-2 border-neutral-500 rotate-45"></div>
              <div className="absolute top-6 left-6 w-6 h-6 bg-neutral-600 rotate-45"></div>
              <div className="absolute top-3 left-3 w-3 h-3 bg-neutral-700"></div>
          </div>
              </div>

          {/* Angular lines pattern */}
          <div className="absolute bottom-1/4 left-1/2 opacity-15">
            <div className="relative">
              <div className="w-40 h-1 bg-gradient-to-r from-transparent via-neutral-400 to-transparent rotate-45"></div>
              <div className="absolute top-4 left-4 w-32 h-1 bg-gradient-to-r from-transparent via-neutral-500 to-transparent rotate-45"></div>
              <div className="absolute top-8 left-8 w-24 h-1 bg-gradient-to-r from-transparent via-neutral-600 to-transparent rotate-45"></div>
              </div>
          </div>
        </div>

        {/* Left Border Image Placeholder */}
        <div className="absolute -left-6 top-0 w-32 h-screen z-20">
          <img 
            src="/images/hero-left-border.jpg" 
            alt="African geometric pattern border"
            className="w-full h-full object-cover opacity-80"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
              if (nextElement) {
                nextElement.style.display = 'block';
              }
            }}
          />
          {/* Temporary placeholder that shows until you add the image */}
          <div className="hidden w-full h-full bg-gradient-to-b from-emerald-400 via-orange-400 to-blue-400 opacity-60"></div>
          </div>
        
        <div className="max-w-7xl mx-auto px-6 min-h-screen relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start w-full">
            
            {/* Left Side - Headline */}
            <div className="pt-24 relative">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight relative z-10 ml-20">
                Empowering Africa Through{' '}
                <span className="text-emerald-400">Ethical AI</span>
          </h1>
              </div>
            
            {/* Right Side - Content (positioned within viewport) */}
            <div className="space-y-8 pt-24 mt-64">
              <p className="text-xl text-neutral-300 leading-relaxed">
                JIDI Institute for Artificial Intelligence & Data Research is an independent nonprofit based in Ghana. We believe in JIDI ("to believe" in Twi) — and we believe in building Africa's AI future.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" onClick={() => scrollToSection('#about')}>
                  Learn More
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('#contact')}>
                  Join Us
            </Button>
              </div>
            </div>
            
              </div>
            </div>

        {/* Recently Featured By */}
        <div className="absolute bottom-32 left-12 right-12 text-center">
          <p className="text-sm text-neutral-500 mb-6">Recently featured by</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-white text-sm font-medium">Jeune Afrique</span>
            <span className="text-white text-sm font-medium">Forbes Africa</span>
            <span className="text-white text-sm font-medium">The Africa Report</span>
            <span className="text-white text-sm font-medium">Fast Company</span>
            <span className="text-white text-sm font-medium">TIME</span>
            <span className="text-white text-sm font-medium">TechCrunch</span>
            <span className="text-white text-sm font-medium">The Atlantic</span>
            <span className="text-white text-sm font-medium">France 24</span>
              </div>
            </div>
      </section>

      {/* JIDI Platform Section */}
      <section className="relative py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-sm text-neutral-500 mb-2 uppercase tracking-wider">Empowering Africa with Ethical AI Infrastructure</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              Connecting research, policy, and innovation to solve Africa's most pressing challenges.
            </h1>
        </div>

          {/* Main Dark Card */}
          <div className="bg-zinc-900 rounded-2xl overflow-hidden">
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Left Side - Text Content */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <div className="w-1 h-6 bg-emerald-500 mr-3"></div>
                  <h3 className="text-xs font-medium text-neutral-400 tracking-wider uppercase">
                    JIDI INSTITUTE
                  </h3>
        </div>
        
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  Who We Are
                </h2>
                
                <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                  JIDI Institute is a nonprofit, independent research hub in Accra, Ghana, dedicated to connecting research, policy, and innovation to solve Africa's most pressing challenges — from health and agriculture to climate resilience and education.
                </p>
                
                <Button className="bg-neutral-800 hover:bg-neutral-700 text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-300 flex items-center gap-2 group">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.38 12l5.42-4.36a1 1 0 011.4.42 1 1 0 01-.42 1.4L6.38 12l4.44 2.94a1 1 0 01.42 1.4 1 1 0 01-1.4-.42L4.38 12z" clipRule="evenodd"/>
                  </svg>
            </Button>
          </div>

              {/* Right Side - African Portrait */}
              <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=600&fit=crop&crop=face&auto=format&q=75"
                  alt="African professional woman"
                  className="w-full h-full object-cover opacity-90"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/70 via-zinc-900/20 to-transparent"></div>
            </div>
        </div>

            {/* Bottom Section - Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-zinc-700">
              {/* Column 1 */}
              <div className="p-8 md:p-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">
                  RESEARCH & INNOVATION
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  African-led applied AI projects in health, climate, agriculture, and governance.
          </p>
                  </div>
                </div>
        </div>
        
              {/* Column 2 */}
              <div className="p-8 md:p-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">
                  CAPACITY BUILDING & EDUCATION
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                  Fellowships, short courses, bootcamps, and collaborations with universities.
          </p>
                  </div>
                </div>
            </div>
        
              {/* Column 3 */}
              <div className="p-8 md:p-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide mb-3">
                  POLICY & ADVOCACY
                </h3>
                <p className="text-neutral-300 text-sm leading-relaxed">
                      Co-designing tools with communities, piloting projects in local contexts, and integrating indigenous knowledge.
                </p>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>


      {/* Mission & Vision Section */}
      <section id="about" className="relative py-20 bg-black border-t-4 border-emerald-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Mission & Vision Content */}
          <div>
              <h3 className="text-emerald-400 text-xs font-medium tracking-wider uppercase mb-4">Mission & Vision</h3>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Empowering Africa through<br />
                ethical AI & Data Science
            </h2>
              
              {/* Mission */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
          </div>
                  <h4 className="text-xl font-bold text-white">Mission</h4>
        </div>
                <p className="text-neutral-300 leading-relaxed ml-14">
                  To empower African communities through responsible, inclusive, and locally relevant AI and Data Science research that drives social impact, informs policy, and builds future-ready talent.
                </p>
          </div>
          
              {/* Vision */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  <h4 className="text-xl font-bold text-white">Vision</h4>
                  </div>
                <p className="text-neutral-300 leading-relaxed ml-14">
                  To become Africa's leading center of excellence for ethical AI and Data Science, where African talent shapes global conversations, solves African problems, and pioneers technology that uplifts humanity.
                </p>
                </div>
          </div>
          
            {/* Right Column - Africa Map */}
            <div className="relative">
              <div className="bg-black rounded-2xl overflow-hidden h-[500px]">
                <img 
                  src="/images/Africa map.png" 
                  alt="Africa AI Map showing AI initiatives across the continent"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextElement) {
                      nextElement.style.display = 'flex';
                    }
                  }}
                />
                {/* Fallback placeholder if image fails to load */}
                <div className="hidden w-full h-full items-center justify-center bg-black">
                <div className="text-center">
                    <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Africa AI Map</h3>
                    <p className="text-neutral-400 text-sm mb-4">Interactive visualization of AI initiatives across Africa</p>
                    <div className="text-xs text-neutral-500 bg-neutral-800/50 px-3 py-2 rounded-lg">
                      Placeholder for AI/Data visualization
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Section */}
      <section className="py-32 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4">Our Focus</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Core focus areas driving impact</h1>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Through strategic research, capacity building, and policy advocacy, we're creating pathways for African leadership in ethical AI development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group cursor-pointer hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 bg-zinc-900 border-zinc-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Research & Innovation</h3>
                <p className="text-neutral-300 text-left">
                  African-led applied AI projects in health, climate, agriculture, and governance sectors across the continent.
                </p>
              </CardContent>
          </Card>
          
            <Card className="group cursor-pointer hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 bg-zinc-900 border-zinc-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Capacity Building</h3>
                <p className="text-neutral-300 text-left">
                  Fellowships, short courses, bootcamps, and strategic collaborations with universities and research institutions.
                </p>
              </CardContent>
          </Card>
          
            <Card className="group cursor-pointer hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 bg-zinc-900 border-zinc-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Policy & Advocacy</h3>
                <p className="text-neutral-300 text-left">
                  Frameworks for AI ethics and governance, supporting governments and regional bodies across Africa.
                </p>
              </CardContent>
          </Card>
          
            <Card className="group cursor-pointer hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 bg-zinc-900 border-zinc-700">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
                <h3 className="text-xl font-bold text-emerald-400 mb-4">Community</h3>
                <p className="text-neutral-300 text-left">
                  Co-designing tools with communities, piloting projects in local contexts, and integrating indigenous knowledge systems across Africa.
                </p>
              </CardContent>
          </Card>
        </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4">Our Initiatives</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Building inclusive AI communities</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Supporting women and underserved communities in AI through targeted programs and partnerships.
            </p>
          </div>
        
          <div className="max-w-4xl mx-auto space-y-8">
            {/* WAIDS Card */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-12 flex items-center gap-12 relative overflow-hidden">
              {/* Geometric Background Shapes */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-8 w-16 h-16 bg-emerald-400 rotate-45 rounded-sm"></div>
                <div className="absolute bottom-8 left-4 w-12 h-12 bg-emerald-500 rotate-12 rounded-full"></div>
                <div className="absolute top-1/2 left-8 w-8 h-8 bg-emerald-300 rotate-90 rounded-sm"></div>
                <div className="absolute bottom-4 right-16 w-20 h-6 bg-emerald-400 rotate-45 rounded-full"></div>
                <div className="absolute top-8 left-1/3 w-6 h-6 bg-emerald-500 rotate-45 rounded-sm"></div>
              </div>
              <div className="flex-1 relative z-10">
                <h3 className="text-3xl font-bold text-emerald-400 mb-6">Women in AI & Data Science (WAIDS)</h3>
                <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                  A mentorship and leadership accelerator supporting women in tech.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-neutral-300">Monthly mentorship sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                    </div>
                    <span className="text-neutral-300">Industry partnerships</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="text-neutral-300">Career development workshops</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-80 h-64 rounded-lg overflow-hidden relative z-10">
                <img src="/images/women ai.png" alt="Women in AI" className="w-full h-full object-contain" />
              </div>
            </div>

            {/* AID Communities Card */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-12 flex items-center gap-12">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-emerald-400 mb-6">AID Communities</h3>
                <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                  Deploying AI tools in underserved areas, from flood prediction to crop disease detection.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <span className="text-neutral-300">Community-led AI projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="text-neutral-300">Accessible training programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <span className="text-neutral-300">Local problem-solving focus</span>
                  </div>
                </div>
              </div>
              <div className="flex-shrink-0 w-80 h-64 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">AID Communities Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4">Stay Informed</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">Latest news & insights</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Stay updated with our latest research findings, policy developments, and community stories.
          </p>
        </div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-8">
                <div className="w-full h-48 bg-gray-700 rounded-lg mb-6"></div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-full">Research</span>
                    <span className="text-xs text-gray-400">Dec 15, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug">New AI Policy Framework for Africa Released</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Our comprehensive policy recommendations for ethical AI governance across African nations.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-8">
                <div className="w-full h-48 bg-gray-700 rounded-lg mb-6"></div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">Community</span>
                    <span className="text-xs text-gray-400">Dec 10, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug">WAIDS Bootcamp Graduates 50 Women</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Celebrating the success of our latest cohort of women in AI and data science.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
              <CardContent className="p-8">
                <div className="w-full h-48 bg-gray-700 rounded-lg mb-6"></div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">Partnership</span>
                    <span className="text-xs text-gray-400">Dec 5, 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug">New University Partnerships Announced</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Expanding our network with leading African universities for collaborative research.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-500 rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-emerald-300 rounded-full"></div>
          <div className="absolute bottom-40 right-1/3 w-20 h-20 bg-emerald-400 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-emerald-400 text-sm font-medium tracking-wider uppercase mb-4">Events & Programs</h2>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">Building AI Capacity Across Africa</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation through hands-on bootcamps, workshops, and major conferences.
            </p>
          </div>
        
          {/* Bootcamps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Tamale Bootcamp */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8 relative overflow-hidden">
              {/* Geometric Background Patterns */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-8 w-16 h-16 bg-emerald-400 rotate-45 rounded-sm"></div>
                <div className="absolute bottom-8 left-4 w-12 h-12 bg-emerald-500 rotate-12 rounded-full"></div>
                <div className="absolute top-1/2 left-8 w-8 h-8 bg-emerald-300 rotate-90 rounded-sm"></div>
                <div className="absolute bottom-4 right-16 w-20 h-6 bg-emerald-400 rotate-45 rounded-full"></div>
                <div className="absolute top-8 left-1/3 w-6 h-6 bg-emerald-500 rotate-45 rounded-sm"></div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">BOOTCAMP</span>
                  <span className="text-sm text-gray-400 font-medium">Q2</span>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Tamale</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Comprehensive AI bootcamp designed for students in Northern Ghana, covering machine learning fundamentals and practical applications.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-neutral-300">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>3-day intensive program</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-neutral-300">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Hands-on projects</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-neutral-300">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Industry mentorship</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button disabled className="w-full bg-gray-600 text-gray-400 font-semibold py-3 rounded-lg cursor-not-allowed">
                    Register Interest
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Kumasi Bootcamp */}
            <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-8 relative overflow-hidden">
              {/* Geometric Background Patterns */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-6 right-6 w-14 h-14 bg-emerald-300 rotate-30 rounded-lg"></div>
                <div className="absolute bottom-6 left-6 w-10 h-10 bg-emerald-400 rotate-60 rounded-full"></div>
                <div className="absolute top-1/3 right-12 w-6 h-6 bg-emerald-500 rotate-120 rounded-sm"></div>
                <div className="absolute bottom-1/3 left-12 w-18 h-4 bg-emerald-300 rotate-15 rounded-full"></div>
                <div className="absolute top-12 left-1/2 w-8 h-8 bg-emerald-400 rotate-75 rounded-sm"></div>
              </div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full">BOOTCAMP</span>
                  <span className="text-sm text-gray-400 font-medium">Q3</span>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Kumasi</h3>
                  <p className="text-neutral-300 leading-relaxed">
                    Advanced AI workshop for students in the Ashanti Region, focusing on data science and AI ethics in African contexts.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-neutral-300">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>4-day intensive program</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-neutral-300">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Real-world case studies</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-neutral-300">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span>Networking opportunities</span>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button disabled className="w-full bg-gray-600 text-gray-400 font-semibold py-3 rounded-lg cursor-not-allowed">
                    Register Interest
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* JIDI AI Summit - Featured Event */}
          <div className="relative">
            <Card className="bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700 text-white overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
              </div>
              
              <CardContent className="p-16 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                  <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-semibold mb-6">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    MAJOR EVENT
                  </div>
                  
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">JIDI AI Summit</h2>
                  <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                    The premier gathering of African AI talent, researchers, and policymakers shaping the future of ethical AI across the continent.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">500+</div>
                      <div className="text-emerald-100">Attendees</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">50+</div>
                      <div className="text-emerald-100">Speakers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold mb-2">3</div>
                      <div className="text-emerald-100">Days</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button className="bg-white/20 hover:bg-white/30 text-white border border-white/30 font-semibold px-8 py-4 rounded-xl text-lg">
                      Coming Soon
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}