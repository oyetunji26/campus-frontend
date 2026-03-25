"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Bell, Search, CheckCircle2, ArrowDown } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const STEPS = [
    {
        number: "01",
        icon: <Search size={28} strokeWidth={2} />,
        title: "Pick Your Campus",
        desc: "Tell us your university. We'll track its official housing portal in real-time — no manual refreshing, no stress.",
        accent: "burnt-amber",
        tag: "Setup in 60 seconds",
    },
    {
        number: "02",
        icon: <Bell size={28} strokeWidth={2} />,
        title: "Lighthouse Watches",
        desc: "Our automated system scans the portal every few seconds. The instant a new hostel is listed, we catch it before anyone else.",
        accent: "cool-slate",
        tag: "24/7 monitoring",
    },
    {
        number: "03",
        icon: <CheckCircle2 size={28} strokeWidth={2} />,
        title: "You Get the Spot",
        desc: "You receive an instant WhatsApp alert with all the details. Click, apply, and secure your room — while others are still checking manually.",
        accent: "burnt-amber",
        tag: "Avg. response: 0.4s",
    },
];

export default function HowItWorks() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Section header
            gsap.from(".hiw-header", {
                scrollTrigger: {
                    trigger: ".hiw-header",
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
            });

            // Step cards stagger in
            gsap.from(".step-card", {
                scrollTrigger: {
                    trigger: ".steps-grid",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
            });

            // Connector lines draw in
            gsap.from(".connector-line", {
                scrollTrigger: {
                    trigger: ".steps-grid",
                    start: "top 75%",
                },
                scaleX: 0,
                transformOrigin: "left center",
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.inOut",
            });

            // Numbers count up feel
            gsap.from(".step-number", {
                scrollTrigger: {
                    trigger: ".steps-grid",
                    start: "top 80%",
                },
                scale: 0.5,
                opacity: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: "back.out(1.5)",
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-[#FAFAF8] py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">

                {/* Header */}
                <div className="hiw-header flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
                    <div>
                        <span className="inline-block text-[10px] font-header font-black uppercase tracking-[0.2em] text-burnt-amber border border-burnt-amber/30 rounded-md px-3 py-1 mb-6">
                            How It Works
                        </span>
                        <h2 className="font-header font-black text-5xl md:text-6xl tracking-tighter text-cool-slate leading-[0.95]">
                            Three steps to <br />
                            <span className="text-burnt-amber">your new home.</span>
                        </h2>
                    </div>
                    <p className="font-body text-slate-500 text-lg max-w-sm md:text-right">
                        From sign-up to securing your hostel — CampusCrib does the heavy lifting so you can focus on being a student.
                    </p>
                </div>

                {/* Steps */}
                <div className="steps-grid relative">

                    {/* Desktop Connector Lines */}
                    <div className="hidden md:flex absolute top-[3.5rem] left-0 right-0 items-center justify-between px-[18%] pointer-events-none z-0">
                        <div className="connector-line h-[1px] w-[30%] bg-gradient-to-r from-burnt-amber/40 to-cool-slate/20" />
                        <div className="connector-line h-[1px] w-[30%] bg-gradient-to-r from-cool-slate/20 to-burnt-amber/40" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
                        {STEPS.map((step, idx) => (
                            <div key={idx} className="step-card group relative flex flex-col">

                                {/* Number badge */}
                                <div className="step-number mb-8 flex items-center gap-4">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 font-header font-black text-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
                    ${step.accent === "burnt-amber"
                                            ? "border-burnt-amber text-burnt-amber bg-burnt-amber/10"
                                            : "border-cool-slate text-cool-slate bg-cool-slate/5"
                                        }`}>
                                        {step.number}
                                    </div>
                                    <div className={`flex items-center gap-1.5 text-[10px] font-header font-black uppercase tracking-widest px-3 py-1 rounded-full
                    ${step.accent === "burnt-amber"
                                            ? "text-burnt-amber bg-burnt-amber/10"
                                            : "text-cool-slate bg-cool-slate/10"
                                        }`}>
                                        <div className={`w-1.5 h-1.5 rounded-full animate-pulse ${step.accent === "burnt-amber" ? "bg-burnt-amber" : "bg-cool-slate"}`} />
                                        {step.tag}
                                    </div>
                                </div>

                                {/* Icon block */}
                                <div className={`mb-6 w-14 h-14 rounded-[1.25rem] flex items-center justify-center transition-all duration-500 group-hover:-rotate-6
                  ${step.accent === "burnt-amber"
                                        ? "bg-burnt-amber text-white shadow-lg shadow-burnt-amber/30"
                                        : "bg-cool-slate text-white shadow-lg shadow-cool-slate/20"
                                    }`}>
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="font-header font-black text-2xl md:text-3xl text-cool-slate mb-4 tracking-tight group-hover:text-burnt-amber transition-colors duration-300">
                                    {step.title}
                                </h3>
                                <p className="font-body text-slate-500 text-base leading-relaxed">
                                    {step.desc}
                                </p>

                                {/* Mobile step connector */}
                                {idx < STEPS.length - 1 && (
                                    <div className="md:hidden mt-8 flex items-center gap-3 text-slate-300">
                                        <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                                        <ArrowDown size={16} className="text-burnt-amber" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom accent */}
                <div className="mt-24 p-8 md:p-10 rounded-[2.5rem] bg-cool-slate relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Background decoration */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-burnt-amber/10 blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5 blur-2xl pointer-events-none" />

                    <div className="relative z-10">
                        <p className="font-header font-black text-2xl md:text-3xl text-white tracking-tight mb-1">
                            Ready in under a minute.
                        </p>
                        <p className="font-body text-slate-400 text-sm">No app downloads. No credit card. Just your phone number.</p>
                    </div>

                    <button className="relative z-10 flex-shrink-0 flex items-center gap-2 bg-burnt-amber text-white px-6 py-3.5 rounded-full font-header font-black text-sm uppercase tracking-wider hover:brightness-110 transition-all duration-300 shadow-xl shadow-burnt-amber/30">
                        Start for Free
                        <CheckCircle2 size={16} />
                    </button>
                </div>

            </div>
        </section>
    );
}