"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
    ArrowRight,
    ShieldCheck,
    Users,
    CheckCircle2
} from "lucide-react";
import ConversionBar from "./ConversionBar";

export default function Hero() {
    const scope = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // Animate main elements
            tl.from(".animate-item", {
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15
            }).from(
                ".floating-card",
                {
                    scale: 0.9,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2
                },
                "-=0.7"
            );

            // Floating animation for cards
            gsap.to(".floating-card", {
                y: "random(-12,12)",
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: { each: 0.4, from: "random" }
            });

            // Headline animation
            gsap.from(".headline-word", {
                opacity: 0,
                y: 30,
                scale: 0.9,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
            });

            gsap.from(".subheadline", {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 0.8,
                ease: "power3.out",
            });

            gsap.to(".headline-word", {
                y: "+=3",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: 0.2,
                duration: 2,
            });

        }, scope);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={scope} className="md:pt-10 min-h-screen">
            <div className="relative px-6 pt-44 pb-36 max-w-7xl mx-auto flex flex-col gap-5 items-center overflow-visible">

                {/* Social proof */}
                <div className="animate-item inline-flex items-center gap-2 px-4 py-2 rounded-full bg-burnt-amber/10 border border-burnt-amber border-dashed text-burnt-amber text-sm font-semibold shadow-sm hover:shadow-md hover:brightness-105 transition-all">
                    <Users size={16} className="text-burnt-amber" />
                    <span>Trusted by 2,400+ Students</span>
                </div>

                {/* Headline */}
                <h1 className="animate-item font-header flex flex-col gap-3 font-black text-5xl md:text-[84px] text-center leading-[0.9] tracking-tight text-cool-slate mb-4">
                    <div>
                        {["Never", "Miss", "Your"].map((word, i) => (
                            <span key={i} className="headline-word inline-block mr-2">{word}</span>
                        ))}
                    </div>
                    <span className="headline-word text-burnt-amber inline-block">Perfect Hostel</span>
                </h1>

                {/* Subheadline */}
                <p className="subheadline text-slate-500 font-body max-w-xl mx-auto text-lg md:text-xl text-center">
                    Lighthouse monitors university housing portals 24/7 and sends instant{" "}
                    <span className="font-bold text-cool-slate">WhatsApp alerts</span> the moment new hostels are available — so you can secure your spot before anyone else.
                </p>

                {/* CTA */}
                <ConversionBar />

                {/* Trust row */}
                <div className="animate-item mt-6 flex items-center gap-3 md:gap-6 text-sm text-slate-500">
                    <span className="flex items-center gap-2">
                        <ShieldCheck size={16} className="text-green-500" />
                        Verified Listings
                    </span>
                    <span className="flex items-center gap-2">
                        <Users size={16} className="text-blue-500" />
                        2400+ Students
                    </span>
                    <span className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-green-500" />
                        Instant Alerts
                    </span>
                </div>

                {/* Floating Cards — cinematic layout */}

                {/* Top-left */}
                <div className="floating-card absolute hidden rotate-12 lg:flex top-[28%] left-2 md:left-6 lg:-left-6 xl:-left-10 p-4 md:p-5 bg-green-50 rounded-2xl md:rounded-3xl shadow-xl shadow-green-200/20 border border-green-100 w-44 md:w-52 lg:w-56 flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <ShieldCheck size={20} className="text-green-500" />
                        <p className="font-bold text-sm text-green-900">Verified Listings</p>
                    </div>
                    <p className="text-xs text-green-600">Only trusted properties that passed our inspection.</p>
                </div>

                {/* Bottom-left */}
                <div className="floating-card absolute hidden -rotate-12 lg:flex bottom-[20%] left-4 md:left-6 lg:-left-4 xl:-left-6 p-4 md:p-5 bg-indigo-50 rounded-2xl md:rounded-3xl shadow-xl shadow-indigo-200/20 border border-indigo-100 w-44 md:w-52 lg:w-56 flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <CheckCircle2 size={22} className="text-indigo-500" />
                        <p className="font-bold text-sm text-indigo-900">Quick Alerts</p>
                    </div>
                    <p className="text-xs text-indigo-600">Receive instant notifications when new hostels are listed.</p>
                </div>

                {/* Top-right */}
                <div className="floating-card absolute hidden -rotate-12 lg:flex top-[30%] right-4 md:right-6 lg:-right-6 xl:-right-10 p-4 md:p-5 bg-yellow-50 rounded-2xl md:rounded-3xl shadow-xl shadow-yellow-200/20 border border-yellow-100 w-44 md:w-52 lg:w-56 flex-col gap-3">



                    <div className="flex items-center gap-3">
                        <Users size={20} className="text-yellow-500" />
                        <p className="font-bold text-sm text-yellow-900">Roommate Match</p>
                    </div>
                    <p className="text-xs text-yellow-600">Connect with compatible roommates for shared accommodations.</p>
                </div>

                {/* Bottom-right */}
                <div className="floating-card absolute hidden rotate-12 lg:flex bottom-[22%] right-2 md:right-6 lg:-right-6 xl:-right-10 p-4 md:p-5 bg-pink-50 rounded-2xl md:rounded-3xl shadow-xl shadow-pink-200/20 border border-pink-100 w-44 md:w-52 lg:w-56 flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <ArrowRight size={20} className="text-pink-500" />
                        <p className="font-bold text-sm text-pink-900">Easy Booking</p>
                    </div>
                    <p className="text-xs text-pink-600">Secure your hostel with a few clicks directly from the platform.</p>
                </div>

            </div>
        </section>
    );
}