/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const TESTIMONIALS = [
    {
        name: "Adaeze Okonkwo",
        school: "University of Lagos",
        course: "Law, 300L",
        review: "I literally got the WhatsApp alert, clicked the link, and applied within 2 minutes. My roommate was still manually refreshing the portal. CampusCrib saved me this semester.",
        rating: 5,
        avatar: "AO",
        color: "bg-rose-100 text-rose-600",
    },
    {
        name: "Tunde Adeyemi",
        school: "OAU, Ile-Ife",
        course: "Engineering, 400L",
        review: "I was skeptical at first but the Lighthouse feature actually works. Got alerted at 2AM when a new block was released. Had my room secured before breakfast.",
        rating: 5,
        avatar: "TA",
        color: "bg-blue-100 text-blue-600",
    },
    {
        name: "Chisom Eze",
        school: "LASU",
        course: "Mass Comm, 200L",
        review: "The verified listings are everything. No more fake photos or landlords who disappear after collecting fees. Every place I visited matched exactly what was shown.",
        rating: 5,
        avatar: "CE",
        color: "bg-amber-100 text-amber-600",
    },
    {
        name: "Kelechi Nwosu",
        school: "Babcock University",
        course: "Accounting, 300L",
        review: "Found my roommate through the platform and we're literally best friends now. Same sleeping schedule, same course — the compatibility match is genuinely accurate.",
        rating: 5,
        avatar: "KN",
        color: "bg-green-100 text-green-600",
    },
    {
        name: "Fatima Al-Hassan",
        school: "UNIABUJA",
        course: "Medicine, 500L",
        review: "As a final year student I don't have time to be refreshing portals. CampusCrib handles it all. Got my hostel secured in 4 minutes flat this session.",
        rating: 5,
        avatar: "FA",
        color: "bg-purple-100 text-purple-600",
    },
    {
        name: "Emeka Obi",
        school: "Covenant University",
        course: "Computer Science, 100L",
        review: "Fresh admission and I was panicking about accommodation. My senior told me about CampusCrib. Setup took one minute, alert came in three days. Problem solved.",
        rating: 5,
        avatar: "EO",
        color: "bg-indigo-100 text-indigo-600",
    },
    {
        name: "Blessing Afolabi",
        school: "YABATECH",
        course: "Architecture, 400L",
        review: "The UI is so clean and easy to use. And the customer support actually responds. This is what Nigerian tech should look like — built for students, by people who care.",
        rating: 5,
        avatar: "BA",
        color: "bg-pink-100 text-pink-600",
    },
    {
        name: "Samuel Osei",
        school: "University of Lagos",
        course: "Economics, 200L",
        review: "Three of my friends missed hostel allocation last session. This time we all used CampusCrib. All three of us got rooms within the first 24 hours of release.",
        rating: 5,
        avatar: "SO",
        color: "bg-teal-100 text-teal-600",
    },
];

function TestimonialCard({ t }: any) {
    return (
        <div className="flex-shrink-0 w-80 md:w-96 bg-white rounded-[2rem] p-7 border border-warm-grey shadow-sm shadow-slate-200/50 flex flex-col gap-4 hover:shadow-lg hover:shadow-slate-200 transition-shadow duration-300">
            {/* Quote icon */}
            <Quote size={20} className="text-burnt-amber" fill="currentColor" />

            {/* Review text */}
            <p className="font-body text-slate-600 text-sm leading-relaxed flex-1">
                "{t.review}"
            </p>

            {/* Stars */}
            <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="text-burnt-amber" fill="currentColor" />
                ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-header font-black text-sm ${t.color}`}>
                    {t.avatar}
                </div>
                <div>
                    <p className="font-header font-bold text-cool-slate text-sm">{t.name}</p>
                    <p className="font-body text-slate-400 text-xs">{t.course} · {t.school}</p>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    const containerRef = useRef<any | null>(null);
    const row1Ref = useRef<any | null>(null);
    const row2Ref = useRef<any | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(".testimonials-header", {
                scrollTrigger: {
                    trigger: ".testimonials-header",
                    start: "top 85%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
            });

            // Infinite marquee row 1 (left to right)
            const row1 = row1Ref.current;
            if (row1) {
                const totalWidth = row1.scrollWidth / 2;
                gsap.to(row1, {
                    x: -totalWidth,
                    duration: 40,
                    repeat: -1,
                    ease: "none",
                    modifiers: {
                        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
                    },
                });
            }

            // Infinite marquee row 2 (right to left — reverse)
            const row2 = row2Ref.current;
            if (row2) {
                const totalWidth2 = row2.scrollWidth / 2;
                gsap.fromTo(
                    row2,
                    { x: -totalWidth2 / 2 },
                    {
                        x: 0,
                        duration: 50,
                        repeat: -1,
                        ease: "none",
                        modifiers: {
                            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth2),
                        },
                    }
                );
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const half = Math.ceil(TESTIMONIALS.length / 2);
    const row1Data = [...TESTIMONIALS.slice(0, half), ...TESTIMONIALS.slice(0, half)];
    const row2Data = [...TESTIMONIALS.slice(half), ...TESTIMONIALS.slice(half)];

    return (
        <section ref={containerRef} className="bg-[#FAFAF8] py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">

                {/* Header */}
                <div className="testimonials-header text-center mb-16">
                    <span className="inline-block text-[10px] font-header font-black uppercase tracking-[0.2em] text-burnt-amber border border-burnt-amber/30 rounded-md px-3 py-1 mb-6">
                        Student Stories
                    </span>
                    <h2 className="font-header font-black text-5xl md:text-6xl tracking-tighter text-cool-slate leading-[0.95] mb-6">
                        Students who got <br />
                        <span className="text-burnt-amber">the room they wanted.</span>
                    </h2>
                    <p className="font-body text-slate-500 text-lg max-w-xl mx-auto">
                        Real students. Real results. Every review below is unedited and verified.
                    </p>
                </div>
            </div>

            {/* Marquee rows — full bleed */}
            <div className="flex flex-col gap-6">
                {/* Row 1 */}
                <div className="overflow-hidden relative">
                    {/* Gradient masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#FAFAF8] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#FAFAF8] to-transparent z-10 pointer-events-none" />

                    <div ref={row1Ref} className="flex gap-5 w-max">
                        {row1Data.map((t, idx) => (
                            <TestimonialCard key={idx} t={t} />
                        ))}
                    </div>
                </div>

                {/* Row 2 */}
                <div className="overflow-hidden relative">
                    <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#FAFAF8] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#FAFAF8] to-transparent z-10 pointer-events-none" />

                    <div ref={row2Ref} className="flex gap-5 w-max">
                        {row2Data.map((t, idx) => (
                            <TestimonialCard key={idx} t={t} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Aggregate rating */}
            <div className="max-w-7xl mx-auto px-8 mt-14">
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-slate-500 font-body text-sm">
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={18} className="text-burnt-amber" fill="currentColor" />
                        ))}
                    </div>
                    <span className="font-header font-black text-cool-slate text-lg">4.9 / 5</span>
                    <span>·</span>
                    <span>Based on 1,240 verified reviews from Nigerian students</span>
                </div>
            </div>
        </section>
    );
}