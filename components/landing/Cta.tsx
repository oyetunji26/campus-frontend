"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, MessageCircle, Bell, ShieldCheck, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const UNIVERSITIES = [
    "University of Lagos",
    "OAU Ile-Ife",
    "Babcock University",
    "LASU",
    "Covenant University",
    "UNIABUJA",
    "YABATECH",
    "UniPort",
];

export default function FinalCTA() {
    const containerRef = useRef(null);
    const [phone, setPhone] = useState("");
    const [university, setUniversity] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Main card entrance
            gsap.from(".cta-card", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                    toggleActions: "play none none reverse",
                },
                y: 80,
                opacity: 0,
                scale: 0.97,
                duration: 1.2,
                ease: "power4.out",
            });

            // Floating orbs
            gsap.to(".orb-1", {
                y: "random(-20,20)",
                x: "random(-10,10)",
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            gsap.to(".orb-2", {
                y: "random(-15,15)",
                x: "random(-15,15)",
                duration: 7,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });
            gsap.to(".orb-3", {
                y: "random(-25,25)",
                x: "random(-5,5)",
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
            });

            // Feature pills stagger
            gsap.from(".cta-pill", {
                scrollTrigger: {
                    trigger: ".cta-pills",
                    start: "top 85%",
                },
                y: 20,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.5)",
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleSubmit = () => {
        if (phone && university) {
            setSubmitted(true);
        }
    };

    return (
        <section ref={containerRef} className="bg-[#FAFAF8] py-32 px-6 overflow-hidden">
            <div className="max-w-5xl mx-auto">
                <div className="cta-card relative rounded-[3rem] bg-cool-slate overflow-hidden px-8 md:px-16 py-16 md:py-20">

                    {/* Background orbs */}
                    <div className="orb-1 absolute -top-16 -left-16 w-64 h-64 rounded-full bg-burnt-amber/20 blur-3xl pointer-events-none" />
                    <div className="orb-2 absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-burnt-amber/10 blur-3xl pointer-events-none" />
                    <div className="orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/3 blur-3xl pointer-events-none" />

                    {/* Subtle grid */}
                    <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="cta-grid" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
                                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#cta-grid)" />
                    </svg>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center">

                        {/* Eyebrow */}
                        <div className="flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-burnt-amber/15 border border-burnt-amber/25">
                            <Sparkles size={14} className="text-burnt-amber" />
                            <span className="text-burnt-amber font-header font-black text-xs uppercase tracking-widest">
                                Limited Slots per Campus
                            </span>
                        </div>

                        {/* Headline */}
                        {!submitted ? (
                            <>
                                <h2 className="font-header font-black text-5xl md:text-7xl text-white tracking-tighter leading-[0.9] mb-6">
                                    Don't miss <br />
                                    <span className="text-burnt-amber">your room</span> <br />
                                    again.
                                </h2>

                                <p className="font-body text-slate-400 text-lg md:text-xl max-w-lg mb-12">
                                    Join 2,400+ students who never have to refresh their school portal again. Get your first alert free.
                                </p>

                                {/* Signup form */}
                                <div className="w-full max-w-md flex flex-col gap-4">
                                    {/* Phone */}
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-body text-sm">+234</span>
                                        <input
                                            type="tel"
                                            placeholder="8012345678"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            className="w-full bg-white/10 border border-white/20 text-white placeholder-slate-500 font-body text-sm rounded-2xl pl-16 pr-4 py-4 focus:outline-none focus:border-burnt-amber transition-colors"
                                        />
                                    </div>

                                    {/* University select */}
                                    <select
                                        value={university}
                                        onChange={(e) => setUniversity(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 text-slate-300 font-body text-sm rounded-2xl px-4 py-4 focus:outline-none focus:border-burnt-amber transition-colors appearance-none"
                                    >
                                        <option value="" disabled className="text-slate-900">Select your university</option>
                                        {UNIVERSITIES.map((u) => (
                                            <option key={u} value={u} className="text-slate-900">{u}</option>
                                        ))}
                                    </select>

                                    {/* Submit */}
                                    <button
                                        onClick={handleSubmit}
                                        disabled={!phone || !university}
                                        className="w-full flex items-center justify-center gap-3 bg-burnt-amber text-white font-header font-black text-sm uppercase tracking-widest px-6 py-4 rounded-2xl hover:brightness-110 transition-all duration-300 shadow-xl shadow-burnt-amber/30 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:brightness-100"
                                    >
                                        <MessageCircle size={16} />
                                        Activate WhatsApp Alerts
                                        <ArrowRight size={16} />
                                    </button>
                                </div>

                                {/* Trust signals */}
                                <div className="cta-pills mt-10 flex flex-wrap items-center justify-center gap-3">
                                    {[
                                        { icon: <ShieldCheck size={13} />, text: "No credit card" },
                                        { icon: <Bell size={13} />, text: "Instant alerts" },
                                        { icon: <MessageCircle size={13} />, text: "WhatsApp only" },
                                        { icon: <Sparkles size={13} />, text: "Cancel anytime" },
                                    ].map((pill, i) => (
                                        <div key={i} className="cta-pill flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-slate-400 text-xs font-body">
                                            <span className="text-burnt-amber">{pill.icon}</span>
                                            {pill.text}
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            /* Success state */
                            <div className="flex flex-col items-center py-8">
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
                                    <ShieldCheck size={36} className="text-green-400" />
                                </div>
                                <h3 className="font-header font-black text-4xl text-white tracking-tight mb-3">
                                    You're in! 🎉
                                </h3>
                                <p className="font-body text-slate-400 text-lg max-w-sm text-center">
                                    Lighthouse is now watching <span className="text-burnt-amber font-semibold">{university}</span> for you. Expect a WhatsApp message shortly.
                                </p>
                                <div className="mt-8 px-6 py-3 rounded-full bg-white/10 border border-white/15 text-white font-body text-sm">
                                    Alert active for: <span className="text-burnt-amber font-semibold">+234 {phone}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom note */}
                <p className="text-center font-body text-slate-400 text-sm mt-8">
                    Campus Crib is built by students, for students. 🇳🇬 <span className="text-slate-600">Made in Lagos.</span>
                </p>
            </div>
        </section>
    );
}