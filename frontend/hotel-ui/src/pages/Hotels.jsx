import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { HOTELS } from "../data/hotels";
import HotelCard from "../components/HotelCard";

export default function Hotels() {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const dest = (params.get("dest") || "").toLowerCase();

    const results = useMemo(() => {
        if (!dest) return HOTELS;
        return HOTELS.filter(h => h.city.toLowerCase().includes(dest) || h.name.toLowerCase().includes(dest));
    }, [dest]);

    return (
        <div className="mx-auto max-w-6xl px-4 py-8">
            <h2 className="mb-4 text-2xl font-semibold">Hotels {dest && `in "${dest}"`}</h2>
            {results.length === 0 ? (
                <p className="text-gray-600">No hotels found. Try another destination.</p>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {results.map(h => <HotelCard key={h.id} hotel={h} />)}
                </div>
            )}
        </div>
    );
}
