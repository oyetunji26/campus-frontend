"use client";

import { useEffect, useState } from "react";
import { ArrowRight, House, Menu, ShieldCheck, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 24);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed inset-x-0 z-50 flex justify-center transition-all duration-300 ${isScrolled ? "top-3" : "top-5"
                }`}
        >
            <nav
                className={`flex items-center justify-between w-full max-w-7xl px-6 py-3 transition-all duration-300 ${isScrolled ? "" : "bg-transparent border-0"
                    }`}
            >
                {/* Logo */}
                <div className="flex items-center gap-3 cursor-pointer">
                    <div className={` w-10 h-10 bg-burnt-amber rounded-xl rotate-12 flex items-center justify-center ${isScrolled && "hidden"} `}>
                        {/* <ShieldCheck className="text-white" size={24} /> */}
                        <House className="text-soft-pearl" size={24} />
                    </div>
                    <span
                        className={`text-3xl max-md:text-2xl font-semibold tracking-tight text-cool-slate ${isScrolled && "hidden"
                            }`}
                    >
                        Campus<span className="text-burnt-amber">Crib</span>
                    </span>
                </div>

                {/* Actions */}
                <div
                    className={`flex items-center gap-10 
            bg-white/30 
            backdrop-blur-[20px] 
            border border-warm-grey
            rounded-full px-3 
            md:pl-5 md:pr-3 py-3 
            shadow-lg 
            shadow-white/10 
            ring-1 ring-white/10 ${isScrolled &&
                        ""
                        }`}
                >
                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                        <a
                            href="#lighthouse"
                            className="hover:text-slate-900 transition-colors"
                        >
                            Lighthouse
                        </a>

                        <a
                            href="#verified"
                            className="hover:text-slate-900 transition-colors"
                        >
                            Verified Cribs
                        </a>

                        <a
                            href="#roommates"
                            className="hover:text-slate-900 transition-colors"
                        >
                            Roommates
                        </a>

                        <a
                            href=""
                            className="hover:text-slate-900 transition-colors"
                        >
                            Sign In.
                        </a>
                    </div>

                    {/* Desktop CTA */}
                    <button className="hidden md:flex items-center gap-2 bg-cool-slate text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition">
                        Get Started
                        <ArrowRight size={16} strokeWidth={2.5} />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Professional Mobile Dropdown */}
            {isOpen && (
                <div className="absolute top-full mt-4 w-[92%] max-w-md md:hidden">
                    <div className=" bg-white/30 
            backdrop-blur-[20px] 
            border border-slate-200 rounded-3xl
            px-3 
            md:pl-5 md:pr-3 py-3 
            shadow-lg 
            shadow-white/10 
            ring-1 ring-white/10   p-6 space-y-6">

                        {/* Navigation */}
                        <div className="flex flex-col divide-y divide-slate-100 text-sm font-medium text-slate-700">

                            <a
                                href="#lighthouse"
                                onClick={() => setIsOpen(false)}
                                className="py-3 hover:text-slate-900 transition-colors"
                            >
                                Lighthouse
                            </a>

                            <a
                                href="#verified"
                                onClick={() => setIsOpen(false)}
                                className="py-3 hover:text-slate-900 transition-colors"
                            >
                                Verified Cribs
                            </a>

                            <a
                                href="#roommates"
                                onClick={() => setIsOpen(false)}
                                className="py-3 hover:text-slate-900 transition-colors"
                            >
                                Roommates
                            </a>

                            <a
                                href=""
                                onClick={() => setIsOpen(false)}
                                className="py-3 hover:text-slate-900 transition-colors"
                            >
                                Sign In
                            </a>

                        </div>

                        {/* CTA */}
                        <div className="flex flex-col gap-3">

                            <button className="flex items-center justify-center gap-2 bg-cool-slate text-white px-4 py-3 rounded-full text-sm font-semibold hover:bg-slate-800 transition">
                                Get Started
                                <ArrowRight size={16} strokeWidth={2.5} />
                            </button>

                            <p className="text-xs text-center text-slate-500">
                                Find verified student housing near your campus
                            </p>

                        </div>

                    </div>
                </div>
            )}
        </header>
    );
}