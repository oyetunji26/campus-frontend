export default function Marquee() {
    return (
        <div className="bg-cool-slate py-12 overflow-hidden whitespace-nowrap">
            <div className="flex gap-20 items-center animate-marquee text-stone-400 font-header font-black text-7xl md:text-9xl uppercase italic">
                <span>Secure Your Crib</span>
                <span>Portal Alerts</span>
                <span>Verified Hostels</span>
                <span>Secure Your Crib</span>
            </div>
        </div>
    );
}