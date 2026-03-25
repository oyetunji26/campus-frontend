/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
    ArrowRight,
    ShieldCheck,
    Bell,
    CheckCircle2,
    Wifi,
    Battery,
    Signal,
    MapPin,
} from "lucide-react";

const UNIVERSITIES = [
    "University of Lagos",
    "OAU Ile-Ife",
    "Babcock University",
    "LASU",
    "Covenant University",
    "UNIABUJA",
    "YABATECH",
    "UniPort",
    "UNILAG",
    "Ahmadu Bello University",
];

const CYCLING_WORDS = ["Hostel", "Room", "Crib", "Spot"];

// ─── Phone Mockup ──────────────────────────────────────────────
function PhoneMockup() {
    const notifRef = useRef(null);
    const pingRef = useRef(null);
    const badgeRef = useRef(null);
    const secondNotifRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ delay: 1.2 });

        // Ping pulse
        tl.from(pingRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.4,
            ease: "back.out(2)",
        })
            .to(pingRef.current, {
                scale: 2.5,
                opacity: 0,
                duration: 0.7,
                ease: "power2.out",
            })

            // First notification slides in
            .from(
                notifRef.current,
                {
                    y: -60,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power4.out",
                },
                "-=0.3"
            )

            // Badge counter
            .from(
                badgeRef.current,
                {
                    scale: 0,
                    duration: 0.3,
                    ease: "back.out(2)",
                },
                "-=0.2"
            )

            // Second notification
            .from(
                secondNotifRef.current,
                {
                    y: -40,
                    opacity: 0,
                    duration: 0.5,
                    ease: "power4.out",
                },
                "+=0.4"
            );

        // Continuous subtle float
        gsap.to(".phone-body", {
            y: "random(-8,8)",
            rotation: "random(-1,1)",
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });

        // Screen glow pulse
        gsap.to(".screen-glow", {
            opacity: 0.6,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
    }, []);

    return (
        // <div className="relative flex items-center justify-center w-full h-full select-none">
        <div className="relative flex items-center justify-center w-full h-full select-none scale-[0.75] sm:scale-[0.85] md:scale-100 origin-center">




            {/* Ambient glow behind phone */}
            <div className="screen-glow absolute w-48 h-80 rounded-full bg-burnt-amber/20 blur-3xl opacity-40 pointer-events-none" />

            {/* Ping dot */}
            <div ref={pingRef} className="absolute top-1/3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-burnt-amber pointer-events-none z-20" />

            {/* Phone body */}
            <div className="phone-body relative w-[240px] md:w-[260px] lg:w-[360px] bg-[#0F0F0F] rounded-[3rem] p-[3px] shadow-2xl shadow-black/50 ring-1 ring-white/10">

                {/* Outer frame */}
                <div className="w-full bg-[#0B141A] rounded-[2.8rem] overflow-hidden lg:h-[732px]">

                    {/* Dynamic island */}
                    <div className="absolute top-4 border left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-30" />

                    {/* Status bar */}
                    <div className="flex items-center justify-between px-5 pt-3 pb-1 text-white/60">
                        <span className="text-[10px] font-bold">9:41</span>
                        <div className="flex items-center gap-1">
                            <Signal size={10} />
                            <Wifi size={10} />
                            <Battery size={10} />
                        </div>
                    </div>

                    {/* WhatsApp screen */}
                    <div className="bg-[#0B141A] min-h-[480px] h-[88%] px-3 py-2 pt-4 relative pb-9">

                        {/* WhatsApp header */}
                        <div className="flex items-center gap-2 py-2 border-b border-white/5 mb-3">
                            <div className="w-8 h-8 rounded-full bg-[#00A884] flex items-center justify-center text-white text-xs font-black">C</div>
                            <div>
                                <p className="text-white text-xs font-semibold">CampusCrib Alerts</p>
                                <p className="text-[10px] text-[#8696A0]">online</p>
                            </div>
                        </div>

                        {/* Timestamp */}
                        <div className="flex justify-center mb-3">
                            <span className="text-[9px] text-[#8696A0] bg-[#182229] px-3 py-1 rounded-full">TODAY</span>
                        </div>

                        {/* Old message (dim) */}
                        <div className="flex justify-start mb-3">
                            <div className="bg-[#202C33] rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                                <p className="text-[10px] text-[#E9EDF0] leading-relaxed">
                                    🔔 Lighthouse is active. We're watching UNILAG portal for you.
                                </p>
                                <p className="text-[8px] text-[#8696A0] mt-1 text-right">08:00 AM ✓✓</p>
                            </div>
                        </div>

                        {/* Second notification (new) */}
                        <div ref={secondNotifRef} className="flex justify-start mb-3 opacity-100">
                            <div className="bg-[#202C33] rounded-xl rounded-tl-sm px-3 py-2 max-w-[85%]">
                                <p className="text-[10px] text-[#E9EDF0] leading-relaxed">
                                    📍 Hall 3 (Block B) — 12 rooms remaining.
                                    <span className="text-[#00A884] font-semibold"> ₦45,000/session.</span>
                                </p>
                                <p className="text-[8px] text-[#8696A0] mt-1 text-right">10:22 AM ✓✓</p>
                            </div>
                        </div>

                        {/* MAIN ALERT notification */}
                        <div ref={notifRef} className="flex justify-start mb-2">
                            <div className="bg-[#202C33] rounded-xl rounded-tl-sm px-3 py-2.5 max-w-[90%] ring-1 ring-[#00A884]/30">
                                <div className="flex items-center gap-1.5 mb-1.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#00A884] animate-pulse" />
                                    <span className="text-[9px] text-[#00A884] font-black uppercase tracking-wider">New Alert</span>
                                </div>
                                <p className="text-[11px] text-white font-semibold leading-snug mb-1">
                                    🚨 UNILAG Hall 1 just opened!
                                </p>
                                <p className="text-[10px] text-[#E9EDF0] leading-relaxed mb-2">
                                    Female hostel (Block C) — 8 rooms available. Single occupancy. <span className="text-[#00A884]">₦52,000.</span>
                                </p>
                                <div className="flex gap-2">
                                    <button className="flex-1 bg-[#00A884] text-white text-[9px] font-black py-1.5 rounded-lg">
                                        Apply Now →
                                    </button>
                                    <button className="flex-1 bg-white/10 text-white/70 text-[9px] py-1.5 rounded-lg">
                                        View Hostel
                                    </button>
                                </div>
                                <p className="text-[8px] text-[#8696A0] mt-1.5 text-right">10:47 AM ✓✓</p>
                            </div>
                        </div>

                        {/* Typing indicator */}
                        <div className="flex justify-start">
                            <div className="bg-[#202C33] rounded-xl rounded-tl-sm px-3 py-2">
                                <div className="flex gap-1 items-center h-3">
                                    <div className="w-1.5 h-1.5 bg-[#8696A0] rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                                    <div className="w-1.5 h-1.5 bg-[#8696A0] rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                                    <div className="w-1.5 h-1.5 bg-[#8696A0] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="bg-[#0B141A] px-4 py-3 flex items-center gap-2 border-t border-white/5">
                        <div className="flex-1 bg-[#2A3942] rounded-full px-3 py-1.5">
                            <p className="text-[10px] text-[#8696A0]">Message</p>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-[#00A884] flex items-center justify-center">
                            <ArrowRight size={12} className="text-white" />
                        </div>
                    </div>

                </div>

                {/* Badge counter */}
                <div ref={badgeRef} className="absolute -top-2 -right-2 w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-black ring-2 ring-white z-30">
                    3
                </div>
            </div>

            {/* Alert speed card */}
            <div className="absolute -right-2 md:-right-6 top-[15%] bg-white rounded-2xl px-4 py-3 shadow-xl shadow-slate-200 border border-warm-grey flex items-center gap-3 floating-badge-1">
                <div className="w-8 h-8 bg-green-100 rounded-xl flex items-center justify-center">
                    <Bell size={14} className="text-green-600" />
                </div>
                <div>
                    <p className="text-[10px] text-slate-500 font-body">Alert speed</p>
                    <p className="font-header font-black text-sm text-cool-slate">0.4 seconds</p>
                </div>
            </div>

            {/* Verified badge */}
            <div className="absolute -left-2 md:-left-6 bottom-[22%] bg-white rounded-2xl px-4 py-3 shadow-xl shadow-slate-200 border border-warm-grey flex items-center gap-3 floating-badge-2">
                <div className="w-8 h-8 bg-burnt-amber/15 rounded-xl flex items-center justify-center">
                    <ShieldCheck size={14} className="text-burnt-amber" />
                </div>
                <div>
                    <p className="text-[10px] text-slate-500 font-body">Listing status</p>
                    <p className="font-header font-black text-sm text-cool-slate">Verified ✓</p>
                </div>
            </div>

            {/* Location pin floating */}
            <div className="absolute left-[5%] top-[12%] bg-burnt-amber text-white rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg shadow-burnt-amber/30 floating-badge-3">
                <MapPin size={11} />
                <span className="text-[10px] font-header font-black">UNILAG, Lagos</span>
            </div>
        </div>
    );
}

// ─── University Marquee ─────────────────────────────────────────
function Marquee() {
    const trackRef = useRef<any | null>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const totalWidth = track?.scrollWidth / 2;
        gsap.to(track, {
            x: -totalWidth,
            duration: 28,
            repeat: -1,
            ease: "none",
            modifiers: {
                x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
            },
        });
    }, []);

    const items = [...UNIVERSITIES, ...UNIVERSITIES];

    return (
        <div className="overflow-hidden relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#F5F3EE] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#F5F3EE] to-transparent z-10 pointer-events-none" />
            <div ref={trackRef} className="flex w-max">
                {items.map((uni, i) => (
                    <div key={i} className="flex items-center gap-4 mx-4">
                        <div className="w-1 h-1 rounded-full bg-burnt-amber" />
                        <span className="text-xs font-body text-slate-500 whitespace-nowrap">{uni}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ─── Cycling word ───────────────────────────────────────────────
function CyclingWord() {
    const [index, setIndex] = useState(0);
    const wordRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (wordRef.current) {
                gsap.to(wordRef.current, {
                    y: -20,
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in",
                    onComplete: () => {
                        setIndex((prev) => (prev + 1) % CYCLING_WORDS.length);
                        gsap.fromTo(wordRef.current,
                            { y: 20, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.35, ease: "power3.out" }
                        );
                    },
                });
            }
        }, 2200);
        return () => clearInterval(interval);
    }, []);

    return (
        <span
            ref={wordRef}
            className="text-burnt-amber inline-block"
            style={{ minWidth: "4ch" }}
        >
            {CYCLING_WORDS[index]}
        </span>
    );
}

// ─── Hero ───────────────────────────────────────────────────────
export default function Hero() {
    const scope = useRef(null);
    const [phone, setPhone] = useState("");

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Left column stagger
            gsap.from(".hero-left > *", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.12,
                ease: "power4.out",
                delay: 0.2,
            });

            // Right column
            gsap.from(".hero-right", {
                x: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.5,
            });

            // Floating badges independent float
            [".floating-badge-1", ".floating-badge-2", ".floating-badge-3"].forEach((cls, i) => {
                gsap.to(cls, {
                    y: `random(-10,10)`,
                    x: `random(-5,5)`,
                    duration: 3 + i,
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.4,
                });
            });

            // Background mesh orbs
            gsap.to(".hero-orb-1", { x: 30, y: -20, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });
            gsap.to(".hero-orb-2", { x: -20, y: 30, duration: 10, repeat: -1, yoyo: true, ease: "sine.inOut" });

        }, scope);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={scope}
            className="relative min-h-screen bg-[#F5F3EE] overflow-hidden"
        >
            {/* ── Background ── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {/* Mesh blobs */}
                <div className="hero-orb-1 absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-burnt-amber/8 blur-[100px]" />
                <div className="hero-orb-2 absolute -bottom-60 right-[-10%] w-[700px] h-[700px] rounded-full bg-cool-slate/5 blur-[120px]" />

                {/* Fine dot grid */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.35]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="hero-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="#C4B9A8" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hero-dots)" />
                </svg>
            </div>

            {/* ── Main layout ── */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-20 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                {/* LEFT COLUMN */}
                <div className="hero-left flex flex-col items-start gap-6">

                    {/* Eyebrow pill */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-burnt-amber/12 border border-burnt-amber/25">
                        <div className="w-1.5 h-1.5 rounded-full bg-burnt-amber animate-pulse" />
                        <span className="font-header font-black text-xs uppercase tracking-widest text-burnt-amber">
                            2,400+ Students Secured
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-header font-black text-[52px] md:text-[68px] lg:text-[72px] xl:text-[80px] text-cool-slate leading-[0.92] tracking-tighter">
                        <span className="block">Never Miss</span>
                        <span className="block">Your Perfect</span>
                        <span className="block overflow-hidden h-[1.1em]">
                            <CyclingWord />
                        </span>
                    </h1>

                    {/* Body */}
                    <p className="font-body text-slate-500 text-lg md:text-xl leading-relaxed max-w-md">
                        Lighthouse monitors your university portal <strong className="text-cool-slate font-semibold">24/7</strong> and sends instant{" "}
                        <span className="inline-flex items-center gap-1 bg-[#00A884]/10 text-[#00A884] px-2 py-0.5 rounded-lg font-semibold text-base">
                            WhatsApp
                        </span>{" "}
                        alerts the moment rooms are available.
                    </p>

                    {/* Inline CTA */}
                    <div className="w-full max-w-sm flex flex-col gap-3">
                        <div className="flex items-stretch gap-2 bg-white rounded-2xl p-1.5 border border-warm-grey shadow-sm shadow-slate-200/50">
                            <span className="flex items-center pl-3 text-slate-400 font-body text-sm shrink-0">+234</span>
                            <input
                                type="tel"
                                placeholder="08012345678"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="flex-1 bg-transparent font-body text-sm text-cool-slate placeholder-slate-300 focus:outline-none py-2 min-w-0"
                            />
                            <button className="flex-shrink-0 flex items-center gap-1.5 bg-cool-slate text-white px-4 py-2.5 rounded-xl text-sm font-header font-black hover:bg-slate-800 transition-colors">
                                Alert Me
                                <ArrowRight size={14} strokeWidth={2.5} />
                            </button>
                        </div>
                        <p className="text-xs font-body text-slate-400 pl-1">
                            Free to start. No app download. Cancel anytime.
                        </p>
                    </div>

                    {/* Trust row */}
                    <div className="flex items-center gap-5 pt-2">
                        <div className="flex items-center gap-1.5 text-sm font-body text-slate-500">
                            <ShieldCheck size={15} className="text-green-500" />
                            Verified Cribs
                        </div>
                        <div className="w-px h-4 bg-slate-200" />
                        <div className="flex items-center gap-1.5 text-sm font-body text-slate-500">
                            <CheckCircle2 size={15} className="text-blue-500" />
                            Instant Alerts
                        </div>
                        <div className="w-px h-4 bg-slate-200" />
                        <div className="flex items-center gap-1.5 text-sm font-body text-slate-500">
                            <Bell size={15} className="text-burnt-amber" />
                            0.4s avg speed
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN — Phone mockup */}
                <div className="hero-right relative h-[500px] md:h-[580px] lg:h-[640px] flex items-center justify-center">
                    <PhoneMockup />
                </div>
            </div>

            {/* ── University marquee ── */}
            <div className="relative z-10 border-t border-slate-200 bg-[#F5F3EE]/80 backdrop-blur-sm py-4">
                <div className="flex items-center gap-6 max-w-7xl mx-auto px-6 lg:px-10 mb-3">
                    <span className="text-[10px] font-header font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">
                        Monitoring
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                </div>
                <Marquee />
            </div>
        </section>
    );
}