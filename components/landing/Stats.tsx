/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, Clock, Star, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
    {
        value: 2400,
        suffix: "+",
        label: "Students Protected",
        sub: "Across 8 universities in Nigeria",
        icon: <TrendingUp size={20} />,
        accent: "burnt-amber",
    },
    {
        value: 0.4,
        suffix: "s",
        label: "Avg. Alert Speed",
        sub: "Fastest in the ecosystem",
        icon: <Clock size={20} />,
        accent: "white",
        decimals: 1,
    },
    {
        value: 98,
        suffix: "%",
        label: "Satisfaction Rate",
        sub: "Based on 1,200+ reviews",
        icon: <Star size={20} />,
        accent: "burnt-amber",
    },
    {
        value: 15,
        suffix: "+",
        label: "Campuses Covered",
        sub: "And growing every month",
        icon: <MapPin size={20} />,
        accent: "white",
    },
];

function AnimatedNumber({ target, suffix, decimals = 0, start }: any) {
    const [display, setDisplay] = useState(
        decimals > 0 ? (0).toFixed(decimals) : "0"
    );
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        if (!start) return;

        const duration = 1800;
        const startTime = performance.now();

        const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = eased * target;
            setDisplay(
                decimals > 0
                    ? current.toFixed(decimals)
                    : Math.floor(current).toLocaleString()
            );
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(tick);
            }
        };

        rafRef.current = requestAnimationFrame(tick);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [start, target, decimals]);

    return (
        <span>
            {display}
            {suffix}
        </span>
    );
}

export default function Stats() {
    const containerRef = useRef<HTMLElement>(null);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        // Set visible immediately so GSAP failure never hides content permanently
        gsap.set(".stat-item", { opacity: 1, y: 0 });

        const ctx = gsap.context(() => {
            // Animate in from invisible
            gsap.from(".stat-item", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    once: true,                          // ← fire once, don't reverse
                },
                y: 60,
                opacity: 0,
                duration: 0.9,
                stagger: 0.15,
                ease: "power4.out",
            });

            gsap.from(".stats-headline", {
                scrollTrigger: {
                    trigger: ".stats-headline",
                    start: "top 85%",
                    once: true,
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
            });

            // Single trigger for counter start — uses the same threshold
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top 80%",
                once: true,
                onEnter: () => setTriggered(true),
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-cool-slate py-28 overflow-hidden relative">

            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-burnt-amber/5 blur-3xl" />
                <div className="absolute bottom-[-15%] left-[-5%] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="white" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-8 relative z-10">

                {/* Header */}
                <div className="stats-headline text-center mb-20">
                    <span className="inline-block text-[10px] font-header font-black uppercase tracking-[0.2em] text-burnt-amber border border-burnt-amber/30 rounded-md px-3 py-1 mb-6">
                        By The Numbers
                    </span>
                    <h2 className="font-header font-black text-4xl md:text-5xl text-white tracking-tighter">
                        The numbers speak{" "}
                        <span className="text-burnt-amber">for themselves.</span>
                    </h2>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {STATS.map((stat, idx) => (
                        <div
                            key={idx}
                            className={`stat-item group relative p-8 rounded-[2rem] border transition-all duration-500 hover:scale-[1.02] cursor-default
                                ${stat.accent === "burnt-amber"
                                    ? "bg-burnt-amber/10 border-burnt-amber/20 hover:border-burnt-amber/50"
                                    : "bg-white/5 border-white/10 hover:border-white/25"
                                }`}
                        >
                            {/* Icon */}
                            <div className={`mb-5 w-10 h-10 rounded-xl flex items-center justify-center
                                ${stat.accent === "burnt-amber"
                                    ? "bg-burnt-amber/20 text-burnt-amber"
                                    : "bg-white/10 text-white"
                                }`}>
                                {stat.icon}
                            </div>

                            {/* Number */}
                            <div className={`font-header font-black text-5xl md:text-6xl mb-3 tracking-tighter
                                ${stat.accent === "burnt-amber" ? "text-burnt-amber" : "text-white"}`}>
                                <AnimatedNumber
                                    target={stat.value}
                                    suffix={stat.suffix}
                                    decimals={stat.decimals ?? 0}
                                    start={triggered}
                                />
                            </div>

                            {/* Label */}
                            <p className="font-header font-bold text-white text-lg mb-1.5 tracking-tight">
                                {stat.label}
                            </p>
                            <p className="font-body text-slate-400 text-sm leading-relaxed">
                                {stat.sub}
                            </p>

                            {/* Hover glow */}
                            <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl
                                ${stat.accent === "burnt-amber" ? "bg-burnt-amber/20" : "bg-white/5"}`}
                            />
                        </div>
                    ))}
                </div>

                {/* Ticker bar */}
                <div className="mt-16 py-5 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xs font-body text-slate-400 uppercase tracking-widest">
                    {["University of Lagos", "OAU Ile-Ife", "LASU", "Unilag", "UNIABUJA", "Babcock", "Covenant University", "YABATECH"].map((uni) => (
                        <span key={uni} className="hover:text-white transition-colors cursor-default">{uni}</span>
                    ))}
                </div>

            </div>
        </section>
    );
}