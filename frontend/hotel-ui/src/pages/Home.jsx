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
        <div>
            {/* HERO */}
            <section className="bg-gradient-to-b from-blue-50 to-white">
                <div className="mx-auto max-w-6xl px-4 py-16 text-center">

                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Find your perfect stay
                    </h1>
                    <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                        Search hotels, compare prices, and book instantly.
                    </p>

                    {/* SEARCH CARD */}
                    <form
                        onSubmit={submit}
                        className="mx-auto mt-8 grid w-full max-w-3xl grid-cols-1 gap-3 rounded-2xl bg-white p-4 shadow sm:grid-cols-2 lg:grid-cols-4"
                    >
                        <input
                            aria-label="Destination"
                            className="w-full rounded-lg border px-3 py-2"
                            placeholder="Destination"
                            value={dest}
                            onChange={(e) => setDest(e.target.value)}
                        />
                        <input
                            aria-label="Check-in date"
                            className="w-full rounded-lg border px-3 py-2"
                            type="date"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                        />
                        <input
                            aria-label="Check-out date"
                            className="w-full rounded-lg border px-3 py-2"
                            type="date"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </section>

            {/* FEATURE STRIP (optional starter content) */}
            <section className="mx-auto max-w-6xl px-4 py-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    <div className="rounded-xl border p-4">
                        <h3 className="font-semibold">Great prices</h3>
                        <p className="text-sm text-gray-600">Compare deals across cities.</p>
                    </div>
                    <div className="rounded-xl border p-4">
                        <h3 className="font-semibold">Trusted reviews</h3>
                        <p className="text-sm text-gray-600">Find the best-rated stays.</p>
                    </div>
                    <div className="rounded-xl border p-4">
                        <h3 className="font-semibold">Instant booking</h3>
                        <p className="text-sm text-gray-600">Secure checkout in seconds.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
