/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const FAQS = [
    {
        q: "How does the Lighthouse alert actually work?",
        a: "Lighthouse is our automated monitoring engine. It connects to your university's official housing portal and pings it every few seconds. The instant a new hostel allocation, room, or listing appears, our system detects the change and sends you a WhatsApp notification with the details — bed count, price, location, and a direct link to apply.",
    },
    {
        q: "Do I need to download an app?",
        a: "No app needed. CampusCrib works entirely through WhatsApp for alerts and through our web platform for browsing verified listings and finding roommates. This keeps things lightweight and ensures you get alerts even on slow data.",
    },
    {
        q: "Which universities are currently supported?",
        a: "We currently monitor portals for University of Lagos, OAU Ile-Ife, LASU, Babcock, Covenant University, UNIABUJA, YABATECH, and UniPort. We're adding new campuses every month — if your school isn't listed, you can join our waitlist and we'll notify you when it launches.",
    },
    {
        q: "What does 'Crib Verified™' mean exactly?",
        a: "Every off-campus listing marked Crib Verified™ has been physically inspected by a member of our team. We check for: accurate photos, working facilities, fair pricing, and verified landlord identity. If it's on our platform with that badge, it's legitimate.",
    },
    {
        q: "How does Roommate Match work?",
        a: "When you sign up, you fill a short profile — your department, sleep schedule, budget, habits, and preferences. Our matching system pairs you with students who score high on compatibility. You can chat directly within the platform before making any decisions.",
    },
    {
        q: "Is CampusCrib free to use?",
        a: "Your first alert subscription is completely free. We have a generous free tier that covers most students' needs. For power features like multi-campus monitoring and priority alerts, there's an affordable student plan. No hidden fees, no surprise charges.",
    },
];

function FAQItem({ faq, index }: any) {
    const [open, setOpen] = useState(false);
    const bodyRef = useRef(null);

    useEffect(() => {
        if (!bodyRef.current) return;
        if (open) {
            gsap.fromTo(bodyRef.current,
                { height: 0, opacity: 0 },
                { height: "auto", opacity: 1, duration: 0.4, ease: "power3.out" }
            );
        } else {
            gsap.to(bodyRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power3.in" });
        }
    }, [open]);

    return (
        <div
            className={`group border rounded-2xl px-6 md:px-8 py-5 transition-all duration-300 cursor-pointer
        ${open
                    ? "border-burnt-amber/40 bg-burnt-amber/5"
                    : "border-warm-grey bg-white hover:border-slate-300"
                }`}
            onClick={() => setOpen(!open)}
        >
            <div className="flex items-start justify-between gap-4">
                <p className={`font-header font-bold text-base md:text-lg leading-snug transition-colors duration-300
          ${open ? "text-burnt-amber" : "text-cool-slate group-hover:text-burnt-amber"}`}>
                    {faq.q}
                </p>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
          ${open ? "bg-burnt-amber text-white rotate-0" : "bg-slate-100 text-slate-500 group-hover:bg-burnt-amber/10 group-hover:text-burnt-amber"}`}>
                    {open ? <Minus size={14} /> : <Plus size={14} />}
                </div>
            </div>

            <div ref={bodyRef} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
                <p className="font-body text-slate-500 text-sm md:text-base leading-relaxed mt-4">
                    {faq.a}
                </p>
            </div>
        </div>
    );
}

export default function FAQ() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".faq-header", {
                scrollTrigger: {
                    trigger: ".faq-header",
                    start: "top 85%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
            });

            gsap.from(".faq-item", {
                scrollTrigger: {
                    trigger: ".faq-list",
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "power3.out",
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="bg-white py-32">
            <div className="max-w-7xl mx-auto px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Header */}
                    <div className="faq-header lg:sticky lg:top-32">
                        <span className="inline-block text-[10px] font-header font-black uppercase tracking-[0.2em] text-burnt-amber border border-burnt-amber/30 rounded-md px-3 py-1 mb-6">
                            FAQ
                        </span>
                        <h2 className="font-header font-black text-5xl md:text-6xl tracking-tighter text-cool-slate leading-[0.95] mb-6">
                            Questions <br />
                            <span className="text-burnt-amber">answered.</span>
                        </h2>
                        <p className="font-body text-slate-500 text-lg leading-relaxed mb-8 max-w-sm">
                            Everything you need to know about Campus Crib. Can't find your answer?
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 font-header font-black text-sm uppercase tracking-widest text-cool-slate hover:text-burnt-amber transition-colors"
                        >
                            Contact us directly
                            <span className="text-burnt-amber">→</span>
                        </a>

                        {/* Decorative block */}
                        <div className="mt-12 hidden lg:block p-6 rounded-2xl bg-cool-slate/5 border border-warm-grey">
                            <p className="font-header font-bold text-cool-slate text-sm mb-1">Still not sure?</p>
                            <p className="font-body text-slate-500 text-sm">Join our WhatsApp community of 2,400+ students and get peer support instantly.</p>
                            <button className="mt-4 flex items-center gap-2 text-burnt-amber font-header font-black text-xs uppercase tracking-widest hover:underline">
                                Join Community →
                            </button>
                        </div>
                    </div>

                    {/* Right: FAQ list */}
                    <div className="faq-list flex flex-col gap-3">
                        {FAQS.map((faq, idx) => (
                            <div key={idx} className="faq-item">
                                <FAQItem faq={faq} index={idx} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}