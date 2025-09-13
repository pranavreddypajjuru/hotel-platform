import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const [dest, setDest] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        const q = new URLSearchParams({ dest, checkIn, checkOut }).toString();
        navigate(`/hotels?${q}`);
    };

    return (
        <section className="mx-auto max-w-4xl px-4 py-16 text-center">
            <h2 className="mb-2 text-3xl font-bold">Find your perfect stay</h2>
            <p className="mb-8 text-gray-600">Search hotels, compare prices, and book instantly.</p>

            <form onSubmit={submit} className="flex flex-wrap items-center justify-center gap-3">
                <input
                    className="w-56 rounded border px-3 py-2"
                    placeholder="Destination"
                    value={dest}
                    onChange={(e) => setDest(e.target.value)}
                />
                <input
                    className="rounded border px-3 py-2"
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                />
                <input
                    className="rounded border px-3 py-2"
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                />
                <button className="rounded bg-blue-600 px-4 py-2 font-medium text-white" type="submit">
                    Search
                </button>
            </form>
        </section>
    );
}
