import { useParams, Link } from "react-router-dom";
import { HOTELS } from "../data/hotels";

export default function HotelDetails() {
    const { id } = useParams();
    const hotel = HOTELS.find(h => h.id === id);

    if (!hotel) {
        return (
            <div className="mx-auto max-w-3xl px-4 py-12">
                <p className="mb-4">Hotel not found.</p>
                <Link to="/hotels" className="rounded bg-blue-600 px-3 py-1 text-white">Back to list</Link>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-3xl px-4 py-12">
            <div className="h-56 w-full rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 mb-6" />
            <h1 className="text-3xl font-bold">{hotel.name}</h1>
            <p className="text-gray-600">{hotel.city}</p>
            <p className="mt-4 text-lg font-semibold">${hotel.price}/night • ⭐ {hotel.rating}</p>
            <Link to="/booking" className="mt-6 inline-block rounded bg-blue-600 px-4 py-2 text-white">Book now</Link>
        </div>
    );
}
