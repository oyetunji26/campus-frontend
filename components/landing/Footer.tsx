export default function Footer() {
    return (
        <footer className="bg-white/90 px-8 py-16 font-body text-cool-slate">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">

                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-cool-slate">
                        Campus <span className="text-burnt-amber">Crib</span>
                    </h3>

                    <p className="  leading-relaxed max-w-xs">
                        Discover verified student housing, trusted roommates, and safe
                        places to live around your campus.
                    </p>
                </div>

                {/* Product */}
                <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900">Product</h4>

                    <ul className="space-y-3  text-slate-600 ">
                        <li>
                            <a href="#lighthouse" className="hover:text-slate-900 transition-colors">
                                Lighthouse
                            </a>
                        </li>

                        <li>
                            <a href="#verified" className="hover:text-slate-900 transition-colors">
                                Verified Cribs
                            </a>
                        </li>

                        <li>
                            <a href="#roommates" className="hover:text-slate-900 transition-colors">
                                Roommate Finder
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-slate-900 transition-colors">
                                List Your Property
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Company */}
                <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900">Company</h4>

                    <ul className="space-y-3   text-slate-600">
                        <li>
                            <a href="#" className="hover:text-slate-900 transition-colors">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-slate-900 transition-colors">
                                How it Works
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-slate-900 transition-colors">
                                Safety
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-slate-900 transition-colors">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900">Legal</h4>

                    <ul className="space-y-3  text-slate-600">
                        <li>
                            <a href="#" className="hover:text-slate-900 transition-colors">
                                Privacy Policy
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-slate-900 transition-colors">
                                Terms of Service
                            </a>
                        </li>

                        <li>
                            <a href="#" className="hover:text-slate-900 transition-colors">
                                Cookie Policy
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            {/* Bottom */}
            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">

                <p>© 2026 Campus Crib. Built for the modern student.</p>

                <div className="flex gap-6">
                    <a href="#" className="hover:text-slate-700 transition-colors">Twitter</a>
                    <a href="#" className="hover:text-slate-700 transition-colors">Instagram</a>
                    <a href="#" className="hover:text-slate-700 transition-colors">LinkedIn</a>
                </div>

            </div>
        </footer>
    );
}