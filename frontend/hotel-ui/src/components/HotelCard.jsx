import { Link } from "react-router-dom";

export default function HotelCard({ hotel }) {
    return (
        <div className="rounded-xl border p-4 shadow-sm hover:shadow transition">
            <div className="h-40 w-full rounded-lg bg-gradient-to-br from-gray-200 to-gray-300 mb-3" />
            <h3 className="text-lg font-semibold">{hotel.name}</h3>
            <p className="text-sm text-gray-600">{hotel.city}</p>
            <div className="mt-2 flex items-center justify-between">
                <span className="font-medium">${hotel.price}/night</span>
                <span className="text-sm">⭐ {hotel.rating}</span>
            </div>
            <div className="mt-3">
                <Link
                    to={`/hotels/${hotel.id}`}
                    className="inline-block rounded bg-blue-600 px-3 py-1 text-white"
                >
                    View
                </Link>
            </div>
        </div>
    );
}
