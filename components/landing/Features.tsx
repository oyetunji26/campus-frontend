"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bell, ShieldCheck, Users, Play, CheckCircle2, Zap } from 'lucide-react';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const FEATURE_DATA = [
    {
        title: "The Lighthouse",
        desc: "We monitor the school portal so you don’t have to. Get an instant WhatsApp trigger the moment rooms are available.",
        icon: <Bell size={32} strokeWidth={2.5} />,
        tag: "Real-time",
        accent: "burnt-amber",
        extra: "Avg. Alert Speed: 0.4s"
    },
    {
        title: "Crib Verified™",
        desc: "Every hostel on our platform is physically inspected. No scams, no fake photos, just 100% transparency.",
        icon: <ShieldCheck size={32} strokeWidth={2.5} />,
        tag: "Secured",
        isVideo: true,
        accent: "cool-slate"
    },
    {
        title: "Roommate Match",
        desc: "Find partners based on habits, department, and budget. Shared living made easy for the modern student.",
        icon: <Users size={32} strokeWidth={2.5} />,
        tag: "Community",
        accent: "cool-slate",
        extra: "98% Compatibility Rate"
    }
];

export default function Features() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".feature-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-white py-32">
            <div className="max-w-7xl mx-auto px-8">

                {/* Section Header */}
                <div className="mb-20 max-w-2xl">
                    <h2 className="font-header font-black text-4xl md:text-5xl tracking-tighter text-cool-slate mb-6">
                        Engineered for the <br />
                        <span className="text-burnt-amber">Modern Student.</span>
                    </h2>
                    <p className="font-body text-slate-500 text-lg">
                        We combined high-speed automation with physical verification to solve the campus housing crisis once and for all.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {FEATURE_DATA.map((feature, idx) => (
                        <div key={idx} className="feature-card group flex flex-col">

                            {/* Visual Element */}
                            {feature.isVideo ? (
                                <div className="relative aspect-[4/3] bg-slate-100 rounded-[2.5rem] overflow-hidden mb-10 border border-warm-grey group-hover:shadow-2xl group-hover:shadow-cool-slate/10 transition-all duration-500">

                                    {/* Embedded Video */}
                                    {/* <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/yo2CKF9QUxE?si=CuT1ZkA9klee4AMs?autoplay=1&mute=1&loop=1&playlist=yo2CKF9QUxE?si=CuT1ZkA9klee4AMs&controls=0&showinfo=0&rel=0"
                                        title="Crib Tour"
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                    /> */}

                                    <iframe
                                        // width="560" height="315"
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/yo2CKF9QUxE?si=CuT1ZkA9klee4AMs"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-cool-slate/40 to-transparent z-10 pointer-events-none" />

                                    {/* Play Button (visual only) */}
                                    {/* <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                                        <div className="w-16 h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-cool-slate shadow-xl">
                                            <Play fill="currentColor" size={24} className="ml-1" />
                                        </div>
                                    </div> */}

                                    {/* Badge */}
                                    <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                        <span className="text-[10px] font-header font-black uppercase tracking-widest text-cool-slate">
                                            Live Tour
                                        </span>
                                    </div>

                                </div>
                            ) : (
                                <div className="mb-10 relative">
                                    <div className={`w-20 h-20 rounded-[2rem] flex items-center justify-center transition-all duration-500 group-hover:-rotate-12 
                    ${feature.accent === 'burnt-amber' ? 'bg-burnt-amber/10 text-burnt-amber' : 'bg-cool-slate/5 text-cool-slate'}`}>
                                        {feature.icon}
                                    </div>

                                    <div className={`absolute -inset-2 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10
                    ${feature.accent === 'burnt-amber' ? 'bg-burnt-amber' : 'bg-cool-slate'}`} />
                                </div>
                            )}

                            {/* Text Content */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`text-[10px] font-header font-black uppercase tracking-widest px-3 py-1 rounded-md border
                  ${feature.accent === 'burnt-amber' ? 'border-burnt-amber/20 text-burnt-amber' : 'border-cool-slate/20 text-cool-slate'}`}>
                                    {feature.tag}
                                </span>

                                {feature.extra && (
                                    <span className="text-[10px] font-body font-bold text-slate-400 flex items-center gap-1">
                                        <Zap size={10} /> {feature.extra}
                                    </span>
                                )}
                            </div>

                            <h3 className="font-header font-bold text-3xl mb-4 text-cool-slate tracking-tight group-hover:text-burnt-amber transition-colors">
                                {feature.title}
                            </h3>

                            <p className="font-body text-slate-500 leading-relaxed text-lg mb-8">
                                {feature.desc}
                            </p>

                            <div className="mt-auto flex items-center gap-2 text-cool-slate font-header font-black text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 cursor-pointer">
                                View Details <CheckCircle2 size={16} className="text-burnt-amber" />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}