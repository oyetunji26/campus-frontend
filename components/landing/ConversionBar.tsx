import { ArrowRight } from "lucide-react";

export default function ConversionBar() {

    return (
        <div className="animate-item w-full max-w-3xl bg-white  rounded-xl md:rounded-full  shadow-2xl shadow-cool-slate/10 border border-warm-grey p-2 max-md:py-4  flex flex-col md:flex-row gap-3 items-center z-20">

            <select className="px-4 py-3 rounded-lg bg-soft-pearl outline-none font-medium text-lg w-full md:w-60 cursor-pointer">
                <option>Select University</option>
                <option>UNILAG (LAGOS)</option>
                <option>UI (Ibadan)</option>
                <option>FUNAAB (ABK)</option>
            </select>

            <input
                type="tel"
                placeholder="Your WhatsApp Number"
                className="flex-1 px-4 py-3 md:rounded-lg bg-soft-pearl rounded-3xl shadow-3xl outline-none font-medium text-lg placeholder:text-slate-400 max-md:w-full max-md:border-warm-grey max-md:border-b"
            />

            <button className="px-6 py-3 max-md:w-full bg-slate-600 cool-slate burnt-amber/70 text-white font-bold rounded-2xl md:rounded-full hover:brightness-110 active:scale-95 transition flex items-center justify-center gap-2">
                Get Alerts <ArrowRight size={18} />
            </button>

        </div>
    );
}