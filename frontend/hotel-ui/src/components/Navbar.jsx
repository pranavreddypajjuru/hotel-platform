import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    const linkClass = ({ isActive }) =>
        `px-2 py-1 rounded hover:bg-white/10 transition ${
            isActive ? "bg-white/10" : ""
        }`;

    return (
        <nav className="sticky top-0 z-50 bg-blue-600 text-white shadow">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <Link to="/" className="text-lg font-semibold tracking-tight">
                    HotelApp
                </Link>
                <div className="flex gap-2 text-sm">
                    <NavLink to="/" className={linkClass} end>Home</NavLink>
                    <NavLink to="/hotels" className={linkClass}>Hotels</NavLink>
                    <NavLink to="/booking" className={linkClass}>Booking</NavLink>
                    <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
                    <NavLink to="/login" className={linkClass}>Login</NavLink>
                </div>
            </div>
        </nav>
    );
}
